import styled from 'styled-components'

import Loader from '../components/loader'
import Icon from '../components/icons'
import { H2, P, Span, H1 } from '../components/elements'
import { device } from '../utils'

const Home = styled.div`
  position: relative;
`

Home.Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

Home.Section = styled.section`
  position: relative;
  padding: 10rem 0;
`

Home.H1 = styled(H1)`
  color: var(--red);
  text-align: center;
  margin: 0;
`

Home.H2 = styled(H2)`
  margin: 0;
  color: var(--red);
`

Home.P = P

Home.Span = styled(Span)`
  color: var(--red);
  font-size: var(--regular-font);
`

Home.Loader = Loader

Home.SectionOne = styled(Home.Section)`
  max-width: var(--max-width);
  align-self: center;
`

Home.TextList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`

Home.TextItem = styled.li`
  width: 50%;
  padding: 1rem 4rem;
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

Home.MaxWidth = styled.div`
  max-width: var(--max-width);
  width: 100%;
`

Home.Icons = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`

Home.IconWrap = styled.div`
  width: 33.33333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.mobileL} {
    margin: 5rem 0;
    width: 100%;
  }
`

Home.Icon = styled(Icon)`
  width: 5rem;
  height: 5rem;
  fill: white;
`

export default Home
