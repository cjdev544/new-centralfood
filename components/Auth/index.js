import { useState } from 'react'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function Auth({ setOpenModal }) {
  const [showLogin, setShowLogin] = useState(false)

  return showLogin ? (
    <LoginForm setOpenModal={setOpenModal} setShowLogin={setShowLogin} />
  ) : (
    <RegisterForm setOpenModal={setOpenModal} setShowLogin={setShowLogin} />
  )
}
