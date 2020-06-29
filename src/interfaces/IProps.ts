import { IContact } from './IContact'
import { IPhone } from './IPhone'
import { IEmail } from './IEmail'
import { IError } from './IError'
import {
    IInputConfig, 
    ITextAreaConfig, 
    IDateInputConfig,
    ICheckBoxConfig
} from './IFormConfig'

export interface IProps {
    title?: string,
    label?: string,
    listEmptyMsg?: string,
    showBackButton?: boolean,
    contacts?: IContact[],
    contact?: IContact,
    phones?: IPhone[],
    emails?: IEmail[],
    unsaved?: boolean,
    editable?: boolean,
    inputConfig?: IInputConfig,
    dateInputConfig?: IDateInputConfig,
    textAreaConfig?: ITextAreaConfig,
    checkboxConfig?: ICheckBoxConfig,
    error?: IError,
    errors?: IError[],
    onDismissError?(error: IError | undefined): void,
    onError?(msg: string): void,
    onRemoveItem?(item: string): void,
    value?: string,
    onChange?(value: string): void,
}