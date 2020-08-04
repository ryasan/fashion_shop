import styled from 'styled-components'
import { motion } from 'framer-motion'

const SocialMedia = styled(motion.div)`
  bottom: 5rem;
  position: absolute;
  right: 5rem;
`

SocialMedia.MotionIcon = styled(motion.div)`
  color: var(--dark);
  display: inline-block;

  svg {
    cursor: pointer;
    height: 5rem;
    margin-left: 2rem;
    width: 5rem;
  }
`

export default SocialMedia
