import styled from 'styled-components'

import { Ul, Li, Image } from '../../../shared/elements'

const Thumbs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 10rem;
  position: relative;
  width: 100%;
`

Thumbs.Text = styled.div`
  font-size: var(--font-size-lg);
  margin-bottom: 1rem;
`

Thumbs.List = styled(Ul)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 0;
  width: 100%;
`

export const Thumb = styled(Li)`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  &:hover {
    &::before {
      align-items: center;
      color: var(--red);
      content: 'Delete';
      display: flex;
      font-size: var(--font-size-m);
      font-weight: 600;
      height: 100%;
      justify-content: center;
      position: absolute;
      width: 100%;
    }
  }
`

Thumb.Image = styled(Image)`
  height: 5rem;
  object-fit: contain;
`

export default Thumbs
