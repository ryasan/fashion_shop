import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { validate } from 'email-validator'
import { constantCase } from 'change-case'
import { Link } from 'gatsby'

import Signin, { Fieldset, Field, Header } from './signin.styles'
import Form from '../form'
import Icon from '../icons'
import useAuth from '../auth'
import { Input, Span, Button, Small } from '../../elements'
import { useMergeRemoteCartItemsMutation } from '../../graphql/cart/hooks'
import {
  EMAIL,
  USERNAME,
  PASSWORD,
  CONFIRM,
  TOGGLE_SIGNUP,
  MESSAGE,
  RESET_FIELDS,
  CHANGE_FORM_TYPE
} from './action-types'
import { toast } from '../toast'

const initialState = {
  email: '',
  username: '',
  password: '',
  confirm: '',
  message: null,
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
    case CHANGE_FORM_TYPE:
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

const FooterText = ({
  isSignin,
  isSignup,
  isRequestReset,
  isPasswordReset
}) => {
  const contents = [
    isSignin && {
      text: 'Forgot your password?',
      to: '/signin/request-reset/',
      link: 'Reset'
    },
    isSignin && {
      text: 'Need to sign up for an account?',
      to: '/signup/',
      link: 'Signup'
    },
    isSignup && {
      text: 'Already have an account? Back to signin.',
      to: '/signin/',
      link: 'Signin'
    }
  ]

  return contents.filter(Boolean).map((c, i) => (
    <Small key={i}>
      {c.text}{' '}
      <Link to={c.to} style={{ color: 'var(--red)' }}>
        {c.link}
      </Link>
    </Small>
  ))
}

FooterText.propTypes = {
  isSignin: PropTypes.string,
  isSignup: PropTypes.string,
  isRequestReset: PropTypes.string,
  isPasswordReset: PropTypes.string
}

const SigninComponent = ({
  chosenFields,
  resetToken,
  isRequestReset,
  isPasswordReset,
  isSignin,
  isSignup
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [mergeRemoteCartItems] = useMergeRemoteCartItemsMutation()
  const { email, password, confirm, message, formIsValid, username } = state // prettier-ignore
  const [authMutation, { loading, data, error }] = useAuth()
  const showsEmailField = chosenFields.includes(EMAIL)
  const showsUsernameField = chosenFields.includes(USERNAME)
  const showsPasswordField = chosenFields.includes(PASSWORD)
  const showsConfirmField = chosenFields.includes(CONFIRM)

  useEffect(() => {
    if (error) {
      dispatch({
        type: MESSAGE,
        payload: error.message.substring(15)
      })
    }
  }, [error])

  useEffect(() => {
    if (data?.signin) {
      mergeRemoteCartItems({
        variables: { remoteCartItems: data.signin.cart }
      })
      navigate('/shop/')
    }
    if (data?.signup) {
      navigate('/shop/')
    }
    if (data?.requestReset) {
      toast(data.requestReset.message)
    }
    if (data?.resetPassword) {
      toast('Your password has successfully been changed.')
      setTimeout(() => navigate('/shop/'), 3000)
    }
  }, [data])

  const handleOnChange = async e => {
    dispatch({
      type: constantCase(e.target.name),
      payload: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    if (showsEmailField && !validate(email)) {
      return dispatch({
        type: MESSAGE,
        payload: 'Email is not valid'
      })
    } else if (showsPasswordField && !password) {
      return dispatch({
        type: MESSAGE,
        payload: 'Please enter a password'
      })
    } else if (showsUsernameField && !username) {
      return dispatch({
        type: MESSAGE,
        payload: 'Please enter a username'
      })
    } else if (showsConfirmField && password !== confirm) {
      return dispatch({
        type: MESSAGE,
        payload: 'Passwords do not match'
      })
    } else {
      const [authType] = [
        isSignup,
        isSignin,
        isRequestReset,
        isPasswordReset
      ].filter(Boolean)

      authMutation({
        variables: { email, username, password, confirm, resetToken, authType }
      })
      dispatch({ type: RESET_FIELDS })
    }
  }

  const fields = {
    ...(showsEmailField && {
      email: {
        icon: 'account-circle',
        type: 'text',
        value: email,
        name: 'email'
      }
    }),
    ...(showsUsernameField && {
      username: {
        icon: 'account-box',
        type: 'text',
        value: username,
        name: 'username'
      }
    }),
    ...(showsPasswordField && {
      password: {
        icon: 'key',
        type: 'password',
        value: password,
        name: 'password'
      }
    }),
    ...(showsConfirmField && {
      confirm: {
        icon: 'key',
        type: 'password',
        value: confirm,
        name: 'confirm'
      }
    })
  }

  const headerText =
    (isSignin && 'Sign in.') ||
    (isSignup && 'Create a new account.') ||
    (isRequestReset && 'Enter the account email address.') ||
    (isPasswordReset && 'Enter your new password.')

  const messageColors = [
    formIsValid ? 'green_color' : 'red_color',
    'width_100',
    'text_align_center',
    'font_size_s'
  ]

  return (
    <Signin>
      <Header />
      <Form method="post" onSubmit={handleOnSubmit}>
        <Fieldset>
          {headerText && (
            <Span
              modifiers={['white_color', 'font_size_lg', 'text_align_center']}>
              {headerText}
            </Span>
          )}
          {Object.values(fields).map((f, i) => (
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
          <Span modifiers={messageColors}>{message}</Span>
          <Field>
            <Button type="submit" disabled={loading}>
              Submit{loading ? 'ting...' : ''}
            </Button>
          </Field>
        </Fieldset>
      </Form>
      <FooterText
        isSignin={isSignin}
        isSignup={isSignup}
        isRequestReset={isRequestReset}
        isPasswordReset={isPasswordReset}
      />
    </Signin>
  )
}

SigninComponent.propTypes = {
  chosenFields: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SigninComponent
