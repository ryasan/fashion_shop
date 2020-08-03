import styled from 'styled-components'

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: ${props => (props.active ? '100%' : 0)};
  position: absolute;
  width: 100%;
  z-index: 300;
`

export default Overlay
