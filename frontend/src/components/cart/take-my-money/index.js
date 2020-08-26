import React, { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useApolloClient } from '@apollo/react-hooks'
import { navigate } from '@reach/router'

import TakeMyMoney, { CheckoutBtn } from './take-my-money.styles'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import { toast } from '../../toast'
import { useCurrentUserQuery } from '../../../graphql/user/hooks'
import { useCreateOrderMutation } from '../../../graphql/order/hooks'
import { useUploadCartMutation } from '../../../graphql/cart/hooks'
import { cartInitialState } from '../../../graphql/cart/reducer'
import { getPrimaryImage } from '../../../shared/utils'

const stripeKey = 'pk_test_51H1pe1AjCAxQG9ChPsx3SD8aXdVEcMKUnz3mnbV4jzCzDcNeVL6dnjSW34RmamWPz4PCqHm850nW91kARGVnL4pn00s68jhaO2'

const withMainImg = Component => props => {
  const { cartItems } = props
  const mainImg = cartItems.length && getPrimaryImage(cartItems[0].product.images)

  return <Component {...props} mainImg={mainImg} />
}

const TakeMyMoneyComponent = ({ cartItems, cartTotal, cartCount, mainImg }) => {
  const client = useApolloClient()
  const { data: userData } = useCurrentUserQuery()
  const [createOrder, { loading, data: orderData, error: orderError }] = useCreateOrderMutation()
  const [uploadCart, { error: uploadError }] = useUploadCartMutation()
  const me = userData?.me
  const isReady = me && cartItems?.length > 0

  const handleToastMessage = () => {
    if (!me) {
      toast('You must be signed in to purchase something')
    } else if (!cartItems.length) {
      toast('Cart is empty')
    }
  }

  const onToken = async res => {
    await uploadCart({
      variables: {
        data: cartItems.map(c => ({
          productId: c.product.id,
          quantity: c.quantity,
          size: c.size
        }))
      }
    })
    await createOrder({ variables: { token: res.id } })
  }

  useEffect(() => {
    const order = orderData?.createOrder
    if (order) {
      client.writeData({ data: cartInitialState })
      toast('Thank you! Your order is being processed')
      navigate(`/account/orders/${order.id}/`, { state: { order } })
    }
  }, [orderData])

  return (
    <ErrorBoundary error={orderError || uploadError}>
      <TakeMyMoney>
        {loading && <Loader />}
        {isReady && !loading && (
          <StripeCheckout
            currency='USD'
            name='E & S Streetwear'
            description={`Order of ${cartCount} items`}
            stripeKey={stripeKey}
            amount={cartTotal}
            image={mainImg}
            email={me?.email}
            token={res => onToken(res)}
          >
            <CheckoutBtn>CHECKOUT</CheckoutBtn>
          </StripeCheckout>
        )}
        {!isReady && <CheckoutBtn onClick={handleToastMessage}>CHECKOUT</CheckoutBtn>}
      </TakeMyMoney>
    </ErrorBoundary>
  )
}

export default withMainImg(TakeMyMoneyComponent)
