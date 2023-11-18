import { userApi } from "@/api/userApi"
import { Users, Sites, Travel } from "@/interfaces/user.interfaces"


export const changeUserInfo = async (userInfo: Users) => {

    try{
         const response = await userApi.post(
            'users',
            userInfo
         )
        /* const response = userList[0] */
        return response.data
    }catch(e){
        throw e
    }
}

export const registerUser = async (newUser: Users) => {

    try{
         const response = await userApi.post(
            'users',
            newUser 
        )
        /* const response = userList[1] */
        return response.data
    }catch(e){
        throw e
    }
}

export const loadTravelHistory = async () => {

    try{
         const response = await userApi.get(
            'get travel history info address here'
        )
        /* const response = userList[1] */
        return response.data
    }catch(e){
        throw e
    }
}

export const updateTravelHistory = async (travels: Travel[]) => {

    try{
         const response = await userApi.post(
            'sites',
            travels 
        )
        /* const response = userList[1] */
        return response.data
    }catch(e){
        throw e
    }
}

export const loadFavSites = async () => {

    try{
         const response = await userApi.get(
            'get fav sites info address here'
        )
        /* const response = userList[1] */
        return response.data
    }catch(e){
        throw e
    }
}

export const updateFavSites = async (sites: Sites[]) => {

    try{
         const response = await userApi.post(
            'sites',
            sites 
        )
        /* const response = userList[1] */
        return response.data
    }catch(e){
        throw e
    }
}

/* export const verifyUser = async (userData: UserData) => {

    try{
        const response = await userApi.get(
            'Post URL',
            userData
        )
        return response.data
    }catch(e){
        throw e
    } 
}*/