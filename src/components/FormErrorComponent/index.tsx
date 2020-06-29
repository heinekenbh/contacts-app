import React from 'react'
import { AiFillWarning } from 'react-icons/ai'

import { 
    ErrorContainer,
    ErrorText
} from './styles'
import { IProps } from '../../interfaces/IProps'

export default function FormError({ errors }: IProps) {

    const renderErrorMsg = () => errors && errors.length > 0 ? (
        <>
            <AiFillWarning size={ 20 } />
            <ErrorText>{ errors[0].msg }</ErrorText>
        </>
    ) : null

    return  (
        <ErrorContainer>
            { renderErrorMsg() }
        </ErrorContainer>
    )
}