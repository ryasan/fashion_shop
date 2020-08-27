export const createPubId = (sku: string, currentImages: string[]) => {
  return `${sku}-${currentImages.length + 1}`
}
