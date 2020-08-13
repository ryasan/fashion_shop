import styled from 'styled-components'

import {
  H3,
  Image as Img,
  Span,
  Button,
  Div,
  Ul,
  Li
} from '../../../shared/elements'
import { btns } from '../../../shared/styles'

const ProductDetails = styled(Div)`
  max-width: var(--max-width);
  padding: 0 4rem;
  width: 100%;
`

ProductDetails.Title = styled(H3)``

ProductDetails.Image = styled.div`
  display: flex;
  width: 55rem;
`

export const Content = styled.div`
  display: flex;
`

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  width: 55rem;
`

Image.MainImage = styled(Img)`
  object-fit: contain;
  width: 100%;
`

Image.ImageList = styled(Ul)`
  display: flex;
  margin: 2rem 0;
  position: relative;
`

Image.Item = styled(Li)`
  cursor: pointer;
  height: 7rem;
  overflow: hidden;
  position: relative;
  width: 7rem;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  &:hover {
    filter: grayscale(1);

    &::before {
      align-items: center;
      color: white;
      content: 'View';
      display: flex;
      font-size: 1.2rem;
      font-weight: 500;
      height: 100%;
      justify-content: center;
      left: 0;
      position: absolute;
      top: 0;
      transition: all 0.3s;
      width: 100%;
      z-index: 1;
    }

    img {
      transform: scale(1.1);
    }
  }
`

Image.TinyImage = styled(Img)`
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  width: 100%;
  z-index: 0;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: 25rem;
  justify-content: space-between;
  margin-left: 5rem;
  min-width: 20rem;

  select {
    width: 10rem;
  }
`

Details.Text = styled(Span)``

Details.AddToCartBtn = styled(Button)`
  ${btns.red};
`

export default ProductDetails
