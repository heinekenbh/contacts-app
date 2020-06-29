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
import { IPhone } from '../../interfaces/IPhone'

export default function PhoneTable({ title, phones, unsaved, editable, onRemoveItem }: IProps) {

    const renderTableRows = () => {
      let cols = 1

      if (!unsaved && editable)
        cols += 4

      else if (!unsaved)
        cols += 3

      else if (editable)
        cols += 1

      if (phones && phones.length > 0) {
        return phones.map((phone: IPhone) => (
          <TableRow key={ `phone-${ phone.phoneNumber }` }>
            { !unsaved ? <TableCell>{ phone.id }</TableCell> : null }
            <TableCell>{ phone.phoneNumber }</TableCell>
            { !unsaved ? (
              <>
                <TableCell>{ phone.createdAt ? new Date(phone.createdAt).toLocaleDateString() : '' }</TableCell>
                <TableCell>{ phone.updatedAt ? new Date(phone.updatedAt).toLocaleDateString() : '' }</TableCell>
              </>
            ) : null }
            { editable ? (
              <TableHeaderCell>
                <TableButton type='button' 
                  onClick={ () => phone.phoneNumber && onRemoveItem ? onRemoveItem(phone.phoneNumber) : null }
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
          <TableCell colSpan={ cols }>Não há telefones para este contato!</TableCell>
        </TableRow>
      )
    }

    return (
      <TableContainer>
        <Caption>{ title }</Caption>
        <TableHeader>
          <TableHeaderRow>
            { !unsaved ? <TableHeaderCell>#</TableHeaderCell> : null }
            <TableHeaderCell>Nº de Telefone</TableHeaderCell>
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