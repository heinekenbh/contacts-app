import React, { 
    useState,
    useEffect
} from 'react'
import { 
    useParams,
    useHistory
} from 'react-router-dom'

import { 
    Section,
    Question,
    ActionContainer,
    Button
} from './styles'

import { Loading } from '../../components/LoadingComponent'

import { IProps } from '../../interfaces/IProps'
import { IContact } from '../../interfaces/IContact'

import { ContactService } from '../../services/ContactService'

export default function DelContactsPage({ onError }: IProps) {
    
    const history = useHistory()

    let { id } = useParams()

    const [ loading, setLoading ] = useState(false)
    const [ contact, setContact ] = useState<IContact | null>(null)
  
    useEffect(() => {
        setLoading(true)

        const getContact = async () => setContact(await new ContactService().getContact(id))
  
        getContact()
            .then(() => setLoading(false))
            .catch(() => onError ? onError('Erro ao exiber informações do contato.') : null)
    }, [ id, onError ])

    const handleDel = () => {
        if (contact) {
            new ContactService().delContact(contact)
                .then(r => {
                    if (!r && onError)
                        onError(`Falha ao apagar contato ${ contact.firstName }.`)

                    history.push('/')
                })
        }
    }

    return loading ? ( 
        <Section>
          <Loading />
        </Section>
      ) : (
        <Section>
            <Question>Deseja realmente excluir o contato { contact?.fullName }?</Question>
            <ActionContainer>
                <Button onClick={ () => history.goBack() }>Não</Button>
                <Button onClick={ () => handleDel() }>Sim</Button>
            </ActionContainer>
        </Section>
    )
}