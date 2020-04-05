import styled from 'styled-components'

const Carousel = styled.div`
  position: relative;
`

Carousel.Prev = styled.div`
  position: absolute;
  z-index: 1;
  height: 5rem;
  width: 5rem;
  left: 5rem;
  top: 50%;
  transform: translateY(-50%);
  fill: var(--red);
  cursor: pointer;
`

Carousel.Next = styled.div`
  position: absolute;
  z-index: 1;
  width: 5rem;
  height: 5rem;
  right: 5rem;
  top: 50%;
  transform: translateY(-50%);
  fill: var(--red);
  cursor: pointer;
`

export default Carousel
