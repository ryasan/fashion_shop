import { CategoryEnum, SizeEnum, PermissionEnum } from './enums'

export interface ImagesInterface {
  smallImage: string
  bigImage: string
  smallImages: string[]
  bigImages: string[]
}

export interface ProductInterface {
  isFreeShipping: boolean
  isFeatured: boolean
  isAvailable: boolean | null
  style: string
  category: CategoryEnum
  id: string
  description: string
  price: number
  sku: string
  title: string
  images: string[]
  size: SizeEnum
}

export interface OrderItemInterface {
  quantity: number
  user: UserInterface
  id: string
  description: string
  price: number
  sku: string
  title: string
  images: string[]
  size: SizeEnum
}

export interface OrderInterface {
  id: number
  orderItems: OrderItemInterface[]
  total: number
  user: UserInterface
  chargeId: string
  createdAt: string
  updatedAt: string
}

export interface UserInterface {
  id: string
  username: string
  email: string
  password?: string
  cart: CartItemInterface[]
  orders?: OrderInterface
  resetToken?: string
  resetTokenExpiry?: number
  permissions: PermissionEnum
}

export interface CartItemInterface {
  id: string
  quantity: number
  product: ProductInterface
  size: SizeEnum
  user: UserInterface
}

