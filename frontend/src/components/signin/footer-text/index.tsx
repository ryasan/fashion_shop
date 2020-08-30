import React from 'react'
import { Link } from 'gatsby'

import FooterText from './footer-text.styles'

interface FooterTextInterface {
    isSignin: boolean | undefined
    isSignup: boolean | undefined
    isRequestReset: boolean | undefined
    isPasswordReset: boolean | undefined
}

interface FooterContentInterface {
    text: string
    to: string
    link: string
}

const FooterTextComponent: React.StatelessComponent<FooterTextInterface> = ({
    isSignin,
    isSignup,
    isRequestReset,
    isPasswordReset
}): JSX.Element => {
    const footerContents: any[] = [
        isSignin && {
            text: 'Forgot your password?',
            to: '/signin/request-reset/',
            link: 'Reset'
        },
        isSignin && {
            text: 'Need to sign up for an account?',
            to: '/signup/',
            link: 'Signup'
        },
        isSignup && {
            text: 'Already have an account? Back to signin.',
            to: '/signin/',
            link: 'Signin'
        },
        (isRequestReset || isPasswordReset) && {
            text: 'Go Back to signin.',
            to: '/signin/',
            link: 'Signin'
        }
    ].filter(Boolean)

    return (
        <>
            {footerContents.map((c: FooterContentInterface, i: number) => (
                <FooterText key={i}>
                    {c.text}
                    <Link to={c.to} style={{ color: 'var(--red)' }}>
                        {c.link}
                    </Link>
                </FooterText>
            ))}
        </>
    )
}

export default FooterTextComponent
