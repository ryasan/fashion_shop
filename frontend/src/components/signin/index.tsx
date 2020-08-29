import React, { useReducer, useEffect } from 'react'
import { navigate } from '@reach/router'
import { validate } from 'email-validator'
import { constantCase, capitalCase } from 'change-case'

import Signin, { Header, Form } from './signin.styles'
import useAuth from '../auth'
import FooterText from './footer-text'
import { useMergeRemoteCartItemsMutation } from '../../graphql/cart/hooks'
import {
  EMAIL,
  USERNAME,
  PASSWORD,
  CONFIRM,
  MESSAGE,
  RESET_FIELDS
} from '../../types/auth-field-types'
import {
  SIGNUP,
  SIGNIN,
  REQUEST_RESET,
  PASSWORD_RESET
} from '../../types/auth-form-types'

type StateType = {
  email: string
  username: string
  password: string
  confirm: string
  message: string
  formIsValid: boolean
}

const initialState: StateType = {
  email: '',
  username: '',
  password: '',
  confirm: '',
  message: '',
  formIsValid: false
}

const validateFields = ({
  password,
  confirm,
  email,
  username
}: StateType): boolean => {
  return !!(validate(email) && username && password && password === confirm)
}

const createNewState = (state: StateType) => (
  type: string,
  payload: string | undefined | null
): StateType => {
  const target = type.toLowerCase()
  const formIsValid = validateFields({ ...state, [target]: payload })

  return {
    ...state,
    ...(formIsValid && { message: 'Looks good!' }),
    [target]: payload,
    formIsValid
  }
}

type Action =
  | { type: 'EMAIL'; payload: string }
  | { type: 'USERNAME'; payload: string }
  | { type: 'PASSWORD'; payload: string }
  | { type: 'CONFIRM'; payload: string }
  | { type: 'MESSAGE'; payload: string }
  | { type: 'RESET_FIELDS'; payload: undefined | null }

const reducer = (state: StateType, action: Action): StateType => {
  const { payload, type } = action

  switch (type) {
    case EMAIL:
    case USERNAME:
    case PASSWORD:
    case CONFIRM:
    case MESSAGE:
      return createNewState(state)(type, payload)
    case RESET_FIELDS:
      return initialState
    default:
      return state
  }
}

interface SigninInterface {
  chosenFields: string[]
  resetToken: string
  isRequestReset: boolean
  isPasswordReset: boolean
  isSignin: boolean
  isSignup: boolean
}

const SigninComponent: React.FC<SigninInterface> = ({
  chosenFields,
  resetToken,
  isRequestReset,
  isPasswordReset,
  isSignin,
  isSignup
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [mergeRemoteCartItems] = useMergeRemoteCartItemsMutation()
  const { email, password, confirm, message, formIsValid, username } = state
  const [authMutation, { loading, data, error }] = useAuth()
  const showsEmailField = () => chosenFields.includes(EMAIL)
  const showsUsernameField = () => chosenFields.includes(USERNAME)
  const showsPasswordField = () => chosenFields.includes(PASSWORD)
  const showsConfirmField = () => chosenFields.includes(CONFIRM)
  const emailIsNotValid = () => showsEmailField() && !validate(email)
  const passwordIsNotValid = () => showsPasswordField() && !password
  const usernameIsNotValid = () => showsUsernameField() && !username
  const confirmPasswordIsNotValid = () => showsConfirmField() && password !== confirm // prettier-ignore

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
      // TODO: use me query instead of signin to validate user
      mergeRemoteCartItems({
        variables: { remoteCartItems: data.signin.cart }
      })
      navigate('/shop/')
    }
    if (data?.signup) {
      navigate('/shop/')
    }
    if (data?.requestReset) {
      dispatch({
        type: MESSAGE,
        payload: data.requestReset.message
      })
    }
    if (data?.resetPassword) {
      dispatch({
        type: MESSAGE,
        payload: 'Passwords do not match'
      })
      setTimeout(() => navigate('/shop/'), 3000)
    }
  }, [data])

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailIsNotValid()) {
      return dispatch({
        type: MESSAGE,
        payload: 'Email is not valid'
      })
    } else if (passwordIsNotValid()) {
      return dispatch({
        type: MESSAGE,
        payload: 'Please enter a password'
      })
    } else if (usernameIsNotValid()) {
      return dispatch({
        type: MESSAGE,
        payload: 'Please enter a username'
      })
    } else if (confirmPasswordIsNotValid()) {
      return dispatch({
        type: MESSAGE,
        payload: 'Passwords do not match'
      })
    } else {
      const [authMethod] = [
        isSignup && SIGNUP,
        isSignin && SIGNIN,
        isRequestReset && REQUEST_RESET,
        isPasswordReset && PASSWORD_RESET
      ].filter(Boolean)

      authMutation({
        variables: {
          email,
          username,
          password,
          confirm,
          resetToken,
          authMethod
        }
      })
      dispatch({ type: RESET_FIELDS, payload: null })
    }
  }

  const handleOnChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement
    dispatch({
      type: constantCase(target.name),
      payload: target.value
    })
  }

  const fields = {
    ...(showsEmailField() && {
      email: {
        icon: 'account-circle',
        type: 'text',
        value: email,
        name: 'email'
      }
    }),
    ...(showsUsernameField() && {
      username: {
        icon: 'account-box',
        type: 'text',
        value: username,
        name: 'username'
      }
    }),
    ...(showsPasswordField() && {
      password: {
        icon: 'key-outlined',
        type: 'password',
        value: password,
        name: 'password'
      }
    }),
    ...(showsConfirmField() && {
      confirm: {
        icon: 'key-outlined',
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

  const headerTextColors = ['white_color', 'font_size_xlg', 'text_align_center']

  const authValidationColors = [
    formIsValid ? 'green_color' : 'red_color',
    'width_100_pct',
    'text_align_center',
    'font_size_m'
  ]

  return (
    <Signin>
      <Header />
      <Form method='post' onSubmit={handleOnSubmit}>
        <Form.Fieldset>
          {headerText && (
            <Form.HeaderText modifiers={headerTextColors}>
              {headerText}
            </Form.HeaderText>
          )}
          {Object.values(fields).map((field, i) => (
            <Form.InputField
              key={i}
              placeholder={capitalCase(field.name)}
              type={field.type}
              name={field.name}
              value={field.value}
              disabled={loading}
              onChange={handleOnChange}
              icon={field.icon}
              theme='dark'
            />
          ))}
          <Form.FeedbackMessage modifiers={authValidationColors}>
            {message}
          </Form.FeedbackMessage>
          <Form.SubmitBtn type='submit' disabled={loading} />
        </Form.Fieldset>
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

export default SigninComponent
