import styled from 'styled-components'

const Signin = styled.div`
  align-items: center;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  left: 50%;
  margin: 5% 0;
  padding: 3em;
  position: relative;
  transform: translateX(-50%);
  width: 40rem;

  p {
    align-items: center;
    display: flex;
    height: 3rem;
    justify-content: center;
  }

  fieldset {
    padding: 2rem 0;
  }
`

const Header = styled.div`
  background: url(${require('../../images/logo-royal.svg')}) center 30%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 12rem;
  width: 60%;
`

const Fieldset = styled.fieldset`
  span {
    display: block;
    margin: 2rem 0;
  }
`

export { Fieldset, Header }
export default Signin
