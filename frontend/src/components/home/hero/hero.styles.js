import styled from 'styled-components'

import { H4 } from '../../../shared/elements'
import heroBg from '../../../static/hero-bg-1.svg'
import { motion } from 'framer-motion'
export const Hero = styled.div`
  align-items: center;
  background: url(${heroBg}) center center/cover no-repeat;
  background-color: white;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  box-shadow: var(--box-shadow-lg);
  display: flex;
  height: calc(100vh - 10rem);
  justify-content: center;
  position: relative;
  width: 100%;
`

Hero.TextContainer = styled.div`
  color: white;
  padding: 5rem;
  text-align: center;
  transform: translateY(-13rem);
`

Hero.Title = styled(motion.h1)`
  font-size: 10rem;
  font-weight: 400;
  margin: 0;
  overflow: hidden;
  position: relative;
`

Hero.TitleLeft = styled(Hero.Title)``

Hero.TitleRight = styled(Hero.Title)``

Hero.Subtitle = styled(H4)`
  color: var(--red);
  float: right;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
  text-align: right;
  width: 50%;
`

export default Hero
