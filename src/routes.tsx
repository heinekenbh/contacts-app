import React from 'react'
import { 
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import AddEditContactsPage from './pages/AddEditContactsPage'
import DelContactsPage from './pages/DelContactsPage'
import ContactDetailPage from './pages/ContactDetailPage'
import ListContactsPage from './pages/ListContactsPage'
import NotFound from './pages/NotFoundPage'

import { IProps } from './interfaces/IProps'

export default function Routes({ onError }: IProps) {
    return (
        <Switch>
            <Route exact path='/contacts/add'>
                <AddEditContactsPage onError={ onError } />
            </Route>
            <Route exact path='/contacts/edit/:id'>
                <AddEditContactsPage onError={ onError } />
            </Route>
            <Route exact path='/contacts/delete/:id'>
                <DelContactsPage onError={ onError } />
            </Route>
            <Route exact path='/contacts/detail/:id'>
                <ContactDetailPage onError={ onError } />
            </Route>
            <Route exact path='/'>
                <ListContactsPage onError={ onError } />
            </Route>
            <Route path='/404'>
                <NotFound />
            </Route>
            <Redirect to='/404' />
        </Switch>
    )
}