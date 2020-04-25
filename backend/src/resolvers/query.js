const { intersection } = require('lodash')
const { forwardTo } = require('prisma-binding')

const Query = {
  me: (parent, args, ctx, info) => {
    if (!ctx.request.userId) return null

    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info)
  },
  products: forwardTo('db'),
  // productsConnection: async (parent, args, ctx, info) => {
  //   console.log(args.data)
  //   const productsConnection = await ctx.db.query.productsConnection(
  //     { where: args.data },
  //     info
  //   )

  //   if (args.sizeFilters && args.sizeFilters.length) {
  //     productsConnection.edges = productsConnection.edges.filter(
  //       ({ node: { availableSizes } }) => {
  //         return intersection(availableSizes, args.sizeFilters).length > 0
  //       }
  //     )
  //   }

  //   return productsConnection
  // }
  productsConnection: forwardTo('db')
}

module.exports = Query
