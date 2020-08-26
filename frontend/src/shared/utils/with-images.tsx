import React from 'react'

import {
  ProductInterface,
  OrderItemInterface,
  OrderInterface
} from '../interfaces'

const baseUrl = 'https://res.cloudinary.com/dbir6orpj/image/upload'

const bigImage = (publicId: string) => {
  return `${baseUrl}/c_scale,q_auto,w_1000/v1597286594/fashion_shop/${publicId}.jpg` as string
}

const smallImage = (publicId: string) => {
  return `${baseUrl}/v1597286594/fashion_shop/${publicId}.jpg` as string
}

interface ItemInterface {
  product?: ProductInterface
  order?: OrderInterface
  orderItem?: OrderItemInterface
}

export const withImages = <P extends {}>(
  WrappedComponent: React.ComponentType<P>
) => (props: P & ItemInterface) => {
  const { product, orderItem, order } = props

  const item = product || orderItem || order?.orderItems[0]

  if (item) {
    const [firstPublicId] = item.images
    const images = {
      bigImage: bigImage(firstPublicId),
      smallImage: smallImage(firstPublicId),
      bigImages: item.images.map(bigImage),
      smallImages: item.images.map(smallImage)
    }
    return <WrappedComponent {...props} images={images} />
  }

  return null
}
