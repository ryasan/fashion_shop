import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from '../../utils'

const Header = styled.header`
  background: var(--dark);
  display: flex;
  justify-content: space-between;
  height: 7rem;
`

Header.LogoContainer = styled(Link)`
  width: 10rem;
  display: inline;
  margin-left: 3rem;
  display: flex;
  align-items: center;
`

Header.Nav = styled.ul`
  display: flex;
  margin-right: 6rem;
  z-index: 10;
  @media ${device.mobileL} {
    width: 100%;
    position: fixed;
    bottom: 0;
    background: var(--dark);
  }
`

Header.NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: white;
  width: 10rem;
  @media ${device.mobileL} {
    width: 100%;
    margin: 0;
  }
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
    svg {
      fill: var(--red);
    }
    &:after {
      width: 100%;
    }
  }
  a {
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-m);
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;
  }
  svg {
    fill: white;
    transition: fill 0.2s;
  }
`

export default Header
