import React, { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useApolloClient } from '@apollo/react-hooks'
import { navigate } from '@reach/router'

import TakeMyMoney from './take-my-money.styles'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import { toast } from '../../toast'
import { Button } from '../../../elements'
import { useCurrentUserQuery } from '../../../graphql/user/hooks'
import { getSmallImg } from '../../../utils'
import { useCreateOrderMutation } from '../../../graphql/order/hooks'
import { useUploadCartMutation } from '../../../graphql/cart/hooks'
import { cartInitialState } from '../../../graphql/cart/reducer'

const stripeKey = `pk_test_51H1pe1AjCAxQG9ChPsx3SD8aXdVEcMKUnz3mnbV4jzCzDcNeVL6dnjSW34RmamWPz4PCqHm850nW91kARGVnL4pn00s68jhaO2`

const TakeMyMoneyComponent = ({ cartItems, cartTotal, cartCount }) => {
  const client = useApolloClient()
  const { data: userData } = useCurrentUserQuery()
  const [createOrder, { loading, data: orderData, error: orderError }] = useCreateOrderMutation()
  const [uploadCart, { error: uploadError }] = useUploadCartMutation()
  const me = userData && userData.me
  const isReady = me && cartItems.length > 0
  const image = getSmallImg(cartItems[0]?.product.sku)

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
          quantity: c.quantity
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
      navigate(`/account/orders/${order.id}`, { state: { order } })
    }
  }, [orderData])

  if (loading) return <Loader />

  return (
    <ErrorBoundary error={orderError || uploadError}>
      <TakeMyMoney className="close-btn">
        {isReady && (
          <StripeCheckout
            currency="USD"
            name="Fashion Shop"
            description={`Order of ${cartCount} items`}
            stripeKey={stripeKey}
            amount={cartTotal}
            image={image}
            email={me.email}
            token={res => onToken(res)}>
            <Button>CHECKOUT</Button>
          </StripeCheckout>
        )}
        {!isReady && <Button onClick={handleToastMessage}>CHECKOUT</Button>}
      </TakeMyMoney>
    </ErrorBoundary>
  )
}

export default TakeMyMoneyComponent
