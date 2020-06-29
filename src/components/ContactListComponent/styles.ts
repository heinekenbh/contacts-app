import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .075);
    margin: 20px;
    padding: 20px;
    border-radius: 20px;
`

export const ListTitle = styled.h2`
    color: #69779B;
    text-align: center;
`

export const ListContainer = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
`

export const EmptyListText = styled.p`
    text-align: center;
    color: #69779B;
`