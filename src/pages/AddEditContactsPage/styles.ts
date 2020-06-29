import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .075);
    margin: 20px;
    padding: 20px;
    border-radius: 20px;
`

export const Title = styled.h2`
    color: #69779B;
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Row = styled.section`
    display: flex;
    justify-content: space-between;
    flex: 1;
    flex-wrap: wrap;
`

export const ButtonSubmit = styled.input`
    margin-top: 50px;
    width: 150px;
    align-self: center;
    background-color: transparent;
    padding: 10px 20px;
    border: 1px solid #69779B;
    color: #69779B;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;
    transition: all .25s;

    &:hover {
        background-color: #69779B;
        color: #010101;
    }
`

export const ButtonAdd = styled.button`
    width: 150px;
    align-self: center;
    background-color: transparent;
    padding: 10px 20px;
    border: 1px solid #69779B;
    color: #69779B;
    border-radius: 20px;
    cursor: pointer;
    transition: all .25s;

    &:hover {
        background-color: #69779B;
        color: #010101;
    }
`

export const TableContainer = styled.section`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`