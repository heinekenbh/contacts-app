import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

import { 
  TableContainer,
  Caption,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableButton
} from './styles'
import { IProps } from '../../interfaces/IProps'
import { IEmail } from '../../interfaces/IEmail'

export default function EmailTable({ title, emails, unsaved, editable, onRemoveItem }: IProps) {

    const renderTableRows = () => {
      let cols = 1

      if (!unsaved && editable)
        cols += 4

      else if (!unsaved)
        cols += 3

      else if (editable)
        cols += 1

      if (emails && emails.length > 0) {
        return emails.map((email: IEmail) => (
          <TableRow key={ `email-${ email.emailAddress }` }>
            { !unsaved ? <TableCell>{ email.id }</TableCell> : null }
            <TableCell>{ email.emailAddress }</TableCell>
            { !unsaved ? (
              <>
                <TableCell>{ email.createdAt ? new Date(email.createdAt).toLocaleDateString() : '' }</TableCell>
                <TableCell>{ email.updatedAt ? new Date(email.updatedAt).toLocaleDateString() : '' }</TableCell>
              </>
            ) : null }
            { editable ? (
              <TableHeaderCell>
                <TableButton type='button' 
                  onClick={ () => email.emailAddress && onRemoveItem ? onRemoveItem(email.emailAddress) : null }
                >
                  <AiOutlineDelete size={ 20 } />
                </TableButton>
              </TableHeaderCell>
            ) : null }
          </TableRow>
        ))
      }

      return (
        <TableRow>
          <TableCell colSpan={ cols }>Não há e-mails para este contato!</TableCell>
        </TableRow>
      )
    }

    return (
      <TableContainer>
        <Caption>{ title }</Caption>
        <TableHeader>
          <TableHeaderRow>
            { !unsaved ? <TableHeaderCell>#</TableHeaderCell> : null}
            <TableHeaderCell>Endereço de E-mail</TableHeaderCell>
            { !unsaved ? (
              <>
                <TableHeaderCell>Data de Criação</TableHeaderCell>
                <TableHeaderCell>Data de Atualização</TableHeaderCell>
              </>
            ) : null }
            { editable ? <TableHeaderCell>Excluir</TableHeaderCell> : null }
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          { renderTableRows() }
        </TableBody>
      </TableContainer>
    )
}