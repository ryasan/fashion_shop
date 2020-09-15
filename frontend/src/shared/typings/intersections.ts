import {
    ProductInterface,
    OrderInterface,
    OrderItemInterface,
    CartItemInterface
} from './interfaces'

export type ItemIntersection =
    | (ProductInterface &
          OrderInterface &
          OrderItemInterface &
          CartItemInterface &
          CartItemInterface[])
    | CartItemInterface
    | CartItemInterface[]
    | ProductInterface
    | OrderInterface
    | OrderItemInterface
