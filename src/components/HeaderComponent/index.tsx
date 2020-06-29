import React from 'react'
import { 
    AiOutlineLeft,
    AiOutlinePlus
} from 'react-icons/ai'

import {
    HeaderContainer, 
    HomeLink,
    HeaderTitle,
    MenuLeft,
    MenuRight,
    Menu,
    MenuLink,
    MenuOption
} from './styles'
import { IProps } from '../../interfaces/IProps'

export default function Header({ showBackButton }: IProps) {

    const renderBackButton = () => showBackButton ? (
        <Menu>
            <MenuLink to='/' >
                <MenuOption>
                    <AiOutlineLeft size={ 25 } />
                </MenuOption>
            </MenuLink>
        </Menu>
    ) : null

    return (
        <HeaderContainer>
            <MenuLeft>
                { renderBackButton() }
            </MenuLeft>
            <HomeLink to='/' >
                <HeaderTitle>Agenda de Contatos</HeaderTitle>
            </HomeLink>
            <MenuRight>
                <Menu>
                    <MenuLink to='/contacts/add' >
                        <MenuOption>
                            <AiOutlinePlus size={ 25 } />
                        </MenuOption>
                    </MenuLink>
                </Menu>
            </MenuRight>
        </HeaderContainer>
    )
}