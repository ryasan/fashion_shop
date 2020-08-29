import React, { useState, useEffect } from 'react'

import ProductUpdate from './product-update.styles'
import ProductForm from '../product-form'
import ErrorBoundary from '../../error-boundary/index'
import ImageUpload from '../../image-upload'
import ProductDelete from '../product-delete'
import {
  useUpdateProductMutation,
  useDeleteProductMutation
} from '../../../graphql/product/hooks'
import { createPubId, hasPermission } from '../../../shared/utils'
import { toast } from '../../toast'
import { ITEM_UPDATE, ADMIN } from '../../../types/permission-types'
import { useCurrentUserQuery } from '../../../graphql/user/hooks'
import { ProductInterface, UserInterface, PermissionEnum } from '../../../shared/typings'

interface Props {
  variables: {
    where: { id: string }
    data: Partial<ProductInterface> & {
      images: { set: string[] }
    }
  }
}

const ProductUpdateComponent = ({
  product,
  updateProduct,
  deleteProduct,
  updateLoading,
  deleteLoading
}: {
  product: ProductInterface
  updateProduct: (props: Props) => void
  deleteProduct: (props: Props) => void
  updateLoading: boolean
  deleteLoading: boolean
}) => {
  const { id, __typename, ...rest } = product
  const [state, setState] = useState(rest)
  const [isLoading, setIsLoading] = useState(false)
  const { data } = useCurrentUserQuery()
  const me: UserInterface | null = data && data.me

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const isUpdate = (e.target as HTMLInputElement).name === 'update'
    const mutateProduct = isUpdate ? updateProduct : deleteProduct

    mutateProduct({
      variables: {
        where: { id: product.id },
        ...(isUpdate && {
          data: {
            ...state,
            price: +state.price,
            availableSizes: { set: state.availableSizes },
            images: { set: state.images }
          }
        })
      }
    })
  }

  const handleSetImages = (images: string[]): void => {
    setState(prevState => ({ ...prevState, images }))
  }

  const handleUpload = async (acceptedFiles: any[]) => {
    setIsLoading(true)
    const data = new FormData() // eslint-disable-line
    const pubId = createPubId(state.sku, state.images)
    data.append('file', acceptedFiles[0])
    data.append('upload_preset', 'fashion_shop')
    data.append('public_id', pubId)

    // prettier-ignore
    const res = await fetch('https://api.cloudinary.com/v1_1/dbir6orpj/image/upload', { // eslint-disable-line
      method: 'POST',
      body: data
    })

    handleSetImages([...state.images, pubId])
    setIsLoading(false)
  }

  return (
    <ProductUpdate>
      <ProductUpdate.Title>Update product</ProductUpdate.Title>
      <ProductForm
        loading={updateLoading || deleteLoading}
        useState={[state, setState]}
        leftComponentAddon={
          <ImageUpload
            onUpload={handleUpload}
            isLoading={isLoading}
            currentImages={state.images}
            setImages={handleSetImages}
          />
        }
        fullWidthAddon={
          <ProductUpdate.BtnGroup>
            <ProductDelete
              me={me}
              loading={deleteLoading}
              onClick={handleSubmit}
            />
            {me && hasPermission(me, [PermissionEnum.ADMIN, PermissionEnum.ITEM_UPDATE]) && (
              <ProductUpdate.ActionBtn
                name='update'
                onClick={handleSubmit}
                disabled={deleteLoading}
              >
                {updateLoading ? 'Submitting' : 'Submit'}
              </ProductUpdate.ActionBtn>
            )}
          </ProductUpdate.BtnGroup>
        }
      />
    </ProductUpdate>
  )
}

const withProductData = <T extends {}>(Component: React.ComponentType<T>) => (
  props: any
) => {
  const [updateProduct, updateProductInfo] = useUpdateProductMutation() // prettier-ignore
  const [deleteProduct, deleteProductInfo] = useDeleteProductMutation()

  useEffect(() => {
    if (deleteProductInfo.data) {
      toast('Product has been deleted.')
    }
    if (updateProductInfo.data) {
      toast('Product successfully updated.')
    }
  }, [deleteProductInfo, updateProductInfo])

  return (
    <ErrorBoundary error={updateProductInfo.error || deleteProductInfo.error}>
      <Component
        {...props}
        product={props.product}
        updateProduct={updateProduct}
        deleteMutation={deleteProduct}
        deleteLoading={deleteProductInfo.loading}
        updateLoading={updateProductInfo.loading}
      />
    </ErrorBoundary>
  )
}

export default withProductData(ProductUpdateComponent)
