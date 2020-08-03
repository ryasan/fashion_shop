import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from '../../utils'

const Header = styled.header`
  align-items: center;
  background: var(--dark);
  display: flex;
  height: 7rem;
  justify-content: space-between;
  position: relative;
  z-index: 1000;
`

Header.LogoContainer = styled(Link)`
  align-items: center;
  display: flex;
  margin-left: 3rem;
  width: 10rem;
`

Header.Nav = styled.ul`
  display: flex;
  position: relative;
  width: ${({ me }) => `calc((${me ? 4 : 3} + 1) * 9rem)`};
  z-index: 10;

  @media ${device.mobileL} {
    background: var(--dark);
    bottom: 0;
    position: fixed;
    width: 100%;
  }
`

Header.NavItem = styled.li`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  width: 9rem;

  @media ${device.mobileL} {
    margin: 0;
    width: 100%;
  }

  &::after {
    background: var(--red);
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    width: 0;
  }

  &:hover,
  &:focus {
    color: var(--red);
    outline: none;

    &::after {
      width: 100%;
    }
  }

  a {
    align-items: center;
    color: inherit;
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-s);
    height: 7rem;
    justify-content: center;
    text-decoration: none;
    width: 100%;
  }

  svg {
    fill: white;
    height: 3rem;
    transition: fill 0.2s;
    width: 3rem;
  }
`

export default Header
