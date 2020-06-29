import React from 'react'
import { 
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineEdit, 
    AiOutlineDelete
} from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

import {
    ContactContainer,
    ContactName,
    ContactActions,
    ActionLink,
    Action
} from './styles'
import { IProps } from '../../interfaces/IProps'
import { IContact } from '../../interfaces/IContact'
import { ContactService } from '../../services/ContactService'

export default function Contact({ contact, onError }: IProps) {

    const history = useHistory()

    const handleFavorite = (contact : IContact | undefined) => {
        if (contact) {
            contact.favorite = !contact.favorite
            
            new ContactService().editContact(contact)
                .then(r => {
                    if (!r && onError)
                        onError(`Falha ao ${ contact.favorite ? 'favoritar' : 'desfavoritar' } contato ${ contact.firstName }.`)

                    history.push('/')
                })
        }
    }

    const renderButtonFav = () => (
        contact?.favorite ? <AiFillHeart size={ 20 } /> : <AiOutlineHeart size={ 20 } />
    )

    const renderBirthday = (birthDate: Date | undefined | null) => {
        if (birthDate) {
            let dateNow = new Date();
            let dateBirth = new Date(birthDate)
    
            dateNow.setHours(0, 0, 0, 0)
            dateBirth.setHours(0, 0, 0, 0)
    
            if (dateNow.getTime() === dateBirth.getTime())
                return <span role='img' aria-label='Emoji Birthday'> 🎁🎈🎉</span> 
        }

        return null
    }

    return (
        <ContactContainer>
            <ActionLink to={ `/contacts/detail/${ contact?.id }` }>
                <ContactName>
                    { contact?.fullName }
                    { renderBirthday(contact?.birthDate) }   
                </ContactName>
            </ActionLink>
            <ContactActions>
                <Action onClick={() => handleFavorite(contact) }>
                    { renderButtonFav() }
                </Action>
                <ActionLink to={ `/contacts/edit/${ contact?.id }` }>
                    <Action>
                        <AiOutlineEdit size={ 20 } />
                    </Action>
                </ActionLink>
                <ActionLink to={ `/contacts/delete/${ contact?.id }` }>
                    <Action>
                        <AiOutlineDelete size={ 20 } />
                    </Action>
                </ActionLink>
            </ContactActions>
        </ContactContainer>
    )
}