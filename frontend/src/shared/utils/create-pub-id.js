export const createPubId = (sku, currentImages) => {
  return `${sku}-${currentImages.length + 1}`
}
