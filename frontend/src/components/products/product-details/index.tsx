import React, { useState } from 'react'

import ProductDetails, {
  Content,
  Details,
  Image
} from './product-details.styles'
import ProductUpdate from '../product-update'
import Loader from '../../loader'
import ErrorBoundary from '../../error-boundary'
import SEO from '../../seo'
import Select from '../../select'
import {
  useAddCartItemMutation,
  useCartQuery,
  useIncreaseCartItemQuantityMutation
} from '../../../graphql/cart/hooks'
import { useProductQuery } from '../../../graphql/product/hooks'
import {
  formatPrice,
  useImages,
  alreadyInCart,
  sizeAlreadyInCart,
  hasSize
} from '../../../shared/utils'
import { SHIRT, HOODIE, LONG_SLEEVE } from '../../../types/category-types'
import { ProductInterface } from '../../../shared/interfaces'
import { SizeEnum } from '../../../shared/interfaces/enums'

interface OptionInterface {
  name: SizeEnum
  value: SizeEnum
}

const ProductDetailsComponent: React.FC<{ product: ProductInterface }> = ({
  product
}) => {
  const options = product?.availableSizes?.map((size: SizeEnum): {
    name: SizeEnum
    value: SizeEnum
  } => ({ name: size, value: size }))

  const [addCartItem] = useAddCartItemMutation()
  const [increaseCartItemQuantity] = useIncreaseCartItemQuantityMutation()
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [size, setSelectedSize] = useState<OptionInterface | undefined>(options?.[0]) // prettier-ignore
  const { smallImages, largeImages } = useImages(product.images)
  const { data } = useCartQuery()

  const handleAddCartItem = () => {
    if (data?.cartItems) {
      const vars = {
        cartItems: data.cartItems,
        category: product.category,
        product: product,
        size: size?.value
      }
      const mutatedProduct = {
        ...product,
        ...(size?.value && { size: size.value })
      }
      if (alreadyInCart(vars) && (sizeAlreadyInCart(vars) || !hasSize(vars))) {
        increaseCartItemQuantity({
          variables: {
            product: mutatedProduct
          }
        })
      } else {
        addCartItem({
          variables: {
            product: mutatedProduct
          }
        })
      }
    }
  }

  const handleSizeSelect = (size: SizeEnum) => {
    setSelectedSize({
      name: size,
      value: size
    })
  }

  return (
    <ProductDetails>
      <SEO title={product.title} />
      <ProductDetails.Title modifiers='red_color'>
        {product.title}
      </ProductDetails.Title>
      <Content>
        <Image>
          <Image.MainImage src={largeImages[selectedIdx]} alt={product.title} />
          <Image.ImageList>
            {smallImages.map((image, i) => (
              <Image.Item key={i} onClick={() => setSelectedIdx(i)}>
                <Image.TinyImage src={image} alt={product.title + i} />
              </Image.Item>
            ))}
          </Image.ImageList>
        </Image>
        <Details>
          <Details.Text modifiers='font_size_xlg'>{product.style}</Details.Text>
          <Details.Text modifiers={['font_size_xlg', 'red_color']}>
            {formatPrice(product.price)}
          </Details.Text>
          {product.isFreeShipping && (
            <Details.Text modifiers='font_size_lg'>
              Free shipping available
            </Details.Text>
          )}
          <Details.Text modifiers='font_size_lg'>
            description: {product.description || 'None available'}
          </Details.Text>
          <Details.AddToCartBtn onClick={handleAddCartItem}>
            Add to cart
          </Details.AddToCartBtn>
          {[SHIRT, HOODIE, LONG_SLEEVE].includes(product.category) && (
            <Select
              selected={size?.value}
              onChange={handleSizeSelect}
              options={options || []}
              label='Choose size'
            />
          )}
        </Details>
      </Content>
      <ProductUpdate product={product} />
    </ProductDetails>
  )
}

const withProductData = <T extends {}>(Component: React.ComponentType<T>) => (
  props: T & { productId: string }
) => {
  const { data, loading, error } = useProductQuery({
    variables: {
      where: {
        id: props.productId
      }
    }
  })

  if (loading) {
    return (
      <ProductDetails>
        <Loader color='white' />
      </ProductDetails>
    )
  }

  return (
    <ErrorBoundary error={error}>
      <Component {...props} product={data.product} />
    </ErrorBoundary>
  )
}

export default withProductData(ProductDetailsComponent)
