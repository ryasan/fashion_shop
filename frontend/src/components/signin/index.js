import React, { useReducer, useEffect } from 'react'
import { navigate } from '@reach/router'
import { validate } from 'email-validator'
import { constantCase } from 'change-case'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Signin from './signin.styles'
import Icon from '../icons'
import { Input } from '../elements'
import { useSigninMutation, useSignupMutation } from '../../graphql/user/hooks'
import {
  EMAIL,
  USERNAME,
  PASSWORD,
  CONFIRM,
  TOGGLE_SIGNUP,
  MESSAGE,
  RESET_FIELDS
} from './action-types'

const initialState = {
  email: '',
  username: '',
  password: '',
  confirm: '',
  message: null,
  isSignin: true,
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
    case RESET_FIELDS:
      return { ...initialState, isSignin: state.isSignin }
    case TOGGLE_SIGNUP:
      return { ...initialState, isSignin: !state.isSignin }
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
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isSignin, email, password, confirm, message, formIsValid, username } = state // prettier-ignore
  const usePromiseMutation = isSignin ? useSigninMutation : useSignupMutation
  const { authorize, data, loading, error } = usePromiseMutation()
  const signinText = isSignin
    ? 'Already have an account?'
    : 'Need to sign up for an account?'
  const messageModifiers = [
    formIsValid ? 'greenColor' : 'redColor',
    'width100',
    'textAlignCenter',
    'smallText'
  ]

  useEffect(() => {
    if (error) {
      dispatch({
        type: MESSAGE,
        payload: error.message.substring(15)
      })
    }
  }, [error])

  useEffect(() => {
    if (data) {
      const routes = ['/', '/shop', '/account']
      navigate(routes.includes(previousPage) ? -1 : '/') // go back a page or go home
    }
  }, [data])

  const toggleSignup = () => {
    dispatch({ type: TOGGLE_SIGNUP })
  }

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
    } else if (!password) {
      return dispatch({
        type: MESSAGE,
        payload: 'Please enter a password'
      })
    } else if (!isSignin && !username) {
      return dispatch({
        type: MESSAGE,
        payload: 'Please enter a username'
      })
    } else if (!isSignin && password !== confirm) {
      return dispatch({
        type: MESSAGE,
        payload: 'Passwords do not match'
      })
    } else {
      dispatch({ type: RESET_FIELDS })
      authorize({
        variables: { email, username, password }
      })
    }
  }

  const fields = [
    {
      icon: 'account-circle',
      type: 'text',
      name: 'email',
      value: email,
      hideWhenSignin: false
    },
    {
      icon: 'account-box',
      type: 'text',
      name: 'username',
      value: username,
      hideWhenSignin: true
    },
    {
      icon: 'key',
      type: 'password',
      name: 'password',
      value: password,
      hideWhenSignin: false
    },
    {
      icon: 'key',
      type: 'password',
      name: 'confirm',
      value: confirm,
      hideWhenSignin: true
    }
  ]

  const filterFields = field => {
    return isSignin && field.hideWhenSignin ? null : field
  }

  const renderLinks = () => {
    return isSignin ? (
      <Signin.Link modifiers="redColor" onClick={toggleSignup}>
        Signup
      </Signin.Link>
    ) : (
      <Signin.Link modifiers="redColor" onClick={toggleSignup}>
        Signin
      </Signin.Link>
    )
  }

  return (
    <Signin>
      <Signin.Header />
      <Signin.Form method="post" onSubmit={handleOnSubmit}>
        <Signin.Fieldset>
          {fields.filter(filterFields).map((f, i) => (
            <Signin.Field key={i}>
              <Icon name={f.icon} />
              <Input
                placeholder={f.name}
                type={f.type}
                name={f.name}
                value={f.value}
                disabled={loading}
                onChange={handleOnChange}
              />
            </Signin.Field>
          ))}

          <Signin.MessageText modifiers={messageModifiers}>
            {message}
          </Signin.MessageText>

          <Signin.Field>
            <Signin.Submit type="submit" disabled={loading}>
              Submit{loading ? 'ting...' : ''}
            </Signin.Submit>
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
