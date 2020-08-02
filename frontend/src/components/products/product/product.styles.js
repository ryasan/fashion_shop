import styled from 'styled-components'

const Product = styled.div`
  box-shadow: var(--box-shadow);
  position: relative;
  width: 100%;

  > a {
    color: white;
    text-decoration: none;
  }
`

Product.Special = styled.div`
  background: var(--red);
  color: var(--off-white);
  font-size: var(--font-size-s);
  padding: 0.5rem;
  position: absolute;
  right: -2rem;
  transform: rotate(15deg) translate(1rem, -1rem);
  z-index: 3;
`

Product.Header = styled.div`
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

  img {
    border: 1rem solid var(--dark);
    bottom: -1.5rem;
    height: 40rem;
    object-fit: cover;
    position: relative;
    width: 28rem;
    z-index: 2;
  }
`

Product.Offset = styled.div`
  height: 25rem;
`

Product.Body = styled.div`
  text-align: center;

  h3 {
    align-items: center;
    display: flex;
    height: 11rem;
    justify-content: center;
    margin: 0;
    padding: 1rem;
    width: 100%;
  }

  hr {
    background: red;
    width: 2rem;
  }

  > div {
    align-items: center;
    display: flex;
    height: 5rem;
    justify-content: center;
    width: 100%;

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
    background: var(--red);
    color: white;
    height: 100%;
    width: 100%;
  }
`

export default Product
