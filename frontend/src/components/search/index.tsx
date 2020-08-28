import React, { useState } from 'react'
import Downshift from 'downshift'
import { DebounceInput } from 'react-debounce-input'
import { navigate } from '@reach/router'

import Search from './search.styles'
import ErrorBoundary from '../error-boundary'
import Dropdown from './dropdown'
import { useProductsQuery } from '../../graphql/product/hooks'
import { ProductInterface } from '../../shared/interfaces'

const routeToProduct = (product: ProductInterface) => {
  navigate(`/shop/${product.id}/`, { state: { sku: product.sku } })
}

const SearchComponent = () => {
  const [search, setSearch] = useState('')
  const { data, loading, error } = useProductsQuery({
    variables: {
      where: {
        OR: [{ title_contains: search }, { description_contains: search }]
      }
    }
  })

  const onChange = (e: React.FormEvent) => {
    if (e?.persist) {
      e.persist()
      setSearch((e.target as HTMLInputElement).value)
    }
  }

  return (
    <ErrorBoundary error={error}>
      <Downshift
        onChange={routeToProduct}
        itemToString={item => (item === null ? '' : item.title)}
      >
        {({
          getInputProps,
          getItemProps,
          getRootProps,
          highlightedIndex,
          isOpen: dropdownIsOpen
        }) => (
          <Search {...getRootProps()}>
            <Search.InputField>
              <Search.Icon name='magnifier' />
              <DebounceInput
                id='search'
                type='search'
                placeholder='Search...'
                minLength={1}
                debounceTimeout={350}
                value={search}
                {...getInputProps({ onChange })}
              />
            </Search.InputField>
            {!loading && search && (
              <Dropdown
                products={data.products}
                dropdownIsOpen={dropdownIsOpen}
                highlightedIndex={highlightedIndex}
                getItemProps={getItemProps}
              />
            )}
            {search && loading && <Search.Loader>Searching...</Search.Loader>}
          </Search>
        )}
      </Downshift>
    </ErrorBoundary>
  )
}

export default SearchComponent
