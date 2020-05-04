const { intersection, isEmpty } = require('lodash')
const { forwardTo } = require('prisma-binding')

const isInStock = (sizes, filters) => {
  return intersection(sizes, filters).length > 0
}

const Query = {
  me: (parent, args, ctx, info) => {
    if (!ctx.request.userId) return null

    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info)
  },
  products: forwardTo('db'),
  productsConnection: async (parent, args, ctx, info) => {
    const { sizeFilters, freeShippingSelected } = args
    const { edges } = await ctx.db.query.productsConnection({}, info)

    const inStock = edges.filter(({ node }) => {
      return isInStock(node.availableSizes, sizeFilters)
    })
    const productIds = inStock.map(({ node }) => node.id)

    const where = {
      AND: [
        { isFreeShipping: freeShippingSelected || undefined },
        { id_in: !isEmpty(productIds) ? productIds : undefined }
      ]
    }

    return ctx.db.query.productsConnection({ where }, info)
  }
}

module.exports = Query
