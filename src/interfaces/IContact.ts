import { IPhone } from './IPhone'
import { IEmail } from './IEmail'

export interface IContact {
    id: number,
    firstName: string,
    lastName: string,
    nickName: string,
    fullName?: string,
    birthDate: Date | null,
    organization: string,
    role: string,
    notes: string,
    favorite: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    phones?: IPhone[],
    emails?: IEmail[]
}