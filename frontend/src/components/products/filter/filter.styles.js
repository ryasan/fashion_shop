import styled, { css } from 'styled-components'

import { Button, P } from '../../../elements'

const Filter = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
`

const filterBtnStyles = isSelected => css`
  background: ${isSelected ? 'var(--red)' : 'var(--dark)'};
  color: ${isSelected ? 'white' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${isSelected ? 'var(--red)' : 'white'};
  margin-left: 1rem;
  font-size: var(--font-size-s);
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${isSelected ? '#dd0000' : 'var(--darker)'};
  }
`

Filter.FreeShipping = styled(Button)`
  height: 3.5rem;
  ${props => filterBtnStyles(props.isSelected)};
`

Filter.Sizes = styled.ul`
  display: flex;
`

Filter.OneSize = styled(Button)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  ${props => filterBtnStyles(props.isSelected)};
`

Filter.Title = P

export default Filter
