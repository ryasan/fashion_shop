const { forwardTo } = require('prisma-binding')

const Query = {
  me: (parent, args, ctx, info) => {
    if (!ctx.request.userId) return null

    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info)
  },
  products: forwardTo('db'),
  productsConnection: async (parent, { filters }, ctx, info) => {
    if (filters.AND) {
      const inputFilterValues = filters.AND.map((filter) => {
        return Object.values(filter)[0]
      })
      if (inputFilterValues.every((v) => !v)) {
        return ctx.db.query.productsConnection({}, info)
      }
    }

    return ctx.db.query.productsConnection({ where: filters }, info)
  }
}

module.exports = Query
