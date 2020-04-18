import React, { useReducer } from 'react'
import { navigate } from '@reach/router'
import { validate } from 'email-validator'
import { constantCase } from 'change-case'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Signin from './signin.styles'
import Icon from '../icons'
import { Input, Small, A, P } from '../elements'
import {
  EMAIL,
  PASSWORD,
  CONFIRM,
  TOGGLE_SIGNUP,
  MESSAGE
} from './action-types'

const initialState = {
  email: '',
  password: '',
  confirm: '',
  message: undefined,
  isSignup: false,
  formIsValid: false
}

const validateFields = ({ password, confirm, email }) => {
  return validate(email) && password && confirm && password === confirm
}

const reducer = (state, action) => {
  const { email, password, confirm, isSignup } = state
  const { payload, type } = action
  let formIsValid

  switch (type) {
    case EMAIL:
      return { ...state, email: payload }
    case PASSWORD:
      formIsValid = validateFields({ password: payload, confirm, email })
      return {
        ...state,
        message: formIsValid && 'Looks good!',
        formIsValid: formIsValid,
        password: payload
      }
    case CONFIRM:
      formIsValid = validateFields({ confirm: payload, password, email })
      return {
        ...state,
        message: formIsValid && 'Looks good!',
        formIsValid: formIsValid,
        confirm: payload
      }
    case MESSAGE:
      return { ...state, message: payload }
    case TOGGLE_SIGNUP:
      return {
        ...state,
        isSignup: !isSignup,
        email: '',
        password: '',
        confirm: '',
        message: ''
      }
    default:
      return state
  }
}

export const PREVIOUS_URL_QUERY = gql`
  query @client {
    previousUrl
  }
`

const SigninPage = ({ className }) => {
  const { data: { previousUrl } } = useQuery(PREVIOUS_URL_QUERY) // prettier-ignore
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isSignup, email, password, confirm, message, formIsValid } = state
  const signupText = isSignup
    ? 'Already have an account?'
    : 'Need to sign up for an account?'
  const messageModifiers = [
    formIsValid ? 'greenColor' : 'redColor',
    'width100',
    'textAlignCenter'
  ]

  const toggleSignup = () => dispatch({ type: TOGGLE_SIGNUP })

  const handleOnChange = async e => {
    dispatch({
      type: constantCase(e.target.name),
      payload: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    if (!validate(email)) {
      return dispatch({
        type: MESSAGE,
        payload: 'Email is not valid'
      })
    } else if (password.length < 1) {
      return dispatch({
        type: MESSAGE,
        payload: 'Please enter a password'
      })
    } else if (isSignup && password !== confirm) {
      return dispatch({
        type: MESSAGE,
        payload: 'Passwords do not match'
      })
    } else {
      navigate(previousUrl ? -1 : '/') // go back a page or go home
    }
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
                name="confirm"
                value={confirm}
                onChange={handleOnChange}
              />
            </Signin.Field>
          )}

          <P modifiers={messageModifiers}>{message}</P>

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
