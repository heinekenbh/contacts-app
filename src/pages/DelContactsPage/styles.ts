import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .075);
    margin: 20px;
    padding: 20px;
    border-radius: 20px;
    align-items: center;
`

export const Question = styled.h2`
    text-align: center;
    color: #F0ECE2;
`

export const ActionContainer = styled.div`
    width: 180px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
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