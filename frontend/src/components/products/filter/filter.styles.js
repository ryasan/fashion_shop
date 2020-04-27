import styled, { css } from 'styled-components'

import { H4, Button } from '../../elements'

const Filter = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
`

const filterBtnStyles = isSelected => css`
  background: ${isSelected ? 'black' : 'var(--off-white)'};
  color: ${isSelected ? 'var(--off-white)' : 'black'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${isSelected ? 'var(--off-white)' : 'black'};
  margin-left: 1rem;
  font-size: var(--small-font);
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${isSelected ? 'var(--dark)' : '#dfdfdf'};
  }
  &:active {
    box-shadow: 0 0 1pt 1pt var(--off-white);
  }
`

Filter.FreeShipping = styled(Button)`
  padding: 1rem 1rem;
  border-radius: 2px;
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

Filter.Title = styled(H4)`
  background: var(--dark);
  color: var(--off-white);
  height: 100%;
  display: flex;
  align-items: center;
`

export default Filter
