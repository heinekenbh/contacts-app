import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, .075);
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ActionContainer = styled.div`
  margin-left: 20px;
  width: 60px;
  display: flex;
  justify-content: space-between;
`

export const ActionLink = styled(Link)`
    text-decoration: none;
`

export const Action = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #69779B;
    transition: all .25s;

    &:hover {
      color: #FFF;
    }
`

export const ContactName = styled.h2`
  color: #69779B;
  text-align: center;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const Field = styled.p`
  color: #F0ECE2;
  font-weight: bold;
  font-size: 20px;
`

export const Value = styled.p`
  margin-left: 10px;
  color: #F0ECE2;
  font-size: 20px;
`

export const Birthday = styled.p`
  margin-left: 30px;
  color: #F0ECE2;
`