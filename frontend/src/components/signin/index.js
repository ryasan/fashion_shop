import React, { useReducer } from 'react'
import { navigate } from '@reach/router'
import { validate } from 'email-validator'
import { constantCase } from 'change-case'

import Signin from './signin.styles'
import Icon from '../icons'
import { Input, Small, A, P } from '../elements'
import {
  EMAIL,
  PASSWORD,
  CONFIRM_PASSWORD,
  TOGGLE_SIGNUP,
  MESSAGE
} from './action-types'

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  message: '',
  isSignup: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case EMAIL:
      return { ...state, email: action.payload }
    case PASSWORD:
      return { ...state, password: action.payload }
    case CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload }
    case TOGGLE_SIGNUP:
      return { ...state, isSignup: !state.isSignup }
    case MESSAGE:
      return {
        ...state,
        message: action.payload.message,
        formIsValid: action.payload.isValid
      }
    default:
      return state
  }
}

const SigninPage = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isSignup, email, password, confirmPassword, message } = state
  const signupText = isSignup
    ? 'Already have an account?'
    : 'Need to sign up for an account?'

  const toggleSignup = () => dispatch({ type: TOGGLE_SIGNUP })

  const handleOnChange = async e => {
    dispatch({
      type: constantCase(e.target.name),
      payload: e.target.value
    })
  }

  const validateForm = () => {
    if (!validate(email)) {
      return dispatch({
        type: MESSAGE,
        payload: { message: 'Email is not valid' }
      })
    } else if (password.length < 1) {
      return dispatch({
        type: MESSAGE,
        payload: { message: 'Please enter a password' }
      })
    } else if (isSignup && password !== confirmPassword) {
      return dispatch({
        type: MESSAGE,
        payload: { message: 'Passwords do not match' }
      })
    } else {
      navigate(-1)
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    validateForm()
  }

  const renderLinks = () => {
    return isSignup ? (
      <A modifiers="redColor" onClick={toggleSignup}>
        Signin
      </A>
    ) : (
      <A modifiers="redColor" onClick={toggleSignup}>
        Signup
      </A>
    )
  }

  return (
    <Signin>
      <Signin.Header />
      <Signin.Form method="post" onSubmit={handleOnSubmit}>
        <Signin.Fieldset>
          <Signin.Field>
            <Icon name="account" />
            <Input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
            />
          </Signin.Field>

          <Signin.Field>
            <Icon name="key" />
            <Input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
            />
          </Signin.Field>

          {isSignup && (
            <Signin.Field>
              <Icon name="key" />
              <Input
                placeholder="confirm password"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
              />
            </Signin.Field>
          )}

          <P modifiers={['redColor', 'width100', 'textAlignCenter']}>
            {message}
          </P>

          <Signin.Field>
            <Signin.Submit type="submit" />
          </Signin.Field>
        </Signin.Fieldset>
      </Signin.Form>

      <Small modifiers="whiteColor">
        {signupText} {renderLinks()}
      </Small>
    </Signin>
  )
}

export default SigninPage
