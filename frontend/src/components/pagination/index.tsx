import React from 'react'

import Pagination, { PageButton } from './pagination.styles'

interface PaginationInterface {
    pageInfo: { hasNextPage: boolean }
    children: React.ReactChildren | React.ReactChild
    setCurrentPage: (page: number) => void
    currentPage: number
    totalPages: number
}

const PaginationComponent: React.FC<PaginationInterface> = ({
    pageInfo,
    children,
    setCurrentPage,
    currentPage,
    totalPages
}) => {
    const { hasNextPage } = pageInfo

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1)
    }

    const renderControls = () => (
        <Pagination.PageControls>
            <PageButton disabled={currentPage === 1} onClick={handlePrevClick}>
                <PageButton.Icon name='left-arrow' />
            </PageButton>
            {totalPages && totalPages > 0
                ? `${currentPage} / ${totalPages} pages`
                : 'No results'}
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

export default PaginationComponent
