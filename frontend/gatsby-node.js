const path = require('path')

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  switch (page.path) {
    case '/shop/':
      return createPage({
        path: '/shop',
        matchPath: '/shop/*',
        component: path.resolve('src/pages/shop.js')
      })
    case '/account/orders/':
      return createPage({
        path: '/account/orders',
        matchPath: '/account/orders/*',
        component: path.resolve('src/pages/account/orders.js')
      })
    case '/signin/reset/':
      return createPage({
        path: '/signin/reset',
        matchPath: '/signin/reset/*',
        component: path.resolve('src/pages/signin/reset.js')
      })
    case '/signin/request-reset/':
      return createPage({
        path: '/signin/request-reset',
        matchPath: '/signin/request-reset/*',
        component: path.resolve('src/pages/signin/request-reset.js')
      })
  }
}
