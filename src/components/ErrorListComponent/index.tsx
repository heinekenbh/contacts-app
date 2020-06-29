import React from 'react'

import { Container } from './styles'
import Error from '../ErrorComponent'
import { IProps } from '../../interfaces/IProps'

export default function ErrorList({ errors, onDismissError }: IProps) {

    const renderErrors = () => errors?.map(e => (
        <Error key={ e.id } error={ e } onDismissError={ onDismissError } />
    ))

    return (
        <Container>
            { renderErrors() }
        </Container>
    )
}