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
  box-shadow: var(--box-shadow);
  p {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  fieldset {
    padding: 2rem 0;
  }
`

const Header = styled.div`
  background: url(${require('../../images/logo-royal.svg')}) center 30%;
  background-size: contain;
  background-repeat: no-repeat;
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
