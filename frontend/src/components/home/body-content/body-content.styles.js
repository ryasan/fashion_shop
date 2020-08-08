import styled from 'styled-components'
import { motion } from 'framer-motion'

import { H1, H2 } from '../../../shared/elements'

const Body = styled.div`
  background: var(--off-white);
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 200vh;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`

Body.Content = styled.div`
  height: 100vh;
  position: relative;
`

Body.HugeText = styled(H1)`
  color: white;
  font-size: 15rem;
  font-weight: 900;
  left: -19rem;
  margin: 10rem;
  position: absolute;
  text-transform: uppercase;
  top: 45vh;

  &:not(:first-child) {
    top: 60vh;
  }
`

const ProductPreview = styled(motion.div)`
  align-items: flex-start;
  display: flex;
  height: 55rem;
  left: 50%;
  position: absolute;
  top: -20vh;
  width: 60rem;
`

ProductPreview.Title = styled(H2)`
  color: white;
  font-size: 7rem;
  letter-spacing: 1rem;
  margin-top: 0;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  z-index: 99;

  span {
    color: white;
    text-shadow: 0.3rem 0.3rem var(--dark);
  }
`

ProductPreview.ImageContainer = styled(motion.div)`
  height: 100%;
  position: relative;
  width: 50%;
  z-index: 1;
`

const Details = styled.div`
  align-content: space-between;
  background: white;
  border-radius: 0.3rem;
  box-shadow: var(--box-shadow);
  color: var(--dark);
  direction: rtl;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  padding: 4rem;
  position: relative;
  text-align: right;
  white-space: nowrap;
`

Details.List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  height: 20rem;
  justify-content: space-between;
`

Details.ListItem = styled(motion.li)`
  font-weight: 300;
  list-style-position: inside;
  list-style-type: initial;
`

export { ProductPreview, Details }
export default Body
