


import {test} from "@playwright/test";
import Login from "../../PageObjectModel/Login.page";
import path from "path"

import data from "../../test-data/loginData.json"

test("login test @Smoke",async({page})=>{
    await page.goto(`${process.env.BASE_URL}/admin/index.php`)
    
    const LoginPage=new Login(page);
    await LoginPage.LoginFunctionality(data);
})