import styled from 'styled-components'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export const FieldGroup = styled.div`
    margin: 0 15px;
    display: flex;
    flex: 1;
    flex-grow: 1;
    flex-direction: column;
`

export const FieldGroupInline = styled.div`
    margin: 0 15px;
    display: flex;
`

export const Label = styled.label`
    color: #F0ECE2;
`

export const Input = styled.input`
    margin-top: 5px;
    padding: 10px;
    background-color: transparent;
    outline: 0;
    border: 1px solid #F0ECE2;
    border-radius: 5px;
    color: #F0ECE2;
    transition: all .25s;

    &:hover {
        background-color: rgba(255, 255, 255, .1);
    }

    &:focus {
        background-color: #F0ECE2;
        color: #010101;
    }

    &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, .3)
    }
`

export const TextArea = styled.textarea`
    margin-top: 5px;
    padding: 10px;
    background-color: transparent;
    outline: 0;
    border: 1px solid #F0ECE2;
    border-radius: 5px;
    color: #F0ECE2;
    resize: none;
    transition: all .25s;

    &:hover {
        background-color: rgba(255, 255, 255, .1);
    }

    &:focus {
        background-color: #F0ECE2;
        color: #010101;
    }

    &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, .3)
    }
`

export const InputDate = styled(DatePicker)`
    margin-top: 5px;
    padding: 10px;
    background-color: transparent;
    outline: 0;
    border: 1px solid #F0ECE2;
    border-radius: 5px;
    color: #F0ECE2;
    transition: all .25s;

    &:hover {
        background-color: rgba(255, 255, 255, .1);
    }

    &:focus {
        background-color: #F0ECE2;
        color: #010101;
    }

    &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, .3)
    }
`