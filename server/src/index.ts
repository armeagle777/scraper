import express from "express"

import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { ApolloServer } from "apollo-server-express"

import { typeDefs } from "./schema/typeDefs"
import { resolvers } from "./schema/resolvers"
import puppeteer from 'puppeteer';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const server = new ApolloServer({
    typeDefs,
    resolvers
})

async function run(){

    const url = 'https://www.amazon.com/'

    const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
    })

    let page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'domcontentloaded',
    });

    let links = await page.$$('a.a-link-normal');
    for (const link of links){
        console.log(await link.evaluate( node => node.getAttribute("href")));
    }



    // await page.close()
    // await browser.close();
}

run();
const PORT = process.env.PORT || 4000
const startApp = async () =>{
    await  AppDataSource.initialize()
    const server = new ApolloServer({typeDefs, resolvers})
    await server.start()
    server.applyMiddleware({app})
    

    app.listen(PORT, ()=>{
        console.log(`Your server is runnign on port ${PORT}`)
    })
}

startApp()




const URL = require('url').URL

function validateUrl(urlString) {
  try {
    new URL(urlString)
    return true
  } catch {
    return false
  }
} 

console.log(validateUrl('https://google.com'))
console.log(validateUrl('https:google.com'))
console.log(validateUrl('sometext.com'))
console.log(validateUrl('sometext'))
