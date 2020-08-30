import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { validate } from 'email-validator'

import Footer, { Links, Subscribe, SocialMedia } from './footer.styles'
import Icon from '../../icons'
import ErrorBoundary from '../../error-boundary/index'
import { useSendContactMessageMutation } from '../../../graphql/user/hooks'
import { toast } from '../../toast'

type ControlledType = HTMLInputElement | HTMLTextAreaElement

const iconParentVariants = () => ({
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
})

const iconChildrenVariants = () => ({
    hidden: { opacity: 0 },
    show: { opacity: 1 }
})

const socials = ['facebook-filled', 'instagram-filled', 'twitter-filled']

const SocialMediaComponent = () => {
    const [yEnd, setYEnd] = useState(false)

    const yPosition = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setYEnd(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', yPosition)
        return () => window.removeEventListener('scroll', yPosition)
    }, [])

    return (
        <AnimatePresence>
            {yEnd && (
                <SocialMedia
                    variants={iconParentVariants()}
                    initial='hidden'
                    animate={yEnd ? 'show' : 'hidden'}>
                    {socials.map((social, i) => (
                        <SocialMedia.MotionIcon
                            key={i}
                            variants={iconChildrenVariants()}>
                            <Icon name={social} />
                        </SocialMedia.MotionIcon>
                    ))}
                </SocialMedia>
            )}
        </AnimatePresence>
    )
}

const links = ['About us', 'Events', 'Privacy', 'Press']

const HomeFooterComponent = () => {
    const [sendContactMessage, { data, error, loading }] = useSendContactMessageMutation() // prettier-ignore
    const [{ name, email, message }, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleOnChange = (e: React.FormEvent) => {
        e.persist()
        const target = e.target as ControlledType

        setInputs(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = () => {
        if (!validate(email)) {
            toast('Please enter a valid email address.')
        } else if (!message) {
            toast('Message is empty!')
        } else if (!name) {
            toast("We don't know what to call you!")
        } else {
            sendContactMessage({ variables: { name, email, message } })
        }
    }

    useEffect(() => {
        if (data) toast(data.sendContactMessage.message)
    }, [data])

    return (
        <Footer>
            <Links>
                <Links.Title>Quick links</Links.Title>
                <Links.List>
                    {links.map((link, i) => (
                        <Links.ListItem key={i}>
                            <Links.Link>{link}</Links.Link>
                        </Links.ListItem>
                    ))}
                </Links.List>
            </Links>
            <ErrorBoundary error={error}>
                <Subscribe>
                    <Subscribe.Title>Get in touch with us here</Subscribe.Title>
                    <Subscribe.TextInput
                        value={name}
                        disabled={loading}
                        type='text'
                        name='name'
                        placeholder='You name'
                        onChange={handleOnChange}
                    />
                    <Subscribe.TextInput
                        value={email}
                        disabled={loading}
                        type='text'
                        name='email'
                        placeholder='Email address'
                        onChange={handleOnChange}
                    />
                    <Subscribe.Textarea
                        rows='1'
                        value={message}
                        disabled={loading}
                        type='text'
                        name='message'
                        placeholder='Message...'
                        onChange={handleOnChange}
                    />
                    <Subscribe.SubmitBtn
                        disabled={loading}
                        onClick={handleSubmit}>
                        Send{loading ? 'ing' : ''} Message{loading ? '...' : ''}
                    </Subscribe.SubmitBtn>
                </Subscribe>
            </ErrorBoundary>
            <SocialMediaComponent />
        </Footer>
    )
}

export default HomeFooterComponent
