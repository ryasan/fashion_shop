export const formatPrice = (amount, currencyId) => {
  const options = {
    style: 'currency',
    currency: currencyId || 'USD',
    minimumFractionDigits: 2
  }

  const formatter = new Intl.NumberFormat('en-US', options)
  return formatter.format(amount / 100)
}
