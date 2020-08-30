import React, { useRef } from 'react'
import { sumBy } from 'lodash'

import Cart, { ToggleButton, Content } from './cart.styles'
import CartItem from './cart-item'
import CartFooter from './cart-footer/index'
import CartCount from './cart-count'
import { useCartQuery, useToggleCartMutation } from '../../graphql/cart/hooks'

const CartComponent: React.FC = () => {
    const cartRef = useRef<HTMLDivElement>()
    const [toggleCart] = useToggleCartMutation()
    const { data } = useCartQuery()

    const handleOnBlur = (e: any) => {
        if (data?.cartOpen && !cartRef.current?.contains(e.relatedTarget)) {
            toggleCart()
        }
    }

    if (data) {
        const { cartOpen, cartItems } = data
        const cartCount = sumBy(cartItems, c => c.quantity)
        const cartTotal = sumBy(cartItems, c => c.product.price * c.quantity)

        return (
            <Cart
                cartOpen={cartOpen}
                ref={cartRef}
                tabIndex='0'
                onBlur={handleOnBlur}>
                <ToggleButton cartOpen={cartOpen} onClick={toggleCart}>
                    <ToggleButton.Icon name={cartOpen ? 'close' : 'cart'} />
                    {!cartOpen && 'CART' && <CartCount>{cartCount}</CartCount>}
                </ToggleButton>
                <Content>
                    <Content.Header>
                        <Content.HeaderTitle>Cart</Content.HeaderTitle>
                        <Content.BagContainer>
                            <Content.HeaderIcon name='cart' />
                            <CartCount>{cartCount}</CartCount>
                        </Content.BagContainer>
                        <Content.HeaderLinkToShop to='/shop/'>
                            Continue shopping..
                        </Content.HeaderLinkToShop>
                    </Content.Header>
                    {!cartItems.length && (
                        <Content.EmptyDisplay>
                            Cart is empty
                        </Content.EmptyDisplay>
                    )}
                    <Content.CartList>
                        {cartItems.map((item, i) => (
                            <CartItem key={i} item={item} />
                        ))}
                    </Content.CartList>
                    <CartFooter
                        cartTotal={cartTotal}
                        cartItems={cartItems}
                        cartCount={cartCount}
                    />
                </Content>
            </Cart>
        )
    }

    return null
}

export default CartComponent
