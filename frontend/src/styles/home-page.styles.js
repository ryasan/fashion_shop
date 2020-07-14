import styled from 'styled-components'

import { Element } from 'react-scroll'

const Home = styled.div`
  /* outline: 1px solid red;
  * {
    outline: 1px solid red;
  } */
  h1 {
    margin: 0;
  }

  flex-grow: 1;
  position: relative;
  .scroll-link {
    position: fixed;
    width: 5rem;
    height: 5rem;
    background: gray;
    color: black;
    right: 3rem;
    font-size: 3rem;
    text-align: center;
    line-height: 5rem;
    cursor: pointer;
    z-index: 100;
    &.one {
      bottom: 9rem;
    }
    &.two {
      bottom: 3rem;
    }
    &.active {
      background: white;
    }
  }
`

Home.Section = styled(Element)`
  height: 100vh;
  background-color: transparent;
  &#section-1 {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city22222.jpg')
      center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    /* z-index: 1; */
    position: relative;
  }
  &#section-2 {
    background: green;
  }

  &#section-fill {
    background: red;
  }
`

const Foreground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`

Foreground.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

Home.Text = styled.div`
  position: absolute;
  right: 16.5rem;
  top: 20rem;
  text-transform: uppercase;
  z-index: 1;
  text-align: center;
`

Home.Text1 = styled(Home.Text)``

Home.Text2 = styled(Home.Text)``

const BgImage = styled.div`
  background: red;
  position: absolute;
  width: 100%;
  height: 100%;
`

BgImage.Img = styled.div``

const Links = styled.div``

export { Foreground, BgImage, Links }
export default Home
