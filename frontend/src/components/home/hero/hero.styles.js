import styled from 'styled-components'

import { H1, H4 } from '../../../shared/elements'
import heroBg from '../../../static/hero-bg-1.svg'
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

Hero.Diagonal = styled.div`
  background: linear-gradient(225deg, var(--red) 50%, transparent 50%);
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 7.5rem 7.5rem;
  border-radius: 0.4rem;
  border-top: 0.5rem var(--red) solid;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 2;
`

Hero.TextContainer = styled.div`
  color: white;
  padding: 5rem;
  text-align: center;
  transform: translateY(-13rem);
`

Hero.Title = styled(H1)`
  font-size: 10rem;
  font-weight: 400;
`

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
