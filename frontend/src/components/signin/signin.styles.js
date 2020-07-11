import styled from 'styled-components'

const Signin = styled.div`
  width: 40rem;
  position: relative;
  margin: 5% 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.6);
  small {
    font-size: var(--font-size-s);
    width: 100%;
    text-align: center;
    a {
      cursor: pointer;
    }
  }
  p {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Header = styled.div`
  background: url(${require('../../images/logo-royal.svg')}) center 30%;
  background-size: contain;
  background-repeat: no-repeat;
  height: 25rem;
  width: 60%;
`

const Fieldset = styled.fieldset`
  span {
    display: block;
    margin: 2rem 0;
  }
`

const Field = styled.div`
  height: 4rem;
  position: relative;
  margin-bottom: 2rem;
  svg {
    height: 100%;
    width: 3.5rem;
    background: var(--red);
    fill: white;
    position: absolute;
    top: 50%;
    padding: 0.7rem;
    transform: translateY(-50%);
    border-radius: 3px;
  }
`

export { Fieldset, Field, Header }
export default Signin
