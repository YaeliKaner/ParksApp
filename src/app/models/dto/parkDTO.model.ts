import Cities from "../cities.model"
import UsersDTO from "./usersDTO.model"


export default class ParkDTO {

        id! : number
        name! : string
        address! : string
        uploadDate! : Date
        picturePath! : string
    
        userDTO! : UsersDTO
        city! : Cities
        imageBase64! : string

}