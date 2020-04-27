// const { intersection } = require('lodash')
const { forwardTo } = require('prisma-binding')

const Query = {
  me: (parent, args, ctx, info) => {
    if (!ctx.request.userId) return null

    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info)
  },
  products: forwardTo('db'),
  productsConnection: async (parent, { where }, ctx, info) => {
    const products = await ctx.db.query.productsConnection({}, info)
    console.log(products)
    return products
    // console.log(products)
    // if (where.AND) {
    //   const inputFilterValues = where.AND.map((filter) => {
    //     return Object.values(filter)[0]
    //   })

    //   if (inputFilterValues.every((v) => !v)) {
    //     console.log('-------->')
    //   }
    // }

    // return ctx.db.query.productsConnection({ where }, info)
  }
}

module.exports = Query
