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
  font-size: var(--font-size-m);
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
  display: flex;
  height: 100%;
  margin-bottom: 1rem;
  overflow: hidden;

  &:not(:first-child) {
    margin-left: 1rem;
  }
`

Thumb.Image = styled(Image)`
  height: 5rem;
  object-fit: contain;
`

export default Thumbs
