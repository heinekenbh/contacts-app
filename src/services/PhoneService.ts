import axios from 'axios'
import * as HttpStatusCodes from 'http-status-codes'

import { IPhone } from '../interfaces/IPhone'

export class PhoneService {

    private _basePath: string = 'https://localhost:44339/api/v1'

    public async addPhone(phone: IPhone): Promise<boolean> {
        let result = false 

        await axios.post<IPhone>(`${ this._basePath }/phones`, phone)
            .then((r: { status: number }) => {
                result = r.status === HttpStatusCodes.CREATED
            })
            .catch(() => result = false)

        return result
    }

    public async editPhone(phone: IPhone): Promise<boolean> {
        let result = false 

        await axios.put<IPhone>(`${ this._basePath }/phones/${ phone.id }`, phone)
            .then((r: { status: number }) => {
                result = r.status === HttpStatusCodes.NO_CONTENT
            })
            .catch(() => result = false)

        return result
    }

    public async delPhone(phone: IPhone): Promise<boolean> {
        let result = false 

        await axios.delete<IPhone>(`${ this._basePath }/phones/${ phone.id }`)
            .then((r: { status: number }) => {
                result = r.status === HttpStatusCodes.OK
            })
            .catch(() => result = false)

        return result
    }

    public async getPhone(id: number): Promise<IPhone> {
        const { data } = await axios.get<IPhone>(`${ this._basePath }/phones/${ id }`)

        return data
    }

    public async getAllPhones(contactId: number): Promise<IPhone[]> {
        const { data } = await axios.get<IPhone[]>(`${ this._basePath }/phones/list/${ contactId }`)

        return data
    }

    public async phoneExists(phoneNumber: string): Promise<boolean> {
        const { data } = await axios.get<boolean>(`${ this._basePath }/phones/exists/${ phoneNumber }`)

        return data
    }
}