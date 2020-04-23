import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import Icon from '../icons'
import { Small } from '../elements'
import { device } from '../../utils'

const ToastStyles = css`
  .toast-container {
    width: auto;
  }
  .toast {
    background: var(--dark);
    font-size: var(--regular-font);
    color: var(--off-white);
    overflow: initial;
    position: relative;
    padding: 0 3rem;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.6));
    &:after {
      content: '';
      position: absolute;
      bottom: -2rem;
      right: 0;
      width: 0;
      height: 0;
      border: 2rem solid transparent;
      border-top-color: var(--dark);
      border-bottom: 0;
      border-right: 0;
    }
  }
`

const Header = styled.header`
  background: var(--dark);
  display: flex;
  justify-content: space-between;
  height: 7rem;
  ${ToastStyles};
`

Header.Nav = styled.ul`
  display: flex;
  margin-right: 6rem;
  @media ${device.mobileL} {
    margin-right: 5rem;
  }
`

Header.NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--off-white);
  width: 10rem;
  margin-right: 1rem;
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
  @media ${device.mobileL} {
    margin-right: 1rem;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--regular-font);
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;
  }
`

Header.SignoutBtn = styled.a``

Header.Link = Link
Header.Text = Small

Header.LogoContainer = styled(Link)`
  width: 10rem;
  display: inline;
  margin-left: 3rem;
  display: flex;
  align-items: center;
`

Header.Logo = styled(Icon)`
  width: 100%;
  height: 100%;
`

Header.NavIcon = styled(Icon)`
  fill: var(--off-white);
  transition: fill 0.2s;
`

export default Header
