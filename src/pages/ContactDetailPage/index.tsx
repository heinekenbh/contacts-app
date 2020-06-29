import React, { 
  useState, 
  useEffect
} from 'react'
import { useParams } from 'react-router-dom'
import { 
    AiOutlineEdit, 
    AiOutlineDelete
} from 'react-icons/ai'

import { 
  Container,
  Actions,
  ActionContainer,
  ActionLink,
  Action,
  ContactName,
  ContactInfo,
  Row,
  Field,
  Value,
  Birthday
} from './styles'

import PhoneTable from '../../components/PhoneTableComponent'
import EmailTable from '../../components/EmailTableComponent'
import { Loading } from '../../components/LoadingComponent'

import { IProps } from '../../interfaces/IProps'
import { IContact } from '../../interfaces/IContact'

import { ContactService } from '../../services/ContactService'
  
export default function ContactDetailPage({ onError }: IProps) {

  let { id } = useParams()

  const [ loading, setLoading ] = useState(false)
  const [ contact, setContact ] = useState<IContact | null>(null)

  useEffect(() => {
    setLoading(true)

    const getContact = async () => setContact(await new ContactService().getContact(id))

    getContact()
      .then(() => setLoading(false))
      .catch(() => onError ? onError('Erro ao exiber os detalhes do contato.') : null)
  }, [ id, onError ])

  const renderBirthday = (birthDate: Date | undefined | null) => {
    if (birthDate) {
        let dateNow = new Date();
        let dateBirth = new Date(birthDate)

        dateNow.setHours(0, 0, 0, 0)
        dateBirth.setHours(0, 0, 0, 0)

        if (dateNow.getTime() === dateBirth.getTime()) {
          return (
            <Birthday>
              <em>(É hoje, dê os parabéns!)</em>
              <span role='img' aria-label='Emoji Birthday'> 🎁🎈🎉</span>
            </Birthday>
          )
        }
    }

    return null
}

  const renderContactInfo = () => {
    if (contact) {
      return (
        <ContactInfo>
          { 
            contact.birthDate ? 
            (
              <Row>
                <Field>Aniversário:</Field>
                <Value>
                  { new Date(contact.birthDate).toLocaleDateString() }
                </Value>
                { renderBirthday(contact.birthDate) }
              </Row>
            ) :
            null
          }
          { 
            contact.organization ? 
            (
              <Row>
                <Field>Empresa:</Field>
                <Value>{ contact.organization }</Value>
              </Row>
            ) :
            null
          }
          { 
            contact.role ? 
            (
              <Row>
                <Field>Cargo:</Field>
                <Value>{ contact.role }</Value>
              </Row>
            ) :
            null
          }
          { 
            contact.notes ? 
            (
              <Row>
                <Field>Observações:</Field>
                <Value>{ contact.notes }</Value>
              </Row>
            ) :
            null
          }
          <Row>
            <Field>Data de Criação:</Field>
            <Value>{ contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : null }</Value>
          </Row>
          <Row>
            <Field>Data de Atualização:</Field>
            <Value>{ contact.updatedAt ? new Date(contact.updatedAt).toLocaleDateString() : null }</Value>
          </Row>
        </ContactInfo>
      )
    }

    return null
  }

  return loading ? ( 
    <Container>
      <Loading />
    </Container>
  ) : (
    <Container>
      <Actions>
        <ContactName>{ contact?.fullName }</ContactName>
        <ActionContainer>
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
        </ActionContainer>
      </Actions>
      { renderContactInfo() }
      <PhoneTable title='Telefones' phones={ contact?.phones } />
      <EmailTable title='E-mails' emails={ contact?.emails } />
    </Container>
  )
}
