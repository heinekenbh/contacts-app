import { IError } from './IError'

interface IConfig {
    label: string,
    fieldName: string,
    inline?: boolean
    errors: IError[]
}

export interface IInputConfig extends IConfig {
    type?: string,
    minLength?: number,
    maxLength?: number,
    placeholder?: string,
    onChange(evt: React.ChangeEvent<HTMLInputElement>, fieldName: string): void,
    value: string
}

export interface IDateInputConfig extends IConfig {
    selected: Date | null,
    placeholder?: string,
    minDate?: Date,
    maxDate?: Date,
    onChange(date: Date | null, fieldName: string): void
}

export interface ITextAreaConfig extends IConfig {
    minLength?: number,
    maxLength?: number,
    rows?: number,
    cols?: number,
    placeholder?: string,
    onChange(evt: React.ChangeEvent<HTMLTextAreaElement>, fieldName: string): void,
    value: string
}

export interface ICheckBoxConfig extends IConfig {
    onChange(evt: React.ChangeEvent<HTMLInputElement>, fieldName: string): void,
    checked: boolean
}