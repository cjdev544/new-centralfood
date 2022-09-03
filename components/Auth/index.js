import { useState } from 'react'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true)

  return showLogin ? (
    <LoginForm setShowLogin={setShowLogin} />
  ) : (
    <RegisterForm setShowLogin={setShowLogin} />
  )
}
