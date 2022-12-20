import { HrefObj } from '../utils/interfaces'

export const checkUrlsStatus = async (urlsArray:Array<HrefObj>) =>{

    try {
        const promiseValues =  await Promise.allSettled(urlsArray.map(urlObj => {
            return fetch(urlObj.href).then(res => {
                return {
                    ...urlObj,
                    status:200
                }
            }).catch(err => {
                return {
                    ...urlObj,
                    status:404
                }
            })

        }))
       
        const urlObjectsWithStatus = promiseValues.map(obj => {
            if(obj.status === 'fulfilled'){
                return obj.value
            }
        })
        
       console.log('urlObjectsWithStatus',urlObjectsWithStatus)

        return urlObjectsWithStatus
    } catch (error) {
        console.log('error', error)
        return []
    }



}