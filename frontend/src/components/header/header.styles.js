import styled from 'styled-components'
import { Link } from 'gatsby'

import Icon from '../icons'
import { Ul, Li } from '../elements'
import { device } from '../../utils'

const Header = styled.header`
  background: var(--dark);
  display: flex;
  justify-content: space-between;
  height: 7rem;
`

Header.Nav = styled(Ul)`
  display: flex;
  margin-right: 9rem;
  @media ${device.mobileL} {
    margin-right: 7rem;
  }
`

Header.NavItem = styled(Li)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--off-white);
  width: 10rem;
  margin-right: 3rem;
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
    margin-right: 1rem;
  }
`

Header.Link = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--regular-font);
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
`

Header.Logo = styled(Link)`
  width: 10rem;
  display: inline;
  margin-left: 3rem;
  display: flex;
  align-items: center;
`

Header.Img = styled(Icon)`
  width: 100%;
  height: 100%;
`

export default Header
