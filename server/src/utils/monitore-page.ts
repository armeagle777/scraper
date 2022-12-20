import puppeteer from 'puppeteer';
import { HrefObj } from '../utils/interfaces'



export const monitorePage = async ()=>{

    const url = 'https://migration.am'

    const browser = await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true,
    })

    let page = await browser.newPage();
    
    page.on("console", (consoleObj) => console.log(consoleObj.text()));

    await page.goto(url, {
        waitUntil: 'domcontentloaded',
    });

    const links = await page.evaluate(async (url:string)=>{
        const linkTags = document.querySelectorAll('a')
        const result:Array<HrefObj> =[]

        for(let link of linkTags){
            const href = link.getAttribute("href")
            if(href){
                const text = link.innerText?.length <= 50 ? link.innerText : link.innerText.substring(0,51) + "..."
                const absolutePath = href?.includes("http") ? href : url + href
                
                const hrefObj = {
                    href:absolutePath,
                    text,
                }
                result.push(hrefObj)
            }
        }
        return result
    },url)


    await page.close()
    await browser.close();

    return links
}