import styled from 'styled-components'
import { motion } from 'framer-motion'

const SocialMedia = styled(motion.div)`
  bottom: 2rem;
  position: absolute;
  right: 3rem;
`

SocialMedia.MotionIcon = styled(motion.div)`
  color: var(--red);
  display: inline-block;

  svg {
    cursor: pointer;
    height: 4rem;
    margin-left: 2rem;
    width: 4rem;
  }
`

export default SocialMedia
