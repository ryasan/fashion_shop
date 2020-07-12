import styled from 'styled-components'

const Product = styled.div`
  width: 100%;
  box-shadow: var(--box-shadow);
  position: relative;
  > a {
    text-decoration: none;
    color: white;
  }
`

Product.Special = styled.div`
  position: absolute;
  padding: 0.5rem;
  right: -2rem;
  transform: rotate(15deg) translate(1rem, -1rem);
  z-index: 3;
  background: var(--red);
  font-size: var(--font-size-s);
  color: var(--off-white);
`

Product.Header = styled.div`
  height: 15.5rem;
  background: var(--red);
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    right: 0;
    width: 50%;
    height: 100%;
    background: var(--dark);
  }
  img {
    width: 28rem;
    height: 40rem;
    object-fit: cover;
    position: relative;
    bottom: -1.5rem;
    border: 1rem solid var(--dark);
    z-index: 2;
  }
`

Product.Offset = styled.div`
  height: 25rem;
`

Product.Body = styled.div`
  text-align: center;
  h3 {
    width: 100%;
    height: 11rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  hr {
    background: red;
    width: 2rem;
  }
  > div {
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    b {
      font-size: 2.5rem;
    }
    small {
      font-size: 1.5rem;
    }
  }
`

Product.Footer = styled.div`
  height: 5rem;
  button {
    height: 100%;
    width: 100%;
    background: var(--red);
    color: white;
  }
`

export default Product
