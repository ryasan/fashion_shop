import React from 'react'
import { camelCase, capitalCase } from 'change-case'

import Form from './product-form.styles'
import AvailableSizesTable from './available-sizes-table'
import CategorySelect from './category-select'
import ExtraFlagsTable from './extra-flags-table'
import { SHIRT, LONG_SLEEVE, HOODIE } from '../../../types/category-types'

interface ProductFormInterface {
    loading: Required<boolean>
    leftComponentAddon?: Required<JSX.Element>
    rightComponentAddon?: Required<JSX.Element>
    fullWidthAddon?: Required<JSX.Element>
    useState: React.SetStateAction<any>
}

interface InitialStateInterface {
    isFreeShipping: boolean
    isFeatured: boolean
    isAvailable: boolean
    price: number
    sku: string
    style: string
    title: string
    description: string
    category: string
    availableSizes: []
    images: []
}

const ProductFormComponent: React.FC<ProductFormInterface> = ({
    loading,
    leftComponentAddon,
    rightComponentAddon,
    fullWidthAddon,
    useState
}) => {
    const [state, setState] = useState

    const handleInputChange = (e: React.FormEvent) => {
        e.persist()
        const { name, value, type } = e.target as HTMLInputElement
        setState((prevState: InitialStateInterface) => ({
            ...prevState,
            [camelCase(name)]:
                type === 'number' ? value.replace(/^0+/, '') : value
        }))
    }

    const handleFlagChange = (e: any) => {
        e.persist()
        const checkbox = e.target as HTMLInputElement
        setState((prevState: InitialStateInterface) => ({
            ...prevState,
            [camelCase((e.target as HTMLInputElement).value)]: checkbox.checked
        }))
    }

    const handleCategoryChange = (category: string) => {
        setState((prevState: InitialStateInterface) => ({
            ...prevState,
            category
        }))
    }

    const handleSizeChange = (e: React.FormEvent) => {
        const checkbox = e.target as HTMLInputElement
        const checkboxesPlus1 = [...state.availableSizes, checkbox.value]
        const checkboxesMinus1 = state.availableSizes.filter(
            (p: string) => p !== checkbox.value
        )

        setState((prevState: InitialStateInterface) => ({
            ...prevState,
            availableSizes: checkbox.checked
                ? checkboxesPlus1
                : checkboxesMinus1
        }))
    }

    const fields = [
        {
            name: 'title',
            type: 'text',
            value: state.title,
            icon: 'title'
        },
        {
            name: 'description',
            type: 'text',
            value: state.description,
            icon: 'document'
        },
        {
            name: 'price',
            type: 'number',
            value: state.price,
            icon: 'money'
        },
        {
            name: 'style',
            type: 'text',
            value: state.style,
            icon: 'shopping-bag'
        }
    ]

    const flagMap = {
        isAvailable: state.isAvailable,
        isFreeShipping: state.isFreeShipping,
        isFeatured: state.isFeatured
    }

    return (
        <Form>
            <Form.LeftColumn>
                <Form.Fieldset>
                    <Form.FieldsetInner>
                        {fields.map((field, i) => (
                            <Form.InputField
                                key={i}
                                placeholder={capitalCase(field.name)}
                                type={field.type}
                                name={field.name}
                                value={field.value}
                                disabled={loading}
                                onChange={handleInputChange}
                                icon={field.icon}
                                theme='dark'
                            />
                        ))}
                    </Form.FieldsetInner>
                </Form.Fieldset>
                {leftComponentAddon && leftComponentAddon}
            </Form.LeftColumn>
            <Form.RightColumn>
                <Form.MultipleChoice>
                    <CategorySelect
                        onChange={handleCategoryChange}
                        selected={state.category}
                    />
                    {[SHIRT, HOODIE, LONG_SLEEVE].includes(state.category) && (
                        <AvailableSizesTable
                            availableSizes={state.availableSizes}
                            onChange={handleSizeChange}
                        />
                    )}
                    <ExtraFlagsTable
                        flagMap={flagMap}
                        onChange={handleFlagChange}
                    />
                </Form.MultipleChoice>
                {rightComponentAddon && rightComponentAddon}
            </Form.RightColumn>
            <Form.FullWidth>{fullWidthAddon && fullWidthAddon}</Form.FullWidth>
        </Form>
    )
}

export default ProductFormComponent
