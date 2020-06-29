import axios from 'axios'
import * as HttpStatusCodes from 'http-status-codes'

import { IContact } from '../interfaces/IContact'

export class ContactService {

    private _basePath: string = 'https://localhost:44339/api/v1'

    public async addContact(contact: IContact): Promise<boolean> {
        let result = false 

        await axios.post<IContact>(`${ this._basePath }/contacts`, contact)
            .then((r: { status: number }) => {
                result = r.status === HttpStatusCodes.CREATED
            })
            .catch(() => result = false)

        return result
    }

    public async editContact(contact: IContact): Promise<boolean> {
        let result = false 

        await axios.put<IContact>(`${ this._basePath }/contacts/${ contact.id }`, contact)
            .then((r: { status: number }) => {
                result = r.status === HttpStatusCodes.NO_CONTENT
            })
            .catch(() => result = false)

        return result
    }

    public async delContact(contact: IContact): Promise<boolean> {
        let result = false 

        await axios.delete<IContact>(`${ this._basePath }/contacts/${ contact.id }`)
            .then((r: { status: number }) => {
                result = r.status === HttpStatusCodes.OK
            })
            .catch(() => result = false)

        return result
    }

    public async getContact(id: number): Promise<IContact> {
        const { data } = await axios.get<IContact>(`${ this._basePath }/contacts/${ id }`)

        return data
    }


    public async getAllContacts(): Promise<IContact[]> {
        const { data } = await axios.get<IContact[]>(`${ this._basePath }/contacts`)

        return data
    }

    public async getFavoriteContacts(): Promise<IContact[]> {
        const { data } = await axios.get<IContact[]>(`${ this._basePath }/contacts/favorites`)

        return data
    }

    public async contactExists(id: number): Promise<boolean> {
        const { data } = await axios.get<boolean>(`${ this._basePath }/contacts/exists/${ id }`)

        return data
    }
}