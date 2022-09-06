import { useState } from 'react'

import AuthContext from './authContext'

const AuthState = ({ children }) => {
  const [authUser, setAuthUser] = useState(undefined)

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
