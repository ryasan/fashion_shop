import styled from 'styled-components'

const Slide = styled.div`
  background: url(${props => props.bg}) center center/cover no-repeat;
  height: 65rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

Slide.Title = styled.h3`
  color: white;
  text-align: center;
`

export default Slide
