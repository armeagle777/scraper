import dotenv from "dotenv";
import express from "express";
import { v4 as uuidv4 } from 'uuid';
import { MonitoringRequest } from './entity/MonitoringRequest';

import { ApolloServer } from "apollo-server-express";
import { AppDataSource } from "./data-source";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/typeDefs";



const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))



const startApp = async()=>{

    //Starting the App
    const PORT = process.env.PORT || 8000
    await  AppDataSource.initialize()
    const server = new ApolloServer({typeDefs, resolvers})
    await server.start()
    server.applyMiddleware({app})

    const newMonitoring = MonitoringRequest.create({
        requestId:uuidv4()
    })
    await MonitoringRequest.save(newMonitoring)
    console.log("newMonitoring",newMonitoring)

    app.listen(PORT, ()=>{
        console.log(`Your server is runnign on port ${PORT}`)
    })

}


startApp()



