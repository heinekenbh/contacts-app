import styled from 'styled-components'

export const ErrorContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    padding: 0 20px;
    border-radius: 20px;
    background-color: #E36387;
`

export const ErrorText = styled.p`
    color: #010101;
`

export const DismissButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 17.5px;
    background-color: transparent;
    color: #010101;
    border: 0;
    transition: all .25s;
    cursor: pointer;

    &:hover {
        color: #F0ECE2;
    }
`