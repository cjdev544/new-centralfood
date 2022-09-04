import { useContext, useEffect } from 'react'
import {
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from 'firebase/auth'
import { toast } from 'react-toastify'

import { auth, googleProvider } from '../firebase/config'
import AuthContext from '../context/auth/AuthContext'

const useAuth = () => {
  const { authUser, setAuthUser } = useContext(AuthContext)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        const { uid, displayName, email, photoURL, providerData } = user
        const provider = providerData[0].providerId

        if (!authUser?.uid) {
          setAuthUser({ uid, displayName, email, photoURL, provider })
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startWithGoogle = async (setOpenModal, setIsLoading) => {
    try {
      await signInWithPopup(auth, googleProvider)
      setIsLoading(false)
      setOpenModal(false)
    } catch (err) {
      setIsLoading(false)
      setOpenModal(false)
      toast.error('Error al conectar con Gmail! intente mas tarde')
    }
  }

  const registerWithEmailAndPassword = async (
    email,
    password,
    displayName,
    setOpenModal,
    setIsLoading
  ) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await updateProfile(credentials.user, { displayName })
      setIsLoading(false)
      setOpenModal(false)
    } catch (err) {
      setIsLoading(false)

      if (err.code === 'auth/email-already-in-use') {
        toast.error('El correo ya se encuentra registrado')
        return
      }

      toast.error('Error en el servidor! intente mas tarde')
    }
  }

  const loginWhitEmailAndPassword = async (
    emailUser,
    password,
    setOpenModal,
    setIsLoading
  ) => {
    try {
      await signInWithEmailAndPassword(auth, emailUser, password)
      setIsLoading(false)
      setOpenModal(false)
    } catch (err) {
      setIsLoading(false)

      if (err.code === 'auth/wrong-password') {
        toast.error('Combinación de correo y contraseña no es correcta')
        return
      }

      if (err.code === 'auth/user-not-found') {
        toast.error('Correo no registrado')
        return
      }

      toast.error('Error en el servidor! intente mas tarde')
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setAuthUser(null)
    } catch (err) {
      console.log(err)
      toast.error('Error en el servidor! intente mas tarde')
    }
  }

  return {
    authUser,
    startWithGoogle,
    loginWhitEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
  }
}

export default useAuth
