import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { hasPermission } from '../../../shared/utils'
import { ADMIN, ITEM_DELETE } from '../../../types/permission-types'
import { Button } from '../../../shared/elements'
import { btns } from '../../../shared/styles'

const ProductDeleteBtn = styled(Button)`
    width: 15rem;
    ${btns.clearWhite}

    &:hover {
        ${btns.clearRed}
    }
`

const ProductDeleteComponent = ({ me, onClick, loading }) =>
    hasPermission(me, [ADMIN, ITEM_DELETE]) ? (
        <ProductDeleteBtn name='delete' onClick={onClick}>
            {loading ? 'Deleting' : 'Delete'}
        </ProductDeleteBtn>
    ) : null

ProductDeleteComponent.propTypes = {
    me: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default ProductDeleteComponent
