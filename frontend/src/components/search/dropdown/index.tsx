import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Dropdown, { SearchResults, ScrollBtn } from './dropdown.styles'
import { useToggleOverlayMutation } from '../../../graphql/overlay/hooks'
import { getThumbnail } from '../../../shared/utils'
import { ProductInterface } from '../../../shared/typings'

const fadeAway = () => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
})

const pulse = () => ({
    animate: { scale: [1, 1.2, 1] },
    transition: { loop: Infinity, ease: 'easeOut' }
})

const DropdownComponent = ({
    dropdownIsOpen,
    highlightedIndex,
    getItemProps,
    products
}: {
    dropdownIsOpen: boolean
    highlightedIndex: number
    products: ProductInterface[]
    getItemProps: (prop: { item: ProductInterface }) => void
}) => {
    const [toggleOverlay] = useToggleOverlayMutation()
    const [scrolledToBottom, setScrolledToBottom] = useState(false)

    const handleScroll = (e: MouseEvent): void => {
        const {
            offsetHeight,
            scrollTop,
            scrollHeight
        } = e.target as HTMLElement
        const hasReachedBottom = offsetHeight + scrollTop >= scrollHeight

        if (scrolledToBottom === false && hasReachedBottom) {
            setScrolledToBottom(true)
        }
        if (scrolledToBottom === true && !hasReachedBottom) {
            setScrolledToBottom(false)
        }
    }

    const showScrollBtnText = products.length > 7 && !scrolledToBottom

    useEffect(() => {
        if (dropdownIsOpen) toggleOverlay({ variables: { bool: true } })
        if (!dropdownIsOpen) toggleOverlay({ variables: { bool: false } })
    }, [dropdownIsOpen])

    return (
        <>
            <AnimatePresence>
                {dropdownIsOpen && (
                    <Dropdown {...fadeAway()} onScroll={handleScroll}>
                        <SearchResults>
                            {products.map((p, i) => (
                                <SearchResults.Item
                                    key={p.id}
                                    {...getItemProps({ item: p })}
                                    highlighted={i === highlightedIndex}>
                                    <SearchResults.ItemImage
                                        src={getThumbnail(p.images)}
                                    />
                                    <SearchResults.ItemTitle modifiers='font_size_lg'>
                                        {p.title}
                                    </SearchResults.ItemTitle>
                                </SearchResults.Item>
                            ))}
                        </SearchResults>
                        <AnimatePresence>
                            {showScrollBtnText && dropdownIsOpen && (
                                <ScrollBtn {...fadeAway()}>
                                    <ScrollBtn.Text {...pulse()}>
                                        Scroll down
                                    </ScrollBtn.Text>
                                    <ScrollBtn.Text {...pulse()}>
                                        &darr;
                                    </ScrollBtn.Text>
                                </ScrollBtn>
                            )}
                        </AnimatePresence>
                    </Dropdown>
                )}
            </AnimatePresence>
        </>
    )
}

DropdownComponent.defaultProps = {
    products: []
}

export default DropdownComponent
