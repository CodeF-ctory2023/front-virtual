import axios from "axios";

export const userApi = axios.create({
    baseURL:"URL de la base de datos"
})