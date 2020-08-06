import styled, { keyframes } from 'styled-components'

import { H1, H2, H4, P, Ul, Li, A, Input } from '../shared/elements'

const Home = styled.div`
  flex: 1;
`

const balloonGrow = (startingSize, targetSize) => {
  return keyframes`
  0% {
    height: ${startingSize}rem;
    width: ${startingSize}rem;
  }

  100% {
    height: ${targetSize}rem;
    width: ${targetSize}rem;
  }
`
}

const Heading = styled.div`
  align-items: center;
  background: var(--dark);
  display: flex;
  height: 90vh;
  justify-content: center;
  position: relative;

  &::before {
    animation: ${balloonGrow(25, 35)} 5s linear forwards;
    background: white;
    border-radius: 50%;
    bottom: 10rem;
    content: '';
    height: 30em;
    left: 5rem;
    opacity: 0.1;
    position: absolute;
    width: 30rem;
  }

  &::after {
    animation: ${balloonGrow(15, 20)} 5s linear forwards;
    background: var(--red);
    border-radius: 50%;
    content: '';
    height: 10em;
    opacity: 0.1;
    position: absolute;
    right: 15rem;
    top: 5rem;
    width: 10rem;
  }

  > svg {
    bottom: 0;
    fill: var(--off-white);
    position: absolute;
    width: 100vw;
  }
`

Heading.TextContainer = styled.div`
  text-align: center;
  transform: translateY(-13rem);
`

Heading.Title = styled(H1)`
  font-size: 10rem;
  font-weight: 400;
`

Heading.Subtitle = styled(H4)`
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
`

Heading.Subtext = styled(P)``

const Body = styled.div`
  background: var(--off-white);
`

const Footer = styled.div`
  align-items: flex-start;
  background: var(--red);
  box-shadow: var(--box-shadow);
  display: flex;
  height: 35rem;
  justify-content: flex-start;
  padding: 5rem;
  position: relative;
`

const Links = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`

Links.Title = styled(H2)`
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

const Subscribe = styled.div`
  align-content: space-between;
  display: grid;
  flex: 1;
  grid-column-gap: 2rem;
`

Subscribe.Title = styled(H2)`
  grid-column: 1/3;

  span {
    text-decoration: underline;
  }
`

Subscribe.TextInput = styled(Input)`
  background: 0;
  border: 0;
  border-bottom: 0.3rem solid white;
  margin-bottom: 4rem;

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

export { Heading, Body, Links, Subscribe, Footer }
export default Home
