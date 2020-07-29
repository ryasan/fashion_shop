import React from 'react'
import PropTypes from 'prop-types'

import Pagination, { PageButton } from './pagination.styles'
import Icon from '../icons'

const PaginationComponent = ({
  count,
  pageInfo,
  perPage,
  children,
  setSkip,
  skip
}) => {
  const pages = Math.ceil(count / perPage)
  const currentPage = Math.ceil((skip + perPage) / perPage)
  const { hasNextPage } = pageInfo

  const handlePrevClick = () => {
    setSkip(prevSkip => prevSkip - perPage)
  }

  const handleNextClick = () => {
    setSkip(prevSkip => prevSkip + perPage)
  }

  const renderControls = () => (
    <Pagination.PageControls>
      <PageButton disabled={currentPage === 1} onClick={handlePrevClick}>
        <Icon name='left-arrow' />
      </PageButton>
      {pages > 0 ? `${currentPage} / ${pages} pages` : 'No results'}
      <PageButton disabled={!hasNextPage} onClick={handleNextClick}>
        <Icon name='right-arrow' />
      </PageButton>
    </Pagination.PageControls>
  )

  return (
    <Pagination>
      {renderControls()}
      {children}
      {renderControls()}
    </Pagination>
  )
}

PaginationComponent.propTypes = {
  children: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  pageInfo: PropTypes.object.isRequired,
  setSkip: PropTypes.func.isRequired
}

export default PaginationComponent
