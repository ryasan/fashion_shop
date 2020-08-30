import React, { useState, useEffect } from 'react'

import Products from './products.styles'
import ProductList from './product-list'
import ControlsHeader from './controls-header/index'
import ErrorBoundary from '../error-boundary'
import Pagination from '../pagination'
import Loader from '../loader'
import { useProductsConnectionQuery } from '../../graphql/product/hooks'
import { useFiltersQuery } from '../../graphql/filter/hooks'

const perPage = 8

const ProductsComponent = () => {
    const [orderBy, setOrderBy] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(1)
    const { data: { sizeFilters, categoryFilters, freeShippingSelected } } = useFiltersQuery() // prettier-ignore
    const { data, error, loading } = useProductsConnectionQuery({
        sizeFilters,
        categoryFilters,
        freeShippingSelected,
        orderBy,
        skip: (currentPage - 1) * perPage,
        first: perPage
    })

    const count = data?.info?.count
    const products = data?.products
    const totalPages = count ? Math.ceil(count / perPage) : 1

    useEffect(() => {
        if (count) setCurrentPage(Math.min(currentPage, totalPages))
    }, [count])

    return (
        <Products>
            <ControlsHeader count={count} setOrderBy={setOrderBy} />
            <Products.Container>
                <ErrorBoundary error={error}>
                    {loading ? (
                        <Loader color='white' />
                    ) : (
                        <Pagination
                            pageInfo={data?.info?.pageInfo}
                            totalPages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}>
                            <ProductList products={products} />
                        </Pagination>
                    )}
                </ErrorBoundary>
            </Products.Container>
        </Products>
    )
}

export default ProductsComponent
