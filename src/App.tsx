import React, { useState } from 'react'
import { 
  useLocation,
  matchPath
} from 'react-router-dom'

import { 
  AppContainer,
  Container,
  PagesContainer
} from './styles'

import Routes from './routes'

import Header from './components/HeaderComponent'
import ErrorList from './components/ErrorListComponent'

import { IError } from './interfaces/IError'

export default function App() {

  const location = useLocation()

  const [ errors, setErrors ] = useState<IError[]>([])

  const onDismissError = (error: IError) => {
    setErrors(errors => errors = errors.filter(e => e.id !== error.id))
  }

  const onError = (msg: string) => {
    setErrors((errors: IError[]) => [ ...errors,  { id: errors.length, msg } ])
  }

  const isDefaultPathActive = !!matchPath(location.pathname, {
    path: '/',
    exact: true
  })

  return (
    <AppContainer>
      <Header showBackButton={ !isDefaultPathActive } />
      <Container>
        <PagesContainer>
          <ErrorList errors={ errors } onDismissError={ onDismissError } />
          <Routes />
        </PagesContainer>
      </Container>
    </AppContainer>
  )
}