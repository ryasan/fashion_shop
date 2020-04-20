import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $username: String!
    $password: String!
  ) {
    signup(email: $email, username: $username, password: $password) {
      id
      email
      username
      password
      cart
    }
  }
`
