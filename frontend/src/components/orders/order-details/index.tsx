import React from 'react'
import moment from 'moment'
import { navigate } from '@reach/router'

import OrderDetails, {
    OrderItem,
    Summary,
    OrderList,
    Text
} from './order-details.styles'
import Loader from '../../loader'
import ErrorBoundary from '../../error-boundary'
import { formatPrice, getThumbnail } from '../../../shared/utils'
import { useProductQuery } from '../../../graphql/product/hooks'
import { OrderItemInterface, OrderInterface } from '../../../shared/typings'

const OrderItemComponent = ({ item }: { item: OrderItemInterface }) => {
    const { data, loading, error } = useProductQuery({
        variables: { where: { sku: item.sku } }
    })

    const goToProductDetails = (): void => {
        navigate(`/shop/${data.product.id}/`)
    }

    if (loading) {
        return <Loader size='small' />
    }

    return (
        <ErrorBoundary error={error}>
            <OrderItem key={item.id} onClick={() => goToProductDetails()}>
                <OrderItem.ImageContainer>
                    <OrderItem.Image src={[getThumbnail([item.sku + '-1'])]} />
                </OrderItem.ImageContainer>
                <OrderItem.Cost>
                    <Text>
                        <Text.Key modifiers='red_color'>Price:&nbsp;</Text.Key>
                        {formatPrice(item.price)}
                    </Text>
                    <Text>
                        <Text.Key modifiers='red_color'>Qty:&nbsp;</Text.Key>
                        {item.quantity}
                    </Text>
                    <Text>
                        <Text.Key modifiers='red_color'>Total:&nbsp;</Text.Key>
                        {formatPrice(item.price * item.quantity)}
                    </Text>
                </OrderItem.Cost>
                <OrderItem.Info>
                    <Text>{item.title}</Text>
                    {item.size && (
                        <Text>
                            <Text.Key modifiers='red_color'>Size:</Text.Key>
                            {item.size}
                        </Text>
                    )}
                    <Text>{item.description}</Text>
                </OrderItem.Info>
            </OrderItem>
        </ErrorBoundary>
    )
}

const OrderDetailsComponent: React.StatelessComponent<{
    order: OrderInterface
}> = ({ order }) => {
    return (
        <OrderDetails>
            <Summary>
                <Text>
                    <Text.Key>Id: </Text.Key>
                    {order.id}
                </Text>
                <Text>
                    <Text.Key>Charge Id: </Text.Key>
                    {order.chargeId}
                </Text>
                <Text>
                    <Text.Key>Total: </Text.Key>
                    {formatPrice(order.total)}
                </Text>
                <Text>
                    <Text.Key>Created: </Text.Key>
                    {moment(order.createdAt).format('LL')}
                </Text>
                <Text>
                    <Text.Key>Updated: </Text.Key>
                    {moment(order.updatedAt).format('LL')}
                </Text>
            </Summary>
            <OrderList>
                {order.orderItems.map(item => (
                    <OrderItemComponent key={item.id} item={item} />
                ))}
            </OrderList>
        </OrderDetails>
    )
}

export default OrderDetailsComponent
