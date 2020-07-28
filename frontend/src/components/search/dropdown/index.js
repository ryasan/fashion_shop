import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'

import Dropdown, { KeepScrolling } from './dropdown.styles'
import { Span } from '../../../elements'
import { getFrontImage } from '../../../utils'

const fadeAway = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const pulse = {
  animate: { scale: [1, 1.2, 1] },
  transition: { loop: Infinity, ease: 'easeOut' }
}

const DropdownComponent = ({
  dropdownIsOpen,
  highlightedIndex,
  getItemProps,
  products
}) => {
  const [scrolledToBottom, setScrolledToBottom] = useState(false)

  const handleScroll = e => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target
    const hasReachedBottom = offsetHeight + scrollTop >= scrollHeight

    if (scrolledToBottom === false && hasReachedBottom) {
      setScrolledToBottom(true)
    }
    if (scrolledToBottom === true && !hasReachedBottom) {
      setScrolledToBottom(false)
    }
  }

  const showKeepScrollingText = products.length > 7 && !scrolledToBottom

  return (
    <>
      <AnimatePresence>
        {dropdownIsOpen && (
          <Dropdown {...fadeAway} onScroll={handleScroll}>
            {products.map((p, i) => (
              <Dropdown.Item
                key={p.id}
                {...getItemProps({ item: p })}
                highlighted={i === highlightedIndex}
              >
                <Dropdown.ItemImage src={getFrontImage(p.sku)} />
                <Span modifiers='font_size_m'>{p.title}</Span>
              </Dropdown.Item>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showKeepScrollingText && dropdownIsOpen && (
          <KeepScrolling {...fadeAway}>
            <KeepScrolling.Text {...pulse}>Scroll down</KeepScrolling.Text>
            <KeepScrolling.Text {...pulse}>&darr;</KeepScrolling.Text>
          </KeepScrolling>
        )}
      </AnimatePresence>
    </>
  )
}

DropdownComponent.propTypes = {
  dropdownIsOpen: PropTypes.bool.isRequired,
  highlightedIndex: PropTypes.number,
  products: PropTypes.array.isRequired,
  getItemProps: PropTypes.func.isRequired
}

DropdownComponent.defaultProps = {
  products: []
}

export default DropdownComponent
