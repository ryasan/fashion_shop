import {
  useSigninMutation,
  useSignupMutation,
  useSignoutMutation
} from '../../graphql/user/hooks'

const useAuth = variables => {
  const [signin, signinInfo] = useSigninMutation()
  const [signup, signupInfo] = useSignupMutation()
  const [signout, signoutInfo] = useSignoutMutation()

  const doSignup = () => {
    signup({ variables })
  }

  const doSignin = () => {
    signin({ variables })
  }

  const doSignout = () => {
    signout()
  }

  return [
    { doSignin, doSignup, doSignout },
    {
      data: signinInfo.data || signupInfo.data || signoutInfo.data,
      loading: signinInfo.loading || signupInfo.loading || signoutInfo.loading, // prettier-ignore
      error: signinInfo.error || signupInfo.error || signoutInfo.error
    }
  ]
}

export default useAuth
