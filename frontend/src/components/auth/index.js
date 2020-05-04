import { useApolloClient } from '@apollo/react-hooks'

import {
  useSigninMutation,
  useSignupMutation,
  useSignoutMutation,
  useCurrentUserQuery
} from '../../graphql/user/hooks'
import { useCartQuery, useSyncUserCart } from '../../graphql/cart/hooks'
import { cartInitialState } from '../../graphql/cart/reducer'

/*
  signin side effects
    -when signing in sync remote cart items with local cart items
    -when signing out sync local cart items with remote cart items 
*/

const useAuth = variables => {
  const client = useApolloClient()
  const { data: userData } = useCurrentUserQuery()
  const { data: cartData } = useCartQuery()
  const [signin, signinStatus] = useSigninMutation()
  const [signup, signupStatus] = useSignupMutation()
  const [signout, signoutStatus] = useSignoutMutation()
  const [syncUserCart] = useSyncUserCart()
  // sign in
  const doSignin = () => {
    signin({ variables })
  }
  // sign up
  const doSignup = () => {
    signup({ variables })
  }
  // sign out
  const doSignout = () => {
    syncUserCart({
      variables: {
        data: cartData.cartItems.map(c => ({
          productId: c.product.id,
          quantity: c.quantity
        }))
      }
    })
    // signout()
    // client.writeData({ data: cartInitialState })
  }

  return [
    { doSignin, doSignup, doSignout },
    {
      data: signinStatus.data || signupStatus.data || signoutStatus.data,
      loading: signinStatus.loading || signupStatus.loading || signoutStatus.loading, // prettier-ignore
      error: signinStatus.error || signupStatus.error || signoutStatus.error
    }
  ]
}

export default useAuth
