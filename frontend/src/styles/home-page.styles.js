import styled from 'styled-components'

import { H1, H4, P, Div } from '../shared/elements'

const Home = styled.div`
  flex: 1;
  overflow-x: hidden;
`

export const Heading = styled.div`
  align-items: center;
  background: var(--dark);
  box-shadow: var(--box-shadow-lg);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    background: white;
    bottom: 0;
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    transition: all 0.8s ease;
    width: 50%;
    z-index: -1;
  }

  &::after {
    background: var(--red);
    bottom: 0;
    clip-path: polygon(0% 0%, 100% 0, 100% 60%, 50% 80%, 0 60%);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    transition: all 0.8s ease;
    width: 50%;
    z-index: -1;
  }
`

Heading.Diagonal = styled.div`
  background: linear-gradient(225deg, var(--red) 50%, transparent 50%);
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 7.5rem 7.5rem;
  border-radius: 0.4rem;
  border-top: 0.5rem var(--red) solid;
  height: 100%;
  position: absolute;
  width: 100%;
`

Heading.TextContainer = styled.div`
  border: 0.4rem solid white;
  box-shadow: var(--box-shadow-lg);
  color: white;
  padding: 5rem;
  text-align: center;
  transform: translateY(-13rem);
`

Heading.Title = styled(H1)`
  font-size: 10rem;
  font-weight: 400;
`

Heading.Subtitle = styled(H4)`
  color: var(--red);
  float: right;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
  text-align: right;
  width: 50%;
`

Heading.Subtext = styled(P)``

export const Body = Div

Body.Loader = styled.div`
  height: 100vh;
  position: relative;
`

export default Home
