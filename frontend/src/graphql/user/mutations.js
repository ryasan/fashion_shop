import gql from 'graphql-tag'

export const SIGNIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      username
    }
  }
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
