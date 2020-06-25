import { useApolloClient } from '@apollo/react-hooks'

import {
  useSigninMutation,
  useSignupMutation,
  useSignoutMutation
  // useCurrentUserQuery
} from '../../graphql/user/hooks'
import {
  useCartQuery,
  useSyncUserCartWithRemote
} from '../../graphql/cart/hooks'
import { cartInitialState } from '../../graphql/cart/reducer'

/*
  signin side effects
    -when signing in sync remote cart items with local cart items
    -when signing out sync local cart items with remote cart items 
*/

const useAuth = variables => {
  const client = useApolloClient()
  // const { data: userData } = useCurrentUserQuery()
  const { data: cartData } = useCartQuery()
  const [signin, signinInfo] = useSigninMutation()
  const [signup, signupInfo] = useSignupMutation()
  const [signout, signoutInfo] = useSignoutMutation()
  const [syncUserCartWithRemote] = useSyncUserCartWithRemote()

  // sign up
  const doSignup = () => {
    signup({ variables })
  }

  // sign in
  const doSignin = () => {
    signin({ variables })
  }

  // sign out
  const doSignout = () => {
    syncUserCartWithRemote({
      variables: {
        data: cartData.cartItems.map(c => ({
          productId: c.product.id,
          quantity: c.quantity
        }))
      }
    })
    signout()
    client.writeData({ data: cartInitialState })
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
