const { intersection, isEmpty } = require('lodash')
const { forwardTo } = require('prisma-binding')

const isInStock = (sizes, filters) => {
  return intersection(sizes, filters).length > 0
}

const Query = {
  orders: forwardTo('db'),
  products: forwardTo('db'),
  productsConnection: async (parent, args, ctx, info) => {
    const { sizeFilters, freeShippingSelected } = args
    const { edges } = await ctx.db.query.productsConnection({}, info)

    const inStock = edges.filter(({ node }) => {
      return isInStock(node.availableSizes, sizeFilters)
    })
    const inStockProductIds = inStock.map(({ node }) => node.id)

    const where = {
      ...(freeShippingSelected && { isFreeShipping: true }),
      ...(!isEmpty(inStockProductIds) && { id_in: inStockProductIds })
    }

    return ctx.db.query.productsConnection({ where }, info)
  },
  me: (parent, args, ctx, info) => {
    if (!ctx.request.userId) return null
    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info)
  }
}

module.exports = Query
