import React from 'react'

import { 
    Container,
    ErrorText
} from './styles'

export default function NotFound() {
    return (
        <Container>
            <span role='img' aria-label='Emoji with Head-Bandage' style={{ fontSize: 100 }}>🤕</span>
            <ErrorText>A página solicitada não foi encontrada!</ErrorText>
        </Container>
    )
}