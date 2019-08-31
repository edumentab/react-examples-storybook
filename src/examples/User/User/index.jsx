import React from 'react'

import { UserContext } from './_UserContext'

export const User = () => {
  return (
    <UserContext.Consumer>
      {value => (
        <span>
          {value.name || 'Anonymous'} {value.loggedIn && '(authenticated)'}
        </span>
      )}
    </UserContext.Consumer>
  )
}
