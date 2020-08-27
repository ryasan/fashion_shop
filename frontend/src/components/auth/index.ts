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
  PASSWORD_RESET
} from '../../types/auth-form-types'

interface VariablesInterface {
  email?: string
  password?: string
  confirm?: string
  username?: string
  resetToken?: string
  authMethod?: string
  authMutation?: () => void
}

const useAuth = () => {
  const [signin, signinInfo] = useSigninMutation()
  const [signup, signupInfo] = useSignupMutation()
  const [signout, signoutInfo] = useSignoutMutation()
  const [requestReset, successMessage] = useRequestPasswordResetMutation()
  const [resetPassword, resetPasswordInfo] = useResetPasswordMutation()

  const authMutation = ({ variables }: { variables: VariablesInterface }) => {
    const {
      email,
      username,
      password,
      confirm,
      resetToken,
      authMethod
    } = variables

    const trimmedVariables = {
      ...(email && { email }),
      ...(password && { password }),
      ...(confirm && { confirm }),
      ...(username && { username }),
      ...(resetToken && { resetToken })
    }

    switch (authMethod) {
      case SIGNOUT:
        return signout()
      case SIGNIN:
        return signin({ variables: trimmedVariables })
      case SIGNUP:
        return signup({ variables: trimmedVariables })
      case REQUEST_RESET:
        return requestReset({ variables: trimmedVariables })
      case PASSWORD_RESET:
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
