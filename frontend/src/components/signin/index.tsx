import React, { useReducer, useEffect } from 'react'
import { navigate } from '@reach/router'
import { validate } from 'email-validator'
import { constantCase, capitalCase } from 'change-case'

import Signin, { Header, Form } from './signin.styles'
import useAuth from '../auth'
import FooterText from './footer-text'
import { toast } from '../toast'
import { useMergeRemoteCartItemsMutation } from '../../graphql/cart/hooks'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
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
    resetToken?: string
    isRequestReset?: boolean
    isPasswordReset?: boolean
    isSignin?: boolean
    isSignup?: boolean
}

const optionIncludes = (field: string, chosenFields: string[]) => {
    return chosenFields.includes(field)
}

const invalidField = (field: string, chosenFields: string[]) => {
    switch (field) {
        case EMAIL:
            return (email: string) =>
                optionIncludes(EMAIL, chosenFields) && !validate(email)
        case PASSWORD:
            return (password: string) =>
                optionIncludes(PASSWORD, chosenFields) && !password
        case USERNAME:
            return (username: string) =>
                optionIncludes(USERNAME, chosenFields) && !username
        case CONFIRM:
            return (confirm: string, password?: string) =>
                optionIncludes(CONFIRM, chosenFields) && password !== confirm
        default:
            throw new Error(`Type ${field} not found.`)
    }
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
    const { data: userData } = useCurrentUserQuery()

    useEffect(() => {
        if (error) {
            dispatch({
                type: MESSAGE,
                payload: error.message.substring(15)
            })
        }
    }, [error])

    useEffect(() => {
        if (data?.signin && userData) {
            mergeRemoteCartItems({
                variables: { remoteCartItems: data.signin.cart }
            })
            // navigate('/shop/')
        }
        if (data?.signup) {
            // navigate('/shop/')
        }
        if (data?.requestReset) {
            toast(data.requestReset.message)
        }
        if (data?.resetPassword) {
            toast('Password reset successfully')
            // setTimeout(() => navigate('/shop/'), 3000)
        }
    }, [data])

    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (invalidField(EMAIL, chosenFields)(email)) {
            return dispatch({
                type: MESSAGE,
                payload: 'Email is not valid'
            })
        } else if (invalidField(PASSWORD, chosenFields)(password)) {
            return dispatch({
                type: MESSAGE,
                payload: 'Please enter a password'
            })
        } else if (invalidField(USERNAME, chosenFields)(username)) {
            return dispatch({
                type: MESSAGE,
                payload: 'Please enter a username'
            })
        } else if (invalidField(CONFIRM, chosenFields)(password, confirm)) {
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
        ...(optionIncludes(EMAIL, chosenFields) && {
            email: {
                icon: 'account-circle',
                type: 'text',
                value: email,
                name: 'email'
            }
        }),
        ...(optionIncludes(USERNAME, chosenFields) && {
            username: {
                icon: 'account-box',
                type: 'text',
                value: username,
                name: 'username'
            }
        }),
        ...(optionIncludes(PASSWORD, chosenFields) && {
            password: {
                icon: 'key-outlined',
                type: 'password',
                value: password,
                name: 'password'
            }
        }),
        ...(optionIncludes(CONFIRM, chosenFields) && {
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

    const headerTextColors = [
        'white_color',
        'font_size_xlg',
        'text_align_center'
    ]

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
