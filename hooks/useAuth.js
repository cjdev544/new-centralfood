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

  const updateName = async (formData, setIsLoading) => {
    try {
      const user = auth.currentUser
      await updateProfile(user, {
        displayName: `${formData.name} ${formData.lastname}`,
      })
      setAuthUser({
        ...authUser,
        displayName: `${formData.name} ${formData.lastname}`,
      })
      toast.success('El nombre fue cambiado correctamente')
      setIsLoading(false)
    } catch (err) {
      toast.error('Error al cambiar el nombre')
      setIsLoading(false)
    }
  }

  const updateEmailUser = async (formData, setIsLoading) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
      console.log(userCredential.user)
      await updateEmail(userCredential.user, formData.newEmail)
      setAuthUser({
        ...authUser,
        email: formData.newEmail,
      })
      toast.success('El email fue cambiado correctamente')
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      toast.error('Error al cambiar el correo')
      setIsLoading(false)
    }
  }

  const updatePasswordUser = async (formData, setIsLoading) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )

      await updatePassword(userCredential.user, formData.sewPassword)
      toast.success('La contraseña fue cambiada correctamente')
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      toast.error('Error al cambiar la contraseña')
      setIsLoading(false)
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
    updateName,
    updateEmailUser,
    updatePasswordUser,
    logout,
  }
}

export default useAuth
