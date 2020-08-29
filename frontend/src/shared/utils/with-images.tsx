import React from 'react'

import { ItemIntersection, ImagesInterface } from '../typings'

const baseUrl = 'https://res.cloudinary.com/dbir6orpj/image/upload'

const bigImage = (publicId: string) => {
  return `${baseUrl}/c_scale,q_auto,w_1000/v1597286594/fashion_shop/${publicId}.jpg` as string
}

const smallImage = (publicId: string) => {
  return `${baseUrl}/v1597286594/fashion_shop/${publicId}.jpg` as string
}

export const withImages = <T extends {}>(
  WrappedComponent: React.ComponentType<T>
) => (props: T & { item: ItemIntersection }) => {
  const { item } = props

  console.log(item)
  const images: string[] =
    item?.images ||
    item?.product.images ||
    item?.orderItems[0].images ||
    item?.[0].product ||
    []
  return (
    <WrappedComponent
      {...props}
      images={
        {
          bigImage: bigImage(images[0]),
          smallImage: smallImage(images[0]),
          bigImages: images.map(bigImage),
          smallImages: images.map(smallImage)
        } as ImagesInterface
      }
    />
  )
}
