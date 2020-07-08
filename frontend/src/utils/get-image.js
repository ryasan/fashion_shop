export const getLargeImg = sku => {
  if (!sku) return null
  return `https://res.cloudinary.com/dbir6orpj/image/upload/v1594076241/fashion%20shop/${sku}_1.jpg`
}

export const getSmallImg = sku => {
  if (!sku) return null
  return `https://res.cloudinary.com/dbir6orpj/image/upload/v1594076241/fashion%20shop/${sku}_2.jpg`
}
