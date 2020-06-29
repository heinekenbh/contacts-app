import axios from 'axios'
import * as HttpStatusCodes from 'http-status-codes'

import { IEmail } from '../interfaces/IEmail'

export class EmailService {

    private _basePath: string = 'https://localhost:44339/api/v1'

    public async addEmail(email: IEmail): Promise<boolean> {
        let result = false 

        await axios.post<IEmail>(`${ this._basePath }/emails`, email)
            .then((r: { status: number }) => {
                result = r.status === HttpStatusCodes.CREATED
            })
            .catch(() => result = false)

        return result
    }

    public async editEmail(email: IEmail): Promise<boolean> {
        let result = false 

        await axios.put<IEmail>(`${ this._basePath }/emails/${ email.id }`, email)
            .then((r: { status: number }) => {
                result = r.status === HttpStatusCodes.NO_CONTENT
            })
            .catch(() => result = false)

        return result
    }

    public async delEmail(email: IEmail): Promise<boolean> {
        let result = false 

        await axios.delete<IEmail>(`${ this._basePath }/emails/${ email.id }`)
            .then((r: { status: number }) => {
                result = r.status === HttpStatusCodes.OK
            })
            .catch(() => result = false)

        return result
    }

    public async getEmail(id: number): Promise<IEmail> {
        const { data } = await axios.get<IEmail>(`${ this._basePath }/emails/${ id }`)

        return data
    }

    public async getAllEmails(contactId: number): Promise<IEmail[]> {
        const { data } = await axios.get<IEmail[]>(`${ this._basePath }/emails/list/${ contactId }`)

        return data
    }

    public async emailExists(emailAddress: string): Promise<boolean> {
        const { data } = await axios.get<boolean>(`${ this._basePath }/emails/exists/${ emailAddress }`)

        return data
    }
}