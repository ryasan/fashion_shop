import styled from 'styled-components'
import { motion } from 'framer-motion'

const Overlay = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  flex: 1;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 300;
`

export default Overlay
