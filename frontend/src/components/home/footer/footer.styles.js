import styled from 'styled-components'
import { motion } from 'framer-motion'

import { H2, Ul, Li, A, Input, Span } from '../../../shared/elements'

const Footer = styled.div`
  align-items: flex-start;
  background: var(--red);
  box-shadow: 0 -1rem 2rem rgba(0, 0, 0, 0.25),
    0 -0.5rem 1rem rgba(0, 0, 0, 0.22);
  display: flex;
  height: 35rem;
  justify-content: flex-start;
  padding: 5rem;
  position: relative;
`

export const Links = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`

Links.Title = styled(H2)`
  color: var(--dark);
  font-style: italic;
  font-weight: 400;
  letter-spacing: 1rem;
  margin-top: 0;
`

Links.List = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

Links.ListItem = styled(Li)`
  font-size: 3rem;
  letter-spacing: 1rem;
  margin: 1rem 0;
`

Links.Link = styled(A)`
  cursor: pointer;
`

export const Subscribe = styled.div`
  display: grid;
  flex: 1;
  grid-column-gap: 2rem;
`

Subscribe.Title = styled(H2)`
  grid-column: 1/3;
  margin-top: 0;

  span {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: white;
  }
`

Subscribe.TextInput = styled(Input)`
  background: 0;
  border: 0;
  border-bottom: 0.3rem solid white;
  color: white;
  margin-bottom: 4rem;
  padding: 1rem 0;

  ::placeholder {
    color: var(--off-white);
  }

  &:first-child {
    grid-column: 1/2;
  }

  &:last-child {
    grid-column: 2/3;
  }
`

Subscribe.Link = styled(Span)``

export const SocialMedia = styled(motion.div)`
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

export default Footer
