import { CartItemInterface, ProductInterface } from '../typings'
import { HOODIE, SHIRT, LONG_SLEEVE } from '../../types/category-types'
import { SizeEnum, CategoryEnum } from '../typings/enums'

export const alreadyInCart = ({
  cartItems,
  product
}: {
  cartItems: CartItemInterface[]
  product: ProductInterface
}) => {
  return cartItems?.some(cartItem => cartItem.product.id === product.id)
}

export const sizeAlreadyInCart = ({
  cartItems,
  size,
  product
}: {
  cartItems: CartItemInterface[]
  product: ProductInterface
  size: SizeEnum | undefined
}) => {
  const sizeVariants = cartItems?.filter(item => item.product.id === product.id)
  return sizeVariants?.some(cartItem => cartItem.size === size)
}

export const hasSize = ({ category }: { category: string }) => {
  return [HOODIE, SHIRT, LONG_SLEEVE].includes(category)
}
