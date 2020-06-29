import React from 'react'

import {
    SearchContainer,
    Input
} from './styles'
import { IProps } from '../../interfaces/IProps'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchInput({ value, onChange }: IProps) {
    if (!onChange)
        throw new Error('A função onChange deve ser configurada.')

    return (
        <SearchContainer>
            <AiOutlineSearch size={ 20 } />
            <Input 
                placeholder='Digite algo para procurar' 
                value={ value } 
                onChange={ evt => onChange(evt.target.value) } 
            />
        </SearchContainer>
    )
}