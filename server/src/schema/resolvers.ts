
import { User } from "../entity/User"

export const resolvers = {
    
    Query:{
        users:async ()=> {
            const users= await User.find()
            return users
        }
    }
}