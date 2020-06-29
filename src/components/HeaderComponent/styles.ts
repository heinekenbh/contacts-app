import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.section`
    display: flex;
    justify-content: center;
    background-color: #010101;
    border-bottom: 1px solid #69779B;
`

export const HomeLink = styled(Link)`
    text-decoration: none;
    color: #69779B;
`

export const HeaderTitle = styled.h1`
    flex-grow: 1;
    align-self: center;
    text-align: center;
`

export const MenuLeft = styled.nav`
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 20px;
`

export const MenuRight = styled.nav`
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 20px;
`

export const Menu = styled.ul`
    padding: 0;
    width: 80px;
    display: flex;
    justify-content: space-between;
`

export const MenuLink = styled(Link)`
    text-decoration: none;
    color: #69779B;
`

export const MenuOption = styled.li`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #69779B;
    border-radius: 17.5px;
    list-style-type: none;
    transition: all .25s;
    cursor: pointer;

    &:hover {
        background-color: #69779B;
        color: #010101;
    }
`