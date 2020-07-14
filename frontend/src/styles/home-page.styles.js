import styled from 'styled-components'

const Home = styled.div`
  flex-grow: 1;
  outline: 1px solid red;
  * {
    outline: 1px solid red;
  }
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 100vh;
  background-image: -webkit-gradient(
    linear,
    right top,
    left bottom,
    from(#f2e3c6),
    to(#a7a1a5)
  );
  background-image: linear-gradient(to left bottom, #f2e3c6 0%, #a7a1a5 100%);
  overflow: hidden;
`

Home.App = styled.div`
  position: relative;
  min-width: 850px;
  height: 540px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`

const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: -2.5%;
  width: 105%;
  height: 100%;
  -webkit-transition: -webkit-transform 3.5s 770ms;
  transition: -webkit-transform 3.5s 770ms;
  transition: transform 3.5s 770ms;
  transition: transform 3.5s 770ms, -webkit-transform 3.5s 770ms;
`

BgImage.Img = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

BgImage.Img1 = styled(BgImage.Img)`
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/city22222.jpg')
    center center no-repeat;
  background-size: cover;
`

BgImage.Img2 = styled(BgImage.Img)`
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/forest.jpg')
    center center no-repeat;
  background-size: cover;
  opacity: 0;
  -webkit-transition: opacity 0ms 1300ms;
  transition: opacity 0ms 1300ms;
  will-change: opacity;
`

export { BgImage }
export default Home
