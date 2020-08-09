import styled from 'styled-components'
import { motion } from 'framer-motion'

import { H1, H2 } from '../../../shared/elements'

const ProductPreview = styled.div`
  background: var(--off-white);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`

ProductPreview.HugeText = styled(H1)`
  color: white;
  font-size: 15rem;
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;
`

ProductPreview.Content = styled.div`
  height: 100vh;
  position: relative;
`

ProductPreview.Body = styled(motion.div)`
  align-items: flex-start;
  display: flex;
  height: 55rem;
  position: absolute;
  width: 60rem;
`

ProductPreview.Title = styled(H2)`
  color: white;
  font-size: 7rem;
  letter-spacing: 1rem;
  margin-top: 0;
  padding: 0;
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
  box-shadow: var(--box-shadow-s);
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

export { Details }
export default ProductPreview
