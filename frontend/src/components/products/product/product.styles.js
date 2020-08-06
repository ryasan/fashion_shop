import styled from 'styled-components'

import { Image, H3, Hr, B, Small, Button } from '../../../elements'

const Product = styled.div`
  box-shadow: var(--box-shadow);
  position: relative;
  width: 100%;

  > a {
    color: white;
    text-decoration: none;
  }
`

export const Promo = styled.div`
  background: var(--red);
  color: var(--off-white);
  font-size: var(--font-size-s);
  padding: 0.5rem;
  position: absolute;
  right: -2rem;
  transform: rotate(15deg) translate(1rem, -1rem);
  z-index: 3;
`

export const Header = styled.div`
  background: var(--red);
  background-size: cover;
  display: flex;
  height: 15.5rem;
  justify-content: center;
  position: relative;

  &::after {
    background: var(--dark);
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    width: 50%;
    z-index: 1;
  }
`

Header.Image = styled(Image)`
  border: 1rem solid var(--dark);
  bottom: -1.5rem;
  height: 40rem;
  object-fit: cover;
  position: relative;
  width: 28rem;
  z-index: 2;
`

Product.Offset = styled.div`
  height: 25rem;
`

export const Body = styled.div`
  text-align: center;
`

Body.Title = styled(H3)`
  align-items: center;
  display: flex;
  height: 11rem;
  justify-content: center;
  margin: 0;
  padding: 1rem;
  width: 100%;
`

Body.Divider = styled(Hr)`
  background: red;
  width: 2rem;
`

Body.Price = styled.div`
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: center;
  width: 100%;
`

Body.Dollars = styled(B)`
  font-size: 2.5rem;
`

Body.Cents = styled(Small)`
  font-size: 1.5rem;
`

Product.Footer = styled.div`
  height: 5rem;
`

export const Footer = styled.div`
  height: 5rem;
`

Footer.Button = styled(Button)`
  background: var(--red);
  color: white;
  height: 100%;
  width: 100%;
`

export default Product
