import { userApi } from "@/api/userApi"


export const changeUserInfo = async (userInfo: UserInfo) => {

    try{
        const response = await userApi.post(
            'Post URL',
            userInfo
        )
        return response.data
    }catch(e){
        throw e
    }
}

export const registerUser = async (newUser: NewUser) => {

    try{
        const response = await userApi.post(
            'Post URL',
            newUser
        )
        return response.data
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