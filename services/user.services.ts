import { userApi } from "@/api/userApi"
import { userList } from "@/data-test/data"
import { Users } from "@/interfaces/user.interfaces"


export const changeUserInfo = async (userInfo: Users) => {

    try{
        /* const response = await userApi.post(
            'Post URL',
            userInfo
        ) */
        const response = userList[0]
        return response
    }catch(e){
        throw e
    }
}

export const registerUser = async (newUser: Users) => {

    try{
        /* const response = await userApi.post(
            'Post URL',
            newUser 
        )*/
        const response = userList[1]
        return response
    }catch(e){
        throw e
    }
}

export const verifyUser = async (userData: UserData) => {

    try{
        const response = await userApi.get(
            'Post URL',
            userData
        )
        return response.data
    }catch(e){
        throw e
    }
}