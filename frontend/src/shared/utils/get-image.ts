const baseUrl = 'https://res.cloudinary.com/dbir6orpj/image/upload'

export const getPrimaryImage = ([publicId]: string[]) => {
  return `${baseUrl}/c_scale,q_auto,w_1000/v1597286594/fashion_shop/${publicId}.jpg`
}

export const getThumbnail = ([publicId]: string[]) => {
  return `${baseUrl}/v1597286594/fashion_shop/${publicId}.jpg`
}

export const useImages = (publicIds: string[]) => {
  const smallImages = publicIds.map(publicId => {
    return `${baseUrl}/v1597286594/fashion_shop/${publicId}.jpg`
  })

  const largeImages = publicIds.map(publicId => {
    return `${baseUrl}/c_scale,q_auto,w_1000/v1597286594/fashion_shop/${publicId}.jpg`
  })

  return { largeImages, smallImages }
}
