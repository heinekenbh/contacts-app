import React, { 
    useState, 
    useEffect
} from 'react'
import { 
    useParams, 
    useHistory
} from 'react-router-dom'
import { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'

import { 
    Container,
    Title,
    Form,
    Row,
    TableContainer,
    ButtonAdd,
    ButtonSubmit
} from './styles'

import { 
    FormInput,
    FormDateInput,
    FormTextArea,
    FormCheckbox
} from '../../components/FormInput'
import PhoneTable from '../../components/PhoneTableComponent'
import EmailTable from '../../components/EmailTableComponent'
import { Loading } from '../../components/LoadingComponent'

import { IProps } from '../../interfaces/IProps'
import { IError } from '../../interfaces/IError'
import { IPhone } from '../../interfaces/IPhone'
import { IEmail } from '../../interfaces/IEmail'

import { ContactService } from '../../services/ContactService'
import { PhoneService } from '../../services/PhoneService'
import { EmailService } from '../../services/EmailService'

export default function AddEditContactsPage({ onError }: IProps) {

    let { id } = useParams()

    const history = useHistory()

    const [ loading, setLoading ] = useState(false)
    const [ errors, setErrors ] = useState<IError[]>([])

    const calcMinDate = (): Date => new Date(new Date().getFullYear() - 100, 0, 1)

    const calcMaxDate = (): Date => new Date(new Date().getFullYear() - 5, 11, 31)

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ nickName, setNickName ] = useState('')
    const [ birthDate, setBirthDate ] = useState<Date | null>(calcMaxDate())
    const [ organization, setOrganization ] = useState('')
    const [ role, setRole ] = useState('')
    const [ notes, setNotes ] = useState('')
    const [ favorite, setFavorite ] = useState(false)
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')

    const [ phones, setPhones ] = useState<IPhone[]>([])
    const [ emails, setEmails ] = useState<IEmail[]>([])
  
    useEffect(() => {
        setLoading(true)
        
        async function getContact() {
            if (id) {
                const { 
                    firstName,
                    lastName,
                    nickName,
                    birthDate,
                    organization,
                    role,
                    notes,
                    favorite,
                    phones,
                    emails
                 } = await new ContactService().getContact(id)
        
                setFirstName(firstName)
                setLastName(lastName)
                setNickName(nickName || '')
                setBirthDate(birthDate ? new Date(birthDate) : null)
                setOrganization(organization || '')
                setRole(role || '')
                setNotes(notes || '')
                setFavorite(favorite)
                setPhones(phones || [])
                setEmails(emails || [])
            }
        }
  
        getContact()
            .then(() => setLoading(false))
            .catch(() => onError ? onError('Erro ao exibir informações do contato.') : null)
    }, [ id, onError ])
    
    registerLocale('pt-BR', ptBR)

    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault()

        if (phones && phones.length < 1 && onError) {
            setErrors(err => [ ...err.filter(e => e.field !== 'phoneNumber'), { 
                id: err.length,
                msg: 'Insira pelo menos um telefone para criar o contato.',
                field: 'phoneNumber' 
            } ])
            return
        }

        if (emails && emails.length < 1 && onError) {
            setErrors(err => [ ...err.filter(e => e.field !== 'emailAddress'), { 
                id: err.length,
                msg: 'Insira pelo menos um e-mail para criar o contato',
                field: 'emailAddress' 
            } ])
            return
        }

        if (!id) {
            new ContactService().addContact({
                id: 0,
                firstName,
                lastName,
                nickName,
                birthDate,
                organization,
                role,
                notes,
                favorite,
                phones,
                emails
            }).then(r => {
                if (!r && onError)
                    onError(`Falha ao adiconar contato ${ firstName }.`)

                history.push('/')
            })
        }
        else {
            new ContactService().editContact({
                id,
                firstName,
                lastName,
                nickName,
                birthDate,
                organization,
                role,
                notes,
                favorite,
                phones,
                emails
            }).then(r => {
                if (!r && onError)
                    onError(`Falha ao editar contato ${ firstName }.`)

                history.push('/')
            })
        }
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        switch (field) {
            case 'firstName':
                setFirstName(evt.target.value)
                break
            case 'lastName':
                setLastName(evt.target.value)
                break
            case 'nickName':
                setNickName(evt.target.value)
                break
            case 'organization':
                setOrganization(evt.target.value)
                break
            case 'role':
                setRole(evt.target.value)
                break
            case 'notes':
                setNotes(evt.target.value)
                break
            case 'phoneNumber':
                setPhone(evt.target.value)
                break
            case 'emailAddress':
                setEmail(evt.target.value)
                break
        }

        setErrors(err => err.filter(e => e.field !== field))
    }

    const handleChangeCheckbox = (evt: React.ChangeEvent<HTMLInputElement>, field: string) => {
        switch (field) {
            case 'favorite':
                setFavorite(evt.target.checked)
                break
        }
    }

    const handleChangeDate = (date: Date, field: string) => {
        switch (field) {
            case 'birthDate':
                setBirthDate(date)
                break
        }
    }

    const handleAddPhone = async () => {
        setErrors(errors.filter(err => err.field !== 'phoneNumber'))
        
        if (phone.match(/\(\d{2}\)\s\d{4,5}-\d{4}/)) {
            const aux = phones.filter(p => p.phoneNumber === phone)

            let result = false

            await new PhoneService()
                .phoneExists(phone)
                .then(r => result = r)
                .catch(() => onError ? onError('Erro ao consultar.') : null)

            if (aux.length === 0 && !result) {
                setPhones(p => [ ...p, { phoneNumber: phone } ])
                setPhone('')
            }

            else {
                setErrors(err => [ ...err, { 
                    id: err.length,
                    msg: 'Telefone já existente.',
                    field: 'phoneNumber' 
                } ])
            }
        }
        else {
            setErrors(err => [ ...err, { 
                id: err.length,
                msg: 'Formato de telefone incorreto',
                field: 'phoneNumber' 
            } ])
        }
    }

    const handleAddEmail = async () => {
        setErrors(errors.filter(err => err.field !== 'emailAddress'))

        if (email.match(/^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/)) {
            const aux = emails.filter(e => e.emailAddress === email)

            let result = false

            await new EmailService()
                .emailExists(email)
                .then(r => result = r)
                .catch(() => onError ? onError('Erro ao consultar.') : null)

            if (aux.length === 0 && !result) {
                setEmails(e => [ ...e, { emailAddress: email } ])
                setEmail('')
            }

            else {
                setErrors(err => [ ...err, { 
                    id: err.length,
                    msg: 'E-mail existente nesta lista.',
                    field: 'emailAddress' 
                } ])
            }
        }
        else {
            setErrors(err => [ ...err, { 
                id: err.length,
                msg: 'Formato de e-mail incorreto',
                field: 'emailAddress' 
            } ])
        }
    }

    const handleRemovePhone = (phoneNumber: string) => setPhones(phones.filter(p => p.phoneNumber !== phoneNumber))

    const handleRemoveEmail = (emailAddress: string) => setEmails(emails.filter(e => e.emailAddress !== emailAddress))

    return loading ? ( 
        <Container>
          <Loading />
        </Container>
      ) : (
        <Container>
            <Title>{ id ? 'Editar Contato' : 'Adicionar Contato' }</Title>
            <Form onSubmit={ evt => handleSubmit(evt) }>
                <Row>
                    <FormInput inputConfig={{
                        label: 'Primeiro Nome',
                        fieldName: 'firstName',
                        placeholder: 'Informe um nome.',
                        maxLength: 50,
                        minLength: 1,
                        value: firstName,
                        onChange: handleChange,
                        errors
                    }} />
                    <FormInput inputConfig={{
                        label: 'Sobrenome',
                        fieldName: 'lastName',
                        placeholder: 'Informe um sobrenome.',
                        maxLength: 50,
                        minLength: 1,
                        value: lastName,
                        onChange: handleChange,
                        errors
                    }} />
                    <FormInput inputConfig={{
                        label: 'Apelido',
                        fieldName: 'nickName',
                        placeholder: 'Informe um apelido.',
                        maxLength: 50,
                        value: nickName,
                        onChange: handleChange,
                        errors
                    }} />
                </Row>
                <Row>
                    <FormDateInput dateInputConfig={{
                        label: 'Data de Nascimento',
                        fieldName: 'birthDate',
                        placeholder: 'Informe uma data de nascimento.',
                        minDate: calcMinDate(),
                        maxDate: calcMaxDate(),
                        selected: birthDate,
                        onChange: handleChangeDate,
                        errors
                    }} />
                </Row>
                <Row>
                    <FormInput inputConfig={{
                        label: 'Empresa',
                        fieldName: 'organization',
                        placeholder: 'Informe uma empresa.',
                        maxLength: 100,
                        value: organization,
                        onChange: handleChange,
                        errors
                    }} />
                    <FormInput inputConfig={{
                        label: 'Cargo',
                        fieldName: 'role',
                        placeholder: 'Informe um cargo.',
                        maxLength: 50,
                        value: role,
                        onChange: handleChange,
                        errors
                    }} />
                </Row>
                <Row>
                    <FormTextArea textAreaConfig={{
                        label: 'Observações',
                        fieldName: 'notes',
                        placeholder: 'Informe uma observação.',
                        maxLength: 255,
                        rows: 3,
                        value: notes,
                        onChange: handleChange,
                        errors
                    }} />
                </Row>
                <Row>
                    <FormCheckbox checkboxConfig={{
                        label: 'Favorito',
                        fieldName: 'favorite',
                        checked: favorite,
                        inline: true,
                        onChange: handleChangeCheckbox,
                        errors
                    }} />
                </Row>
                <TableContainer>
                    <Row>
                        <FormInput inputConfig={{
                            label: 'Nº de Telefone',
                            fieldName: 'phoneNumber',
                            placeholder: 'Informe um Nº de telefone.',
                            maxLength: 15,
                            value: phone,
                            onChange: handleChange,
                            errors
                        }} />
                        <ButtonAdd type='button' onClick={ () => handleAddPhone() }>Add Telefone</ButtonAdd>
                    </Row>
                    <PhoneTable title='Telefones' phones={ phones } onRemoveItem={ handleRemovePhone } unsaved editable />
                </TableContainer>
                <TableContainer>
                    <Row>
                        <FormInput inputConfig={{
                            label: 'Endereço de E-mail',
                            fieldName: 'emailAddress',
                            placeholder: 'Informe um endereço de e-mail',
                            maxLength: 120,
                            value: email,
                            onChange: handleChange,
                            errors
                        }} />
                        <ButtonAdd type='button' onClick={ () => handleAddEmail() }>Add E-mail</ButtonAdd>
                    </Row>
                    <EmailTable title='E-mails' emails={ emails } onRemoveItem={ handleRemoveEmail } unsaved editable />
                </TableContainer>
                <ButtonSubmit type='submit' value='Salvar' />
            </Form>
        </Container>
    )
}