const { intersection } = require('lodash')
const { forwardTo } = require('prisma-binding')

const Query = {
  me: (parent, args, ctx, info) => {
    if (!ctx.request.userId) return null

    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info)
  },
  products: forwardTo('db'),
  productsConnection: async (parent, args, ctx, info) => {
    const { sizeFilters } = args.filters
    const oldConnection = await ctx.db.query.productsConnection({}, info)
    if (!sizeFilters.length) return oldConnection

    for (const p of oldConnection.edges) {
      const product = p.node
      const isAvailable = intersection(product.availableSizes, sizeFilters).length > 0 // prettier-ignore
      const { __typename, id, ...newProduct } = product

      await ctx.db.mutation.updateProduct({
        where: { id },
        data: {
          ...newProduct,
          isAvailable: isAvailable,
          availableSizes: { set: newProduct.availableSizes }
        }
      })
    }

    const newConnection = await ctx.db.query.productsConnection(
      { where: { isAvailable: true } },
      info
    )

    return newConnection
  }
}

module.exports = Query
