import axios from "axios"

export const validateUrl = async (urlString:string):Promise<number> =>{
    try {
        const res = await axios.get(urlString)
        const status = res.status
        return status   
    } catch (error:any) {
        return  404
    }
}