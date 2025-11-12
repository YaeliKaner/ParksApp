import Cities from "./cities.model"
import Users from "./users.model"



export default class Park {

    id! : number
    name! : string
    desc! : string
    address! : string
    uploadDate! : Date
    picturePath! : string

    user! : Users
    city! : Cities

}