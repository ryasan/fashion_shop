import styled from 'styled-components'

import { device } from '../utils'

const Home = styled.div`
  flex-grow: 1;
  position: relative;
`

Home.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

Home.Section = styled.section`
  padding: 10rem 0;
`

Home.SectionOne = styled(Home.Section)`
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`

Home.SectionOneContent = styled.div`
  z-index: 1;
`

Home.TurntablesBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${require('../images/turntables-bg.jpg')}) center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(1.1);
  filter: grayscale(0.8) blur(6px);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`

const TextList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  max-width: var(--max-width);
`

TextList.TextItem = styled.li`
  width: 50%;
  padding: 1rem 4rem;
  color: white;
  &:nth-child(odd) {
    align-self: flex-end;
    border-left: 2px solid var(--red);
    transform: translateX(-2px);
  }
  &:nth-child(even) {
    text-align: right;
    border-right: 2px solid var(--red);
  }

  @media ${device.mobileL} {
    width: 100%;
    text-align: left !important;
    border: none !important;
    margin: 1rem 0;
  }
`

Home.SectionTwo = styled(Home.Section)`
  background: var(--dark);
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MaxWidth = styled.div`
  max-width: var(--max-width);
  width: 100%;
`

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`

Icons.IconWrap = styled.div`
  width: 33.33333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.mobileL} {
    margin: 5rem 0;
    width: 100%;
  }
  svg {
    width: 5rem;
    height: 5rem;
    fill: white;
  }
`

export { TextList, Icons, MaxWidth }
export default Home
