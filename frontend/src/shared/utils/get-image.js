const url =
  'https://res.cloudinary.com/dbir6orpj/image/upload/v1594076241/fashion%20shop/'

export const getImage = fileName => {
  if (!fileName) return null
  return url + fileName
}

export const getFrontImage = sku => {
  if (!sku) return null
  return url + sku + '.jpg'
}

export const getBackImg = sku => {
  if (!sku) return null
  return url + sku.replace(/front/, 'back') + '.jpg'
}
