import React from 'react'

import {
    FieldGroup,
    FieldGroupInline,
    Label,
    Input,
    InputDate,
    TextArea
} from './styles'
import { IProps } from '../../interfaces/IProps'
import FormError from '../FormErrorComponent'
import { IError } from '../../interfaces/IError'

export function FormInput({ inputConfig }: IProps) {
    if (inputConfig) {
        const { 
            fieldName, 
            label, 
            type,
            minLength,
            maxLength,
            placeholder,
            value,
            onChange, 
            errors,
            inline
        } = inputConfig

        const children = (
            <>
                <Label htmlFor={ fieldName }>{ label }:</Label>
                <Input type={ type || 'text' } 
                    id={ fieldName } 
                    name={ fieldName } 
                    placeholder={ placeholder || '' }
                    minLength={ minLength || 0 } 
                    maxLength={ maxLength || 255 } 
                    value={ value }
                    onChange={ evt => onChange(evt, fieldName) }
                />
                <FormError errors={ errors.filter((e: IError) => e.field === fieldName) } />
            </>
        )
        
        return inline ? 
            <FieldGroupInline>{ children }</FieldGroupInline> : 
            <FieldGroup>{ children }</FieldGroup>
    }
    else 
        throw new Error('O objeto de configuração textAreaConfig deve ter o formato de ITextAreaConfig.')
}

export function FormDateInput({ dateInputConfig }: IProps) {
    if (dateInputConfig) {
        const { 
            label,
            fieldName,
            placeholder,
            minDate,
            maxDate,
            selected,
            onChange,
            errors,
            inline
        } = dateInputConfig

        const children = (
            <>
                <Label htmlFor={ fieldName }>{ label }:</Label>
                <InputDate 
                    id={ fieldName } 
                    name={ fieldName }
                    showPopperArrow={ false }
                    placeholderText={ placeholder }
                    minDate={ minDate } 
                    maxDate={ maxDate } 
                    dateFormat='dd/MM/yyyy'
                    locale='pt-BR'
                    selected={ selected }
                    onChange={ date => onChange(date, fieldName) }
                    showMonthDropdown
                    showYearDropdown
                />
                <FormError errors={ errors.filter((e: IError) => e.field === fieldName) } />
            </>
        )
        
        return inline ? 
            <FieldGroupInline>{ children }</FieldGroupInline> : 
            <FieldGroup>{ children }</FieldGroup>
    }
    
    else
        throw new Error('O objeto de configuração dateInputConfig deve ter o formato de IDateInputConfig.')
}

export function FormTextArea({ textAreaConfig }: IProps) {
    if (textAreaConfig) {
        const { 
            fieldName, 
            label, 
            maxLength,
            rows,
            value,
            onChange, 
            errors,
            inline
        } = textAreaConfig

        const children = (
            <>
                <Label htmlFor={ fieldName }>{ label }:</Label>
                <TextArea 
                    id={ fieldName } 
                    name={ fieldName } 
                    maxLength={ maxLength || 255 }
                    value={ value }
                    rows={ rows || 3 }
                    onChange={ evt => onChange(evt, fieldName) }
                />
                <FormError errors={ errors.filter((e: IError) => e.field === fieldName) } />
            </>
        )

        return inline ? 
            <FieldGroupInline>{ children }</FieldGroupInline> : 
            <FieldGroup>{ children }</FieldGroup>
    }
    else 
        throw new Error('O objeto de configuração textAreaConfig deve ter o formato de ITextAreaConfig.')
}

export function FormCheckbox({ checkboxConfig }: IProps) {
    if (checkboxConfig) {
        const { 
            fieldName, 
            label, 
            checked,
            onChange, 
            errors 
        } = checkboxConfig

        return (
            <FieldGroupInline>
                <Input type='checkbox' id={ fieldName } name={ fieldName } 
                    checked={ checked }
                    onChange={ evt => onChange(evt, fieldName) }
                />
                <Label htmlFor={ fieldName } style={{ marginLeft: 5 }}>
                    { label }
                </Label>
                <FormError errors={ errors.filter((e: IError) => e.field === fieldName) } />
            </FieldGroupInline>
        )
    }
    else 
        throw new Error('O objeto de configuração checkboxConfig deve ter o formato de ICheckboxConfig.')
}