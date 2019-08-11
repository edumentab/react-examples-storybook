// normally this file would be elsewhere in the app

import { createContext } from 'react'

export const UserContext = createContext({
  name: 'anonymous',
  loggedIn: false,
})
