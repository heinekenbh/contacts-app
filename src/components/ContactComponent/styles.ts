import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContactContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    padding: 0 20px;
    list-style-type: none;
    border-radius: 20px;
    border: 1px solid #69779B;
    transition: all .25s;
    
    &:hover {
        background-color: rgba(255, 255, 255, .1);
    }
`

export const ContactName = styled.p`
    color: #F0ECE2;
    cursor: pointer;
`

export const ContactActions = styled.div`
    width: 130px;
    display: flex;
    justify-content: space-between;
`

export const ActionLink = styled(Link)`
    text-decoration: none;
`

export const Action = styled.div`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 17.5px;
    border: 1px solid #69779B;
    color: #69779B;
    cursor: pointer;
    transition: all .25s;

    &:hover {
        background-color: #69779B;
        color: #010101;
    }
`