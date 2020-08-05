import styled from 'styled-components'
import { motion } from 'framer-motion'

import { H1, H2 } from '../../../elements'

const Body = styled.div`
  background: var(--off-white);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
`

Body.HugeText = styled(H1)`
  color: white;
  font-size: 15rem;
  font-weight: 900;
  left: -5%;
  margin: 0;
  position: absolute;
  text-transform: uppercase;

  &:not(:first-child) {
    top: 17rem;
  }
`

const ProductPreview = styled(motion.div)`
  align-items: flex-start;
  display: flex;
  height: 55em;
  left: 40%;
  position: absolute;
  top: 10%;
  width: 60rem;
`

ProductPreview.Title = styled(H2)`
  color: var(--dark);
  font-size: 7rem;
  letter-spacing: 1rem;
  margin-top: 0;
  padding: 0;
  position: absolute;
  top: -4rem;
  white-space: nowrap;
  z-index: 99;
`

ProductPreview.ImageContainer = styled(motion.div)`
  height: 100%;
  left: 0;
  position: relative;
  width: 50%;
  z-index: 1;
`

const Details = styled.div`
  align-content: space-between;
  background: var(--white);
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
  transform: translate(-40%, 2rem);
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
