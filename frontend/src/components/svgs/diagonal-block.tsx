import React from 'react'

const DiagonalBlockSvg = (props: React.ComponentProps<any>) => (
    <svg
        {...props}
        xmlns='http://www.w3.org/2000/Svg'
        viewBox='0 0 100 10'
        preserveAspectRatio='none'>
        <polygon points='100 0 100 10 0 0' />
    </svg>
)

export default DiagonalBlockSvg
