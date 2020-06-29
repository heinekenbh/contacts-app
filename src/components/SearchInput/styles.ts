import styled from 'styled-components'

export const SearchContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F0ECE2;
`

export const Input = styled.input`
    padding: 10px;
    margin-top: 5px;
    margin-left: 10px;
    background-color: transparent;
    border: 1px solid #F0ECE2;
    border-radius: 5px;
    outline: 0;
    transition: all .25s;

    &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, .3)
    }

    &:focus {
        background-color: #F0ECE2;
        color: #010101;
    }
`