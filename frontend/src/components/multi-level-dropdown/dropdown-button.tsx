import React from 'react'
import { motion } from 'framer-motion'

import { DropdownButton } from './multi-level-dropdown.styles'

const Path: React.StatelessComponent<{
    variants?: any
    transition?: any
    d?: any
}> = props => (
    <motion.path
        fill='transparent'
        strokeWidth='3'
        stroke='currentColor'
        strokeLinecap='round'
        {...props}
    />
)

const DropdownToggleComponent: React.StatelessComponent<{
    onClick: () => void
    isOpen: boolean
}> = ({ onClick, isOpen }) => (
    <DropdownButton
        onClick={onClick}
        isOpen={isOpen}
        animate={isOpen ? 'final' : 'initial'}
        initial={false}>
        <svg width='23' height='23' viewBox='0 0 23 23'>
            <Path
                variants={{
                    initial: { d: 'M 2 2.5 L 20 2.5' },
                    final: { d: 'M 3 16.5 L 17 2.5' }
                }}
            />
            <Path
                d='M 2 9.423 L 20 9.423'
                variants={{
                    initial: { opacity: 1 },
                    final: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    initial: { d: 'M 2 16.346 L 20 16.346' },
                    final: { d: 'M 3 2.5 L 17 16.346' }
                }}
            />
        </svg>
    </DropdownButton>
)

export default DropdownToggleComponent
