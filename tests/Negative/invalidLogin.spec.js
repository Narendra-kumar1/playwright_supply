


import {test,expect} from "@playwright/test"
import Login from "../../PageObjectModel/Login.page"

import data from "../../test-data/invaidLogin.json"


test("invalid login @Adhoc",async({page})=>{
        await page.goto(`${process.env.BASE_URL}`);

    
        const LoginPage=new Login(page);
        for(let key in data){
            if(key==="valid"){
                for(let d of data[key]){
                await page.goto(`${process.env.BASE_URL}`);
                await LoginPage.LoginFunctionality(d);
                await expect(page).not.toHaveURL(`${process.env.BASE_URL}/`)
                }
            }
            else{
                for(let d of data[key]){
                await LoginPage.LoginFunctionality(d);
                await expect(await page.getByText(" * Username or Password is incorrect. ")).toBeVisible();
                }
            }
        }
        
        //await expect(page).toHaveURL(`${process.env.BASE_URL}/`);
    
})

// for(let d of data){

//     test(`invalid login @Adhoc ${data.indexOf(d)}`,async({page})=>{
//         await page.goto(`${process.env.BASE_URL}`);
    
//         const LoginPage=new Login(page);
//         await LoginPage.LoginFunctionality(d);
//         await expect(page).toHaveURL(`${process.env.BASE_URL}/`);
    
//     })
// }
