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
        console.log(user)
        if (!authUser?.uid) {
          setAuthUser({ uid, displayName, email, photoURL, provider })
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startWithGoogle = async (setIsLoading) => {
    try {
      await signInWithPopup(auth, googleProvider)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
      toast.error('Error al conectar con Gmail! intente mas tarde')
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
    logout,
  }
}

export default useAuth
