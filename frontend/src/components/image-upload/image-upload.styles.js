import styled from 'styled-components'

import { Input } from '../../shared/elements'
import Icon from '../icons'

const ImageUpload = styled.div``

ImageUpload.Text = styled.div`
  font-size: var(--font-size-m);
  margin: 1rem 0;
`

export const Upload = styled.div`
  cursor: pointer;
`

Upload.Input = Input

Upload.UploadIcon = styled(Icon)`
  border: 0.5rem dashed var(--gray);
  color: var(--gray);
  height: 10rem;
  width: 100%;

  &.icon-active {
    border-color: white;
    color: white;
  }
`

export default ImageUpload
