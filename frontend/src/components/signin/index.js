import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { validate } from 'email-validator'
import { constantCase } from 'change-case'

import Signin, { Fieldset, Field, Header } from './signin.styles'
import Form from '../form'
import Icon from '../icons'
import useAuth from '../auth'
import { Input, Span, Button, Small, A as Link, P } from '../../elements'
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
import { SIGNIN, SIGNUP, REQUEST_RESET, RESET_PASSWORD } from './form-types'
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

const FooterText = ({ isSignin, setAuthType, isResetPassword }) => {
  const handleSetAuthType = e => {
    setAuthType(e.target.getAttribute('data-auth-type'))
  }

  if (isSignin) {
    return (
      <Small modifiers="white_color">
        Forgot your password?
        <Link
          modifiers="red_color"
          data-auth-type={REQUEST_RESET}
          onClick={handleSetAuthType}>
          &nbsp;reset
        </Link>
        <br />
        Need to sign up for an account?
        <Link
          modifiers="red_color"
          data-auth-type={SIGNUP}
          onClick={handleSetAuthType}>
          &nbsp;signup
        </Link>
      </Small>
    )
  }

  return (
    <Small modifiers="white_color">
      {isSignin ? 'Already have an account?' : 'Go to '}
      <Link
        modifiers="red_color"
        data-auth-type={SIGNIN}
        onClick={handleSetAuthType}>
        &nbsp;signin
      </Link>
    </Small>
  )
}

FooterText.propTypes = {
  isSignin: PropTypes.bool.isRequired,
  setAuthType: PropTypes.func.isRequired
}

const SigninComponent = ({
  chosenFields,
  setAuthType,
  authType,
  resetToken
}) => {
  const isResetPassword = !!resetToken
  if (isResetPassword) setAuthType(RESET_PASSWORD)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [mergeRemoteCartItems] = useMergeRemoteCartItemsMutation()
  const { email, password, confirm, message, formIsValid, username } = state // prettier-ignore
  const [authMutation, { loading, data, error }] = useAuth()
  const isSignin = authType === SIGNIN
  const isSigningUp = authType === SIGNUP
  const isRequestReset = authType === REQUEST_RESET

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
      navigate('/shop/')
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
    if (!validate(email) && !isResetPassword) {
      return dispatch({
        type: MESSAGE,
        payload: 'Email is not valid'
      })
    } else if (!password && !isRequestReset) {
      return dispatch({
        type: MESSAGE,
        payload: 'Please enter a password'
      })
    } else if (isSigningUp && !username) {
      return dispatch({
        type: MESSAGE,
        payload: 'Please enter a username'
      })
    } else if (!isSignin && !isRequestReset && password !== confirm) {
      return dispatch({
        type: MESSAGE,
        payload: 'Passwords do not match'
      })
    } else {
      authMutation({
        variables: { email, username, password, confirm, authType, resetToken }
      })
      dispatch({ type: RESET_FIELDS })
    }
  }

  const fields = {
    ...(chosenFields.includes(EMAIL) && {
      email: {
        icon: 'account-circle',
        type: 'text',
        value: email,
        name: 'email'
      }
    }),
    ...(chosenFields.includes(USERNAME) && {
      username: {
        icon: 'account-box',
        type: 'text',
        value: username,
        name: 'username'
      }
    }),
    ...(chosenFields.includes(PASSWORD) && {
      password: {
        icon: 'key',
        type: 'password',
        value: password,
        name: 'password'
      }
    }),
    ...(chosenFields.includes(CONFIRM) && {
      confirm: {
        icon: 'key',
        type: 'password',
        value: confirm,
        name: 'confirm'
      }
    })
  }

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
          {isRequestReset && (
            <P modifier="white_color">Enter the account email address</P>
          )}
          {isResetPassword && (
            <P modifier="white_color">Enter a new password</P>
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
      <FooterText setAuthType={setAuthType} isSignin={isSignin} />
    </Signin>
  )
}

SigninComponent.propTypes = {
  chosenFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  setAuthType: PropTypes.func.isRequired,
  authType: PropTypes.string.isRequired,
  resetToken: PropTypes.string
}

export default SigninComponent
