import React, { useReducer, useEffect } from 'react'
import { navigate } from '@reach/router'
import { validate } from 'email-validator'
import { constantCase } from 'change-case'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Signin, { Fieldset, Field, Header } from './signin.styles'
import Form from '../form'
import Icon from '../icons'
import useAuth from '../auth'
import { Input, Span, Button, Small, A } from '../../elements'
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
  const formIsValid = validateFields({ ...state, [target]: payload })

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
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data: { previousPage } } = useQuery(PREVIOUS_PAGE_QUERY) // prettier-ignore
  const { isSignin, email, password, confirm, message, formIsValid, username } = state // prettier-ignore
  const [{ doSignin, doSignup }, { loading, data, error }] = useAuth({
    email,
    username,
    password
  })
  const letMeIn = isSignin ? doSignin : doSignup
  const signinText = isSignin
    ? 'Already have an account?'
    : 'Need to sign up for an account?'
  const computedColors = [
    formIsValid ? 'green_color' : 'red_color',
    'width_100',
    'text_align_center',
    'font_size_s'
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
      letMeIn({ variables: { email, username, password } })
      dispatch({ type: RESET_FIELDS })
    }
  }

  const filterFields = field => {
    return isSignin && field.hideWhenSignin ? null : field
  }

  const renderLinks = () => {
    return isSignin ? (
      <A modifiers="red_color" onClick={toggleSignup}>
        Signup
      </A>
    ) : (
      <A modifiers="red_color" onClick={toggleSignup}>
        Signin
      </A>
    )
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

  return (
    <Signin>
      <Header />
      <Form method="post" onSubmit={handleOnSubmit}>
        <Fieldset>
          {fields.filter(filterFields).map((f, i) => (
            <Field key={i}>
              <Icon name={f.icon} />
              <Input
                placeholder={f.name}
                type={f.type}
                name={f.name}
                value={f.value}
                disabled={loading}
                onChange={handleOnChange}
              />
            </Field>
          ))}
          <Span modifiers={computedColors}>{message}</Span>
          <Field>
            <Button type="submit" disabled={loading}>
              Submit{loading ? 'ting...' : ''}
            </Button>
          </Field>
        </Fieldset>
      </Form>
      <Small modifiers="white_color">
        {signinText} {renderLinks()}
      </Small>
    </Signin>
  )
}

export default SigninPage
