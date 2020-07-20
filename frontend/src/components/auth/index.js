import {
  useSigninMutation,
  useSignupMutation,
  useSignoutMutation,
  useRequestPasswordResetMutation,
  useResetPasswordMutation
} from '../../graphql/user/hooks'
import {
  SIGNIN,
  REQUEST_RESET,
  SIGNUP,
  SIGNOUT,
  RESET_PASSWORD
} from '../signin/form-types'

const useAuth = ({ variables = {} }) => {
  const [signin, signinInfo] = useSigninMutation()
  const [signup, signupInfo] = useSignupMutation()
  const [signout, signoutInfo] = useSignoutMutation()
  const [requestReset, successMessage] = useRequestPasswordResetMutation()
  const [resetPassword, resetPasswordInfo] = useResetPasswordMutation()
  const { email, username, password, resetToken, authType } = variables
  const trimmedVariables = {
    ...(email && { email }),
    ...(password && { password }),
    ...(username && { username }),
    ...(resetToken && { resetToken })
  }

  const authMutation = () => {
    switch (authType) {
      case SIGNOUT:
        return signout()
      case SIGNIN:
        return signin({ variables: trimmedVariables })
      case SIGNUP:
        return signup({ variables: trimmedVariables })
      case REQUEST_RESET:
        return requestReset({ variables: trimmedVariables })
      case RESET_PASSWORD:
        return resetPassword({ variables: trimmedVariables })
    }
  }

  return [
    authMutation,
    {
      data:
        signinInfo.data ||
        signupInfo.data ||
        signoutInfo.data ||
        successMessage.data ||
        resetPasswordInfo.data,
      loading:
        signinInfo.loading ||
        signupInfo.loading ||
        signoutInfo.loading ||
        successMessage.loading ||
        resetPasswordInfo.loading,
      error:
        signinInfo.error ||
        signupInfo.error ||
        signoutInfo.error ||
        successMessage.error ||
        resetPasswordInfo.error
    }
  ]
}

export default useAuth
