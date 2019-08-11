import React from 'react'
import { shallow } from 'enzyme'

jest.mock('../../../logic/getLetters', () => ({ getLetters: jest.fn() }))
jest.mock('../../../logic/getNbrOfErrors', () => ({
  getNbrOfErrors: jest.fn(),
}))
jest.mock('../../../logic/getStatus', () => ({ getStatus: jest.fn() }))

import { getLetters, getNbrOfErrors, getStatus } from '../../../logic'

import { UI } from '.'
import { EnterField } from '../EnterField'
import { Word } from '../Word'
import { GuessHistory } from '../GuessHistory'
import { Gallow } from '../Gallow'
import { Status } from '../Status'

describe('The HangMan UI component', () => {
  const state = {
    guesses: ['a', 'o'],
    answer: 'plane',
    maxGuesses: 4,
  }
  let wrapper, callback
  beforeEach(() => {
    callback = jest.fn()
    wrapper = shallow(<UI makeGuess={callback} state={state} />)
  })
  describe('the EnterField usage', () => {
    test('it renders EnterField', () => {
      expect(wrapper.find(EnterField)).toExist()
    })
    test('it passes the callback correctly', () => {
      expect(wrapper.find(EnterField)).toHaveProp('onSubmit', callback)
    })
    describe('when getStatus returns "playing"', () => {
      beforeEach(() => {
        getStatus.mockReturnValue('playing')
        wrapper = shallow(<UI makeGuess={callback} state={state} />)
      })
      test('it passes disabled=false', () => {
        expect(wrapper.find(EnterField)).toHaveProp('disabled', false)
      })
    })
    describe('when getStatus does not returns "playing"', () => {
      beforeEach(() => {
        getStatus.mockReturnValue('won')
        wrapper = shallow(<UI makeGuess={callback} state={state} />)
      })
      test('it passes disabled=true', () => {
        expect(wrapper.find(EnterField)).toHaveProp('disabled', true)
      })
    })
  })
  describe('the Word usage', () => {
    const letters = ['a', null, 'b']
    beforeEach(() => {
      getLetters.mockReturnValue(letters)
      wrapper = shallow(<UI makeGuess={callback} state={state} />)
    })
    test('it renders Word', () => {
      expect(wrapper.find(Word)).toExist()
    })
    test('it passed the return value from getLetters', () => {
      expect(wrapper.find(Word)).toHaveProp('letters', letters)
    })
    test('it passed the current state to getLetters', () => {
      expect(getLetters).toHaveBeenCalledWith(state)
    })
  })
  describe('the GuessHistory usage', () => {
    test('it renders GuessHistory', () => {
      expect(wrapper.find(GuessHistory)).toExist()
    })
    test('it passed guesses from state', () => {
      expect(wrapper.find(GuessHistory)).toHaveProp('guesses', state.guesses)
    })
  })
  describe('the Gallow usage', () => {
    const nbrOfErrors = 666
    beforeEach(() => {
      getNbrOfErrors.mockReturnValue(nbrOfErrors)
      wrapper = shallow(<UI makeGuess={callback} state={state} />)
    })
    test('it renders Gallow', () => {
      expect(wrapper.find(Gallow)).toExist()
    })
    test('it passed the return value from getNbrOfErrors', () => {
      expect(wrapper.find(Gallow)).toHaveProp('nbrOfErrors', nbrOfErrors)
    })
    test('it passed the current state to getNbrOfErrors', () => {
      expect(getNbrOfErrors).toHaveBeenCalledWith(state)
    })
  })
  describe('the Status usage', () => {
    const status = 'foobar'
    const nbrOfErrors = 777
    beforeEach(() => {
      getStatus.mockReturnValue(status)
      getNbrOfErrors.mockReturnValue(nbrOfErrors)
      wrapper = shallow(<UI makeGuess={callback} state={state} />)
    })
    test('it renders Status', () => {
      expect(wrapper.find(Status)).toExist()
    })
    test('it passed the return value from getStatus', () => {
      expect(wrapper.find(Status)).toHaveProp('status', status)
    })
    test('it passed the current state to getStatus', () => {
      expect(getStatus).toHaveBeenCalledWith(state)
    })
    test('it passed correct remaining count', () => {
      expect(wrapper.find(Status)).toHaveProp(
        'remaining',
        state.maxGuesses - nbrOfErrors - 1
      )
    })
  })
})
