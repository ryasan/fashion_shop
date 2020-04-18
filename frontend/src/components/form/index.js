import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  fieldset {
    border: none;
    padding: 2rem;
    width: 100%;
  }
  input {
    width: 100%;
    height: 100%;
    border: 1px solid var(--red);
    border-radius: 3px;
    font-size: var(--regular-font);
    cursor: pointer;
    &:not([type='submit']) {
      padding: 1rem 0 1rem 5rem;
      outline-color: var(--red);
    }
    &[type='submit'] {
      background: var(--red);
      color: white;
    }
  }
`

export default Form
