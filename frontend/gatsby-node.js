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
  }
}
