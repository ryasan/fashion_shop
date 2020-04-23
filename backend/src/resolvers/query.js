const { forwardTo } = require('prisma-binding')

const Query = {
  me: (parent, args, ctx, info) => {
    if (!ctx.request.userId) return null

    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info)
  },
  products: forwardTo('db'),
  productsConnection: forwardTo('db')
}

module.exports = Query
