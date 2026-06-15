import Login from "../../PageObjectModel/Login.page"
//import data from "../../test-data/loginData.json"
import {test} from "@playwright/test"

test("login for storage stage",async({page})=>{
    await page.goto(`${process.env.BASE_URL}`)
    const LoginPage=new Login(page);
    await LoginPage.LoginFunctionality({username:`${process.env.USERNAME}`,password:`${process.env.PASSWORD}`,loginType:"Admin"});
    await page.context().storageState({path:"auth/Admin.auth.json"})
})