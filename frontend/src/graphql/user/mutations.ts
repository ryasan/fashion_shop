import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from '../product/fragments'
import { USER_FRAGMENT } from './fragments'

export const DELETE_ME = gql`
    mutation {
        deleteMe {
            message
        }
    }
`

export const SIGNIN_MUTATION = gql`
    mutation($email: String!, $password: String!) {
        signin(email: $email, password: $password) {
            id
            email
            username
            cart {
                quantity
                product {
                    ...ProductFragment
                }
            }
        }
    }
    ${PRODUCT_FRAGMENT}
`

export const SIGNOUT_MUTATION = gql`
    mutation {
        signout {
            message
        }
    }
`

export const SIGNUP_MUTATION = gql`
    mutation($email: String!, $username: String!, $password: String!) {
        signup(email: $email, username: $username, password: $password) {
            id
            email
            username
        }
    }
`

export const REQUEST_PASSWORD_RESET_MUTATION = gql`
    mutation($email: String!) {
        requestReset(email: $email) {
            message
        }
    }
`

export const RESET_PASSWORD_MUTATION = gql`
    mutation($password: String!, $confirm: String!, $resetToken: String!) {
        resetPassword(
            password: $password
            confirm: $confirm
            resetToken: $resetToken
        ) {
            id
            username
            email
        }
    }
`

export const UPDATE_PERMISSIONS_MUTATION = gql`
    mutation($permissions: [Permission!]!, $userId: ID!) {
        updatePermissions(permissions: $permissions, userId: $userId) {
            ...UserFragment
        }
    }
    ${USER_FRAGMENT}
`

export const SEND_CONTACT_MESSAGE_MUTATION = gql`
    mutation($name: String!, $email: String!, $message: String!) {
        sendContactMessage(name: $name, email: $email, message: $message) {
            message
        }
    }
`
