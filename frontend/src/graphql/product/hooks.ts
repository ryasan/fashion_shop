import { useQuery, useMutation } from '@apollo/react-hooks'

import {
    CREATE_PRODUCT_MUTATION,
    UPDATE_PRODUCT_MUTATION,
    DELETE_PRODUCT_MUTATION
} from './mutations'
import {
    PRODUCTS_QUERY,
    PRODUCTS_CONNECTION_QUERY,
    PRODUCT_QUERY
} from './queries'
import { SizeEnum, CategoryEnum } from '../../shared/typings/enums'
import { ProductInterface } from '../../shared/typings'
import { mapImages } from '../../shared/utils'

interface ProductVariablesInterface {
    variables: {
        where: { sku?: string; id?: string }
    }
}

interface ProductsVariablesInterface {
    variables: {
        where?: {
            sku_in?: string[]
            isFeatured?: boolean
        }
    }
}

interface FiltersInterface {
    sizeFilters: SizeEnum[]
    categoryFilters: CategoryEnum[]
    freeShippingSelected: boolean
    orderBy: string | null
    skip: number
    first: number
}

export const useProductQuery = ({ variables }: ProductVariablesInterface) => {
    return useQuery(PRODUCT_QUERY, { variables, fetchPolicy: 'network-only' })
}

export const useProductsQuery = ({ variables }: ProductsVariablesInterface) => {
    return useQuery(PRODUCTS_QUERY, { variables, fetchPolicy: 'network-only' })
}

interface ProductsConnectionInterface {
    data: {
        info: {
            count: number
            pageInfo: any
        }
        products: ProductInterface[]
    }
    error: any
    loading: boolean
}

export const useProductsConnectionQuery = (filters: FiltersInterface) => {
    const { data, loading, error } = useQuery(PRODUCTS_CONNECTION_QUERY, {
        variables: filters,
        fetchPolicy: 'network-only'
    })

    return <ProductsConnectionInterface>{
        data: data
            ? {
                  info: {
                      count: data?.productsCount?.aggregate?.count,
                      pageInfo: data?.productsConnection?.pageInfo
                  },
                  products: data?.productsConnection?.edges?.map(
                      (e: { node: ProductInterface }) => ({
                          ...e.node,
                          imageMap: mapImages(e.node.images)
                      })
                  )
              }
            : null,
        error,
        loading
    }
}

export const useCreateProductMutation = () => {
    return useMutation(CREATE_PRODUCT_MUTATION)
}

export const useUpdateProductMutation = () => {
    return useMutation(UPDATE_PRODUCT_MUTATION)
}

export const useDeleteProductMutation = () => {
    return useMutation(DELETE_PRODUCT_MUTATION)
}
