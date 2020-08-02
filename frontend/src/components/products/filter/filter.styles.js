import styled, { css } from 'styled-components'

import { Button, P } from '../../../elements'

const Filter = styled.div`
  position: relative;
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

Filter.ButtonGroup = styled.div`
  position: initial;
`

const WideBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

WideBox.Button = styled(Button)`
  height: 3.5rem;
  width: 7rem;
  ${props => filterBtnStyles(props.isSelected)};
`

const Round = styled.div`
  display: flex;
  justify-content: center;
`

Round.Button = styled(Button)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  ${props => filterBtnStyles(props.isSelected)};
`

Filter.Title = styled(P)`
  margin: 0;
`

export { Round, WideBox }
export default Filter
