import axios from "axios";

export const userApi = axios.create({
    baseURL:"http://http://localhost:3306"
})