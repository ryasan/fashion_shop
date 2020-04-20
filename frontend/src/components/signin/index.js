import React, { useReducer } from 'react'
import { navigate } from '@reach/router'
import { validate } from 'email-validator'
import { constantCase } from 'change-case'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Signin from './signin.styles'
import Icon from '../icons'
import { Input } from '../elements'
import { useSignupMutation } from '../../graphql/user/hooks'
import {
  EMAIL,
  USERNAME,
  PASSWORD,
  CONFIRM,
  TOGGLE_SIGNUP,
  MESSAGE
} from './action-types'

const initialState = {
  email: '',
  username: '',
  password: '',
  confirm: '',
  message: null,
  isSignup: false,
  formIsValid: false
}

const validateFields = ({ password, confirm, email, username }) => {
  return validate(email) && username && password && password === confirm
}

const createNewState = ({ state, type, payload }) => {
  const target = type.toLowerCase()
  const formIsValid = validateFields({
    ...state,
    [target]: payload
  })

  return {
    ...state,
    formIsValid,
    [target]: payload,
    message: formIsValid ? 'Looks good!' : null
  }
}

const reducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case EMAIL:
      return createNewState({ state, type, payload })
    case USERNAME:
      return createNewState({ state, type, payload })
    case PASSWORD:
      return createNewState({ state, type, payload })
    case CONFIRM:
      return createNewState({ state, type, payload })
    case MESSAGE:
      return { ...state, message: payload }
    case TOGGLE_SIGNUP:
      return { ...initialState, isSignup: !state.isSignup }
    default:
      return state
  }
}

const PREVIOUS_PAGE_QUERY = gql`
  query @client {
    previousPage
  }
`

const SigninPage = ({ className }) => {
  const { data: { previousPage } } = useQuery(PREVIOUS_PAGE_QUERY) // prettier-ignore
  const [signup] = useSignupMutation()
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isSignup, email, password, confirm, message, formIsValid, username } = state // prettier-ignore
  const signinText = isSignup
    ? 'Already have an account?'
    : 'Need to sign up for an account?'
  const messageModifiers = [
    formIsValid ? 'greenColor' : 'redColor',
    'width100',
    'textAlignCenter',
    'smallText'
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
      return dispatch({ type: MESSAGE, payload: 'Email is not valid' })
    } else if (!username) {
      return dispatch({ type: MESSAGE, payload: 'Please enter a username' })
    } else if (!password) {
      return dispatch({ type: MESSAGE, payload: 'Please enter a password' })
    } else if (isSignup && password !== confirm) {
      return dispatch({ type: MESSAGE, payload: 'Passwords do not match' })
    } else {
      signup({ variables: { email, username, password } })
      navigate(['/', '/shop'].includes(previousPage) ? -1 : '/') // go back a page or go home
    }
  }

  const renderLinks = () => {
    return isSignup ? (
      <Signin.Link modifiers="redColor" onClick={toggleSignup}>
        Signin
      </Signin.Link>
    ) : (
      <Signin.Link modifiers="redColor" onClick={toggleSignup}>
        Signup
      </Signin.Link>
    )
  }

  const fields = [
    {
      icon: 'account-circle',
      type: 'text',
      name: 'email',
      value: email,
      isSignup: false
    },
    {
      icon: 'account-box',
      type: 'text',
      name: 'username',
      value: username,
      isSignup: true
    },
    {
      icon: 'key',
      type: 'password',
      name: 'password',
      value: password,
      isSignup: false
    },
    {
      icon: 'key',
      type: 'password',
      name: 'confirm',
      value: confirm,
      isSignup: true
    }
  ]

  return (
    <Signin>
      <Signin.Header />
      <Signin.Form method="post" onSubmit={handleOnSubmit}>
        <Signin.Fieldset>
          {fields
            .filter(f => isSignup || !f.isSignup)
            .map((f, i) => (
              <Signin.Field key={i}>
                <Icon name={f.icon} />
                <Input
                  placeholder={f.name}
                  type={f.type}
                  name={f.name}
                  value={f.value}
                  onChange={handleOnChange}
                />
              </Signin.Field>
            ))}

          <Signin.MessageText modifiers={messageModifiers}>
            {message}
          </Signin.MessageText>

          <Signin.Field>
            <Signin.Submit type="submit" />
          </Signin.Field>
        </Signin.Fieldset>
      </Signin.Form>

      <Signin.SmallText modifiers="whiteColor">
        {signinText} {renderLinks()}
      </Signin.SmallText>
    </Signin>
  )
}

export default SigninPage
