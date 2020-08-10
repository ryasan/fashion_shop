import styled, { keyframes } from 'styled-components'

import { H1, H2, H4, P, Ul, Li, A, Input } from '../shared/elements'

const Home = styled.div`
  flex: 1;
  overflow-x: hidden;
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

export const Heading = styled.div`
  align-items: center;
  background: linear-gradient(225deg, var(--red) 50%, transparent 50%),
    var(--dark);
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 7.5rem 7.5rem;
  border-radius: 0.4rem;
  border-top: 0.5rem var(--red) solid;
  box-shadow: var(--box-shadow-lg);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    animation: ${balloonGrow(35, 45)} 5s linear forwards;
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
    animation: ${balloonGrow(17.5, 22.5)} 5s linear forwards;
    background: white;
    border-radius: 50%;
    content: '';
    height: 10em;
    opacity: 0.1;
    position: absolute;
    right: 15rem;
    top: 5rem;
    width: 10rem;
  }
`

Heading.TextContainer = styled.div`
  color: white;
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

export const Body = styled.div`
  /* display: flex;
  flex-direction: column;
  position: relative; */
`

Body.Loader = styled.div`
  height: 68vh;
  position: relative;
`

export const Footer = styled.div`
  align-items: flex-start;
  background: var(--dark);
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
  color: var(--red);
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
  align-content: space-between;
  display: grid;
  flex: 1;
  grid-column-gap: 2rem;
`

Subscribe.Title = styled(H2)`
  grid-column: 1/3;

  span {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: var(--red);
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

export default Home
