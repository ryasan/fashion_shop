import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from '../../utils'

const Header = styled.header`
  position: relative;
  background: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  z-index: 1000;
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
  z-index: 10;
  position: relative;
  width: ${({ me }) => `calc((${me ? 4 : 3} + 1) * 9rem)`};
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
  width: 9rem;
  @media ${device.mobileL} {
    width: 100%;
    margin: 0;
  }
  &:after {
    content: '';
    height: 0.2rem;
    background: var(--red);
    width: 0;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
  }
  &:hover,
  &:focus {
    outline: none;
    color: var(--red);
    &:after {
      width: 100%;
    }
  }
  a {
    width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-s);
    text-decoration: none;
    color: inherit;
  }
  svg {
    fill: white;
    transition: fill 0.2s;
    width: 3rem;
    height: 3rem;
  }
`

export default Header
