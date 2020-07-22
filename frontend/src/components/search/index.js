import React, { useState, useEffect } from 'react'
// import Downshift from 'downshift'
// import { Router } from '@reach/router'
import { useAnimation, useCycle } from 'framer-motion'
import { DebounceInput } from 'react-debounce-input'

import Search from './search.styles'
import Icon from '../icons'
import ErrorBoundary from '../error-boundary/index'
import Loader from '../loader/index'
import { useProductsQuery } from '../../graphql/product/hooks'
import { getFrontImage } from '../../utils'
import { Span } from '../../elements/span'

const fadeInUp = {
  initial: { y: '20rem', opacity: 0, scale: 0.1 },
  animate: { y: 0, translateX: '-50%', opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay: 1.3 }
}

const SearchComponent = () => {
  const controls = useAnimation()
  const [animations, cycleAnimations] = useCycle(...[fadeInUp, {}])
  const [search, setSearch] = useState('')
  const { data, loading, error } = useProductsQuery({
    variables: {
      where: {
        OR: [{ title_contains: search }, { description_contains: search }]
      }
    }
  })

  const onChange = e => {
    if (e && e.persist) {
      e.persist()
      setSearch(e.target.value)
    }
  }

  const handleFocus = () => {
    controls.start({ width: '50rem', transition: { duration: 0.3 } })
  }

  const handleBlur = () => {
    controls.start({ width: '20rem', transition: { duration: 0.3 } })
  }

  useEffect(() => {
    cycleAnimations()
  }, [])

  return (
    <ErrorBoundary error={error}>
      <Search animate={controls} {...animations}>
        <Icon name="magnifier" />
        <DebounceInput
          type="search"
          value={search}
          onChange={onChange}
          placeholder="Search..."
          minLength={1}
          debounceTimeout={350}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Search.Dropdown>
          {loading && <Loader color="white" size="small" />}
          {!loading &&
            search &&
            data.products.map(p => (
              <Search.Item key={p.id}>
                <Search.ItemImage src={getFrontImage(p.sku)} />
                <Span modifiers="font_size_m">{p.title}</Span>
              </Search.Item>
            ))}
        </Search.Dropdown>
      </Search>
    </ErrorBoundary>
  )
}

export default SearchComponent
