import React from 'react'
import { shallow } from 'enzyme'

import { Hello } from '.'

describe('The Hello component', () => {
  it('says hello to the name that was passed in', () => {
    const wrapper = shallow(<Hello name="Göran" />)
    expect(wrapper.text()).toEqual('Hello Göran!')
  })
})
