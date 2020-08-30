import React from 'react'

const AccountIcon = props => {
    switch (props.name) {
        case 'account-box':
            return (
                <svg
                    {...props}
                    xmlns='http://www.w3.org/2000/svg'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'>
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path
                        fill='currentColor'
                        d='M19 5v14H5V5h14m0-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 10H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58V18zm-9.69-2h7.38c-.69-.56-2.38-1.12-3.69-1.12s-3.01.56-3.69 1.12z'
                    />
                </svg>
            )

        case 'account-circle':
        default:
            return (
                <svg
                    {...props}
                    xmlns='http://www.w3.org/2000/svg'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'>
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path
                        fill='currentColor'
                        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z'
                    />
                </svg>
            )
    }
}

export default AccountIcon
