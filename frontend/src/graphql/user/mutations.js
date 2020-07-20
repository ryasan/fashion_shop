import gql from 'graphql-tag'

import { PRODUCT_FRAGMENT } from '../product/fragments'

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
  mutation($password: String!, $confirm: String!,$resetToken: String!) {
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
