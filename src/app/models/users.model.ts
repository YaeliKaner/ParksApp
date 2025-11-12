import Cities from "./cities.model"

export default class Users {
    id! : number
    name! : string
    password! : string
    birthDate! : Date
    city! : Cities
    phone! : string
    email! : string
    personalStatus! : PersonalStatus

}

export enum PersonalStatus{
married = "married",
single = "single",
}
