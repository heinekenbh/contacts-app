import React, { 
  useState,
  useEffect
} from 'react'

import { Section } from './styles'

import SearchInput from '../../components/SearchInput'
import ContactList from '../../components/ContactListComponent'
import { Loading } from '../../components/LoadingComponent'

import { IProps } from '../../interfaces/IProps'
import { IContact } from '../../interfaces/IContact'

import { ContactService } from '../../services/ContactService'
  
export default function ListContactsPage({ onError }: IProps) {

  const [ loading, setLoading ] = useState(false)
  const [ contacts, setContacts ] = useState<IContact[]>([])
  const [ searchText, setSearchText ] = useState('')

  useEffect(() => {
    setLoading(true)

    const getAllContacts = async () => setContacts(await new ContactService().getAllContacts())

    getAllContacts()
      .then(() => setLoading(false))
      .catch(() => onError ? onError('Erro ao listar os contatos.') : null)
  }, [ onError ])

  const handleChangeSearch = (value: string) => setSearchText(value)

  const renderList = () => {
    if (loading) {
      return (
        <Section>
          <Loading />
        </Section>
      )
    }

    if (searchText === '')
    {
      return (
        <>
          <Section>
            <ContactList 
              title='Favoritos' 
              listEmptyMsg='Você não possui nenhum favorito ainda!'
              contacts={ contacts.filter(c => c.favorite) } 
              onError={ onError }
            />
          </Section>
          <Section>
            <ContactList 
              title='Outros Contatos' 
              contacts={ contacts.filter(c => !c.favorite) } 
              onError={ onError }
            />
          </Section>
        </>
      )
    }
      
    else {
      return (
        <Section>
          <ContactList 
            title={ `Procurando por ${ searchText }` } 
            contacts={ contacts.filter(c => c.fullName?.includes(searchText)) } 
            onError={ onError }
          />
        </Section>
      )
    }
  } 
  
  return (
    <>
      <SearchInput value={ searchText } onChange={ handleChangeSearch } />
      { renderList() }
    </>
  )
}
