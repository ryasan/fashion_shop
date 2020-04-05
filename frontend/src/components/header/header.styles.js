import styled from 'styled-components'
import { Link } from 'gatsby'

import Icon from '../icons'
import { device } from '../../utils/device'

const Header = styled.header`
  background: var(--dark);
  display: flex;
  justify-content: flex-end;
`

Header.Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: white;
  width: 12rem;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: var(--red);
    bottom: 0;
    left: 0;
    transition: width 0.2s ease-out;
  }
  &:hover {
    color: var(--red);
    &:after {
      width: 100%;
    }
  }
  @media ${device.mobileL} {
    width: 33.33333%;
  }
`

Header.Link = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--regular-font);
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
`

Header.CartBtn = styled(Icon)`
  padding: 1rem;
  color: inherit;
  transition: color 0.2s;
`

export default Header
