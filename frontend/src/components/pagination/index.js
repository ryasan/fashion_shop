import React from 'react'
import PropTypes from 'prop-types'

import Pagination, { PageButton } from './pagination.styles'

const PaginationComponent = ({
  pageInfo,
  children,
  changePage,
  currentPage,
  totalPages
}) => {
  const { hasNextPage } = pageInfo

  const handlePrevClick = () => {
    changePage({
      variables: {
        page: currentPage - 1
      }
    })
  }

  const handleNextClick = () => {
    changePage({
      variables: {
        page: currentPage + 1
      }
    })
  }

  const renderControls = () => (
    <Pagination.PageControls>
      <PageButton disabled={currentPage === 1} onClick={handlePrevClick}>
        <PageButton.Icon name='left-arrow' />
      </PageButton>
      {totalPages > 0 ? `${currentPage} / ${totalPages} pages` : 'No results'}
      <PageButton disabled={!hasNextPage} onClick={handleNextClick}>
        <PageButton.Icon name='right-arrow' />
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
  pageInfo: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired
}

export default PaginationComponent
