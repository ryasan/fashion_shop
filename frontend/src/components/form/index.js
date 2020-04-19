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
    border-radius: 3px;
    border: 1px solid var(--red);
    font-size: var(--regular-font);
    &:not([type='submit']) {
      padding: 1rem 0 1rem 5rem;
      outline-color: var(--red);
    }
    &[type='submit'] {
      color: white;
      background: var(--red);
      outline-color: var(--red);
      &:hover {
        background: transparent;
        color: var(--red);
      }
    }
  }
`

export default Form
