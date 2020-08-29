import React from 'react'
import PropTypes from 'prop-types'
import { camelCase, capitalCase } from 'change-case'

import Table from '../../table'
import { Cell } from '../../table/table.styles'
import { Input, Label, Div } from '../../../shared/elements'
import {
  IS_AVAILABLE,
  IS_FREE_SHIPPING,
  IS_FEATURED
} from '../../../types/product-update-types'

const createSizesData = (props: React.ComponentProps<any>) => ({
  headRow: [
    { text: capitalCase(IS_AVAILABLE) },
    { text: capitalCase(IS_FREE_SHIPPING) },
    { text: capitalCase(IS_FEATURED) }
  ],
  bodyRows: [[{ Jsx: ExtraFlags, props }]]
})

const ExtraFlags = ({
  onChange,
  flagMap
}: {
  onChange: () => void
  flagMap: { [flag: string]: boolean }
}) => {
  return [IS_AVAILABLE, IS_FREE_SHIPPING, IS_FEATURED].map((flag, i) => (
    <Cell key={i}>
      <Input
        type='checkbox'
        value={camelCase(flag)}
        onChange={onChange}
        checked={flagMap[camelCase(flag)] === true}
      />
    </Cell>
  ))
}

ExtraFlags.propTypes = {
  onChange: PropTypes.func.isRequired,
  flagMap: PropTypes.object.isRequired
}

const ExtraFlagsTableComponent = (props: React.ComponentProps<any>) => (
  <Div>
    <Label modifiers='font_size_lg'>Extra flags:</Label>
    <Table {...createSizesData(props)} />
  </Div>
)

export default ExtraFlagsTableComponent
