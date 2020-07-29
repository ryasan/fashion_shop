import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Toast from './toast.styles'
import Icon from '../icons'

toast.configure()

const options = {
  draggable: false,
  closeButton: false,
  hideProgressBar: true,
  className: 'toast-container',
  toastClassName: 'toast',
  autoClose: 5000
}

const CloseButton = ({ closeToast }) => {
  return <Icon onClick={closeToast} name='close' className='close-button' />
}

export const ToastComponent = () => {
  return (
    <Toast>
      <ToastContainer {...options} closeButton={<CloseButton />} />
    </Toast>
  )
}

export { toast }
export default ToastComponent
