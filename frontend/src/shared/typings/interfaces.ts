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
    category: CategoryEnum | string
    id: string
    description: string
    price: number
    sku: string
    title: string
    images: string[]
    availableSizes: SizeEnum[] | undefined
    imageMap?: ImagesInterface
    size?: SizeEnum | undefined
    __typename?: string
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
    imageMap?: ImagesInterface
    size?: SizeEnum
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
    permissions: PermissionEnum[] | string[]
}

export interface CartItemInterface {
    id: string
    quantity: number
    product: ProductInterface
    size: SizeEnum
    user?: UserInterface
}
