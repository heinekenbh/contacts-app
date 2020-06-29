import React from 'react'
import { 
    AiFillWarning,
    AiOutlineClose
} from 'react-icons/ai'

import { 
    ErrorContainer,
    ErrorText,
    DismissButton
} from './styles'
import { IProps } from '../../interfaces/IProps'

export default function Error({ error, onDismissError }: IProps) {

    return (
        <ErrorContainer>
            <AiFillWarning size={ 30 } />
            <ErrorText>{ error?.msg }</ErrorText>
            <DismissButton onClick={ () => onDismissError ? onDismissError(error) : null }>
                <AiOutlineClose size={ 15 } />
            </DismissButton>
        </ErrorContainer>
    )
}