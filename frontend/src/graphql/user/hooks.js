import { useMutation } from '@apollo/react-hooks'

import { SIGNUP_MUTATION } from './mutations'

export const useSignupMutation = () => {
  return useMutation(SIGNUP_MUTATION)
}
