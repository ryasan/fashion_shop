import React, { useEffect, useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import Layout from '../components/layout/index'
import Shop from '../styles/shop-page.styles'
import SEO from '../components/seo/index'
import ProductList from '../components/products'
import ErrorBoundary from '../components/error-boundary/index'
import { useProductsQuery } from '../graphql/product/hooks'

const CREATE_PRODUCT_MUTATION = gql`
  mutation($input: ProductCreateInput!) {
    createProduct(input: $input) {
      availableSizes
      description
      isFreeShipping
      price
      sku
      style
      title
      featured
    }
  }
`

// $availableSizes: [Size!]
//     $description: String!
//     $isFreeShipping: Boolean!
//     $price: Int!
//     $sku: String!
//     $style: String!
//     $title: String!
//     $featured: Boolean!

const useCreateProductMutation = () => {
  return useMutation(CREATE_PRODUCT_MUTATION)
}

const ShopProducts = () => {
  const [state, setState] = useState(null)
  const { data, error, loading } = useProductsQuery()
  const [createProduct] = useCreateProductMutation()

  if (loading) return <Shop.Loader color="white" />

  // useEffect(() => {
  //   if (data) {
  //     // setState(data.products[0].availableSizes)
  //     // delete data.products[0].availableSizes
  //     // delete data.products[0].__typename
  //     // delete data.products[0].quantity
  //     // delete data.products[0].id
  //   }
  // }, [data])

  // console.log(state)
  return (
    <ErrorBoundary error={error}>
      <button
        onClick={() => {
          // createProduct({
          //   variables: {
          //     input: {
          //       ...data.products[0],
          //       availableSizes: { set: state }
          //     }
          //   }
          // })
        }}>
        add products
      </button>
      {/* <ProductList products={data.products} /> */}
    </ErrorBoundary>
  )
}

const ShopPage = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <Shop>
        <Shop.ProductsContainer>
          <ShopProducts />
        </Shop.ProductsContainer>
      </Shop>
    </Layout>
  )
}

export default ShopPage
