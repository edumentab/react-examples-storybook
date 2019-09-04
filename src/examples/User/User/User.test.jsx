import React from 'react'
import { mount } from 'enzyme'

import { User } from '.'
import { UserContext } from './_UserContext'

describe('The User component (new context version)', () => {
  it('should render name fetched from user context', () => {
    const name = 'Johan Hegg'
    const userData = { name, loggedIn: true }
    const wrapper = mount(
      <UserContext.Provider value={userData}>
        <div>
          <div>
            <div>
              <User />
            </div>
          </div>
        </div>
      </UserContext.Provider>
    )
    expect(wrapper).toIncludeText(name)
  })
})
