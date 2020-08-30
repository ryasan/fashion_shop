import React from 'react'
import moment from 'moment'
import { navigate } from '@reach/router'

import Order, { Header, Body } from './order.styles'
import { formatPrice } from '../../../shared/utils'
import { OrderInterface } from '../../../shared/typings'

const OrderComponent: React.FC<{
    order: OrderInterface
}> = ({ order }) => {
    const { orderItems, createdAt, total, id } = order

    const goToOrderDetails = () => {
        navigate(`/account/orders/${id}/`, { state: { order } })
    }

    return (
        <Order onClick={goToOrderDetails}>
            <Header>
                <Header.Image src={orderItems?.[0]?.imageMap?.smallImage} />
            </Header>
            <Body>
                <Body.Text>{orderItems.length} items</Body.Text>
                <Body.Text>{formatPrice(total)}</Body.Text>
                <Body.Text>{moment(createdAt).fromNow()}</Body.Text>
            </Body>
        </Order>
    )
}

export default OrderComponent
