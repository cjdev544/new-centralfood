import { useState } from 'react'

import AuthContext from './AuthContext'

const AuthState = ({ children }) => {
  const [authUser, setAuthUser] = useState(undefined)

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
