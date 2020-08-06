import styled from 'styled-components'
import { Link } from 'gatsby'

import { device } from '../../shared/utils'

const Header = styled.header`
  align-items: center;
  background: var(--dark);
  display: flex;
  height: 10rem;
  justify-content: space-between;
  position: relative;
  z-index: 1000;
`

Header.LogoContainer = styled(Link)`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-start;
  padding: 1rem 2rem;
  width: 10rem;

  svg {
    color: white;
    height: 100%;
    width: 15rem;
  }

  @media ${device.tablet} {
    display: none;
  }
`

Header.NavList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  position: relative;
  width: ${({ me }) => `calc((${me ? 4 : 3} + 1) * 9rem)`};
  z-index: 10;

  @media ${device.tablet} {
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

  @media ${device.tablet} {
    margin: 0;
    width: 100%;
  }

  &:last-child {
    margin-right: 9rem;

    @media ${device.tablet} {
      margin-right: 0;
    }
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
    height: 10rem;
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
