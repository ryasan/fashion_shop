import { ImagesInterface } from '../typings'

const baseUrl = 'https://res.cloudinary.com/dbir6orpj/image/upload'

const bigImage = (publicId: string) => {
  return `${baseUrl}/c_scale,q_auto,w_1000/v1597286594/fashion_shop/${publicId}.jpg` as string
}

const smallImage = (publicId: string) => {
  return `${baseUrl}/v1597286594/fashion_shop/${publicId}.jpg` as string
}

export const mapImages = (publicIds: string[]) => {
  return {
    bigImage: bigImage(publicIds[0]),
    smallImage: smallImage(publicIds[0]),
    bigImages: publicIds.map(bigImage),
    smallImages: publicIds.map(smallImage)
  } as ImagesInterface
}
