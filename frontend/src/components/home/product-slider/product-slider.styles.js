import styled from 'styled-components'
import { H1 } from '../../../shared/elements'
import { device } from '../../../shared/utils'

const ProductSlider = styled.div`
  align-items: center;
  box-shadow: 0 -1rem 2rem rgba(0, 0, 0, 0.25),
    0 -0.5rem 1rem rgba(0, 0, 0, 0.22);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  padding: 10rem 0;
  position: relative;
`

ProductSlider.Title = styled(H1)`
  margin-bottom: 20rem;
  text-align: center;
`

ProductSlider.HugeTextLeft = styled(H1)`
  color: var(--red);
  font-size: 25rem;
  font-weight: 300;
  left: -10rem;
  position: absolute;
  top: 10rem;

  @media ${device.mobileL} {
    display: none;
  }
`

ProductSlider.HugeTextRight = styled(H1)`
  bottom: -27rem;
  font-size: 25rem;
  font-weight: 300;
  position: absolute;
  right: -24rem;
  z-index: 2;

  @media ${device.mobileL} {
    display: none;
  }
`

export default ProductSlider
