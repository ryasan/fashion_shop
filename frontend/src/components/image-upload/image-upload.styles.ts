import styled from 'styled-components'

import { Input, Ul } from '../../shared/elements'
import Icon from '../icons'
import Loader from '../loader'

const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

ImageUpload.Loader = styled(Loader)`
  left: initial;
  margin-top: 6rem;
  position: relative;
`

ImageUpload.Text = styled.div`
  display: flex;
  font-size: var(--font-size-lg);
  height: 100%;
  margin-bottom: 0.5rem;
  position: relative;
  width: 100%;
`

export const Upload = styled.div`
  height: 100%;
`

Upload.Inner = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`

Upload.Input = Input

Upload.UploadIcon = styled(Icon)`
  border: 0.5rem dashed var(--gray);
  color: var(--gray);
  cursor: pointer;
  height: 20rem;
  width: 100%;

  &.icon-active {
    border-color: white;
    color: white;
  }
`

export const ThumbsList = styled(Ul)``

export default ImageUpload
