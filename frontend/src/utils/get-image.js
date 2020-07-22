const url =
  'https://res.cloudinary.com/dbir6orpj/image/upload/v1594076241/fashion%20shop/'

export const getFrontImage = sku => {
  if (!sku) return null
  return url + sku + '.jpg'
}

export const getSmallImage = sku => {
  if (!sku) return null
  return url + sku.replace(/front/, 'back') + '.jpg'
}
