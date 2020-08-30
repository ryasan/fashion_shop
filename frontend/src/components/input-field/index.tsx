import React from 'react'

import Field from './input-field.styles'

interface InputFieldInterface {
    onChange: (args: any) => void
    disabled: boolean
    theme: string
    className: string
    placeholder: string
    type: string
    name: string
    value: string
    icon: string
}

const InputFieldComponent = ({
    onChange,
    disabled,
    theme,
    className,
    placeholder,
    type,
    name,
    value,
    icon
}: InputFieldInterface) => (
    <Field theme={theme} className={className}>
        <Field.Icon name={icon} theme={theme} />
        <Field.Input
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            disabled={disabled}
            onChange={onChange}
            theme={theme}
        />
    </Field>
)

export default InputFieldComponent
