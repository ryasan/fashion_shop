import styled from 'styled-components'

import { Image, H3, Hr, B, Small, Button } from '../../../shared/elements'
import redTexture from '../../../static/red-texture.png'

const Product = styled.div`
  background: var(--dark);
  border-radius: 0.2rem;
  box-shadow: var(--box-shadow-all-around);
  position: relative;
  width: 100%;

  > a {
    color: white;
    text-decoration: none;
  }

  * {
    font-weight: 400;
  }
`

export const Promo = styled.div`
  background: var(--red);
  color: var(--off-white);
  font-size: var(--font-size-m);
  padding: 0.5rem;
  position: absolute;
  right: -2rem;
  transform: rotate(15deg) translate(1rem, -1rem);
  z-index: 3;
`

export const Header = styled.div`
  background-size: cover;
  display: flex;
  height: 15.5rem;
  justify-content: center;
  position: relative;
`

Header.Image = styled(Image)`
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
  font-weight: 400;
  height: 11rem;
  justify-content: center;
  margin: 0;
  padding: 1rem;
  width: 100%;
`

Body.Divider = styled(Hr)`
  background: var(--red);
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
  background: url(${redTexture}) center center;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  color: white;
  height: 100%;
  position: relative;
  width: 100%;

  &::before {
    background: var(--red);
    border-radius: 1rem;
    content: 'Purchase';
    font-size: var(--font-size-xlg);
    font-weight: 500;
    left: 50%;
    padding: 0.5rem 1rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export default Product
