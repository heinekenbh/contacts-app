import styled from 'styled-components'

export const TableContainer = styled.table`
    background-color: #69779B;
    color: #010101;
    border-collapse: collapse;
    border: 1px solid #010101;
`

export const Caption = styled.caption`
    padding: 15px;
    color: #69779B;
    font-size: 24px;
    font-weight: bold;
`

export const TableHeader = styled.thead`

`

export const TableHeaderRow = styled.tr`

`

export const TableHeaderCell = styled.th`
    padding: 10px;
    border-collapse: collapse;
    border: 1px solid #010101;
`

export const TableBody = styled.tbody`
    background-color: #F0ECE2;
`

export const TableRow = styled.tr`
    transition: all .25s;

    &:hover {
        background-color: #BBB;
    }
`

export const TableCell = styled.td`
    padding: 10px;
    border-collapse: collapse;
    border: 1px solid #010101;
    text-align: center;
`

export const TableButton = styled.button`
    width: 35px;
    height: 35px;
    align-self: center;
    background-color: transparent;
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