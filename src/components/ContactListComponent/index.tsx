import React from 'react'

import { 
    Container,
    ListTitle,
    ListContainer,
    EmptyListText
} from './styles'
import Contact from '../ContactComponent'
import { IProps } from '../../interfaces/IProps'

export default function ContactList({ title, listEmptyMsg, contacts, onError }: IProps) {

    const renderList = () => {
        if (contacts && contacts.length > 0) 
            return contacts.map(c => <Contact key={ c.id } contact={ c } onError={ onError } />)
        
        else
            return (
                <EmptyListText>
                    { listEmptyMsg || 'Você não possui nenhum contato!' }
                    <span role='img' aria-label='Emoji triste'> 😕</span>
                </EmptyListText>
            )
    }

    return (
        <Container>
            <ListTitle>{ title }</ListTitle>
            <ListContainer>
                { renderList() }
            </ListContainer>
        </Container>
    )
}