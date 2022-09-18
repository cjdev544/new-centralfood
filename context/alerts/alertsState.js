import { useState } from 'react'

import AlertsContext from './alertsContext'

const AlertState = ({ children }) => {
  const [ordersAlert, setOrdersAlert] = useState([])

  return (
    <AlertsContext.Provider value={{ ordersAlert, setOrdersAlert }}>
      {children}
    </AlertsContext.Provider>
  )
}

export default AlertState
