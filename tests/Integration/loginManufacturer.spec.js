



import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import Login from "../../PageObjectModel/Login.page";
import AddManufacturer from "../../PageObjectModel/AddEditManufacturer.page";
import path from "path";

import manufacturerData from "../../utils/manufacturer";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});

test("login manufacturer @Integration",async({page})=>{
        
    const data=manufacturerData();

    page.on("dialog",async dialog=>{
        await dialog.accept()
    })

    await page.goto(`${process.env.BASE_URL}/admin/index.php`);
    
    const LandingPage=new Landing(page);
    await LandingPage.addManufacturerLink.click();
    
    const AddManufacturerPage=new AddManufacturer(page);
    await AddManufacturerPage.AddManufacturerFunctionality(data);

    // await LandingPage.manufacturersLink.click();
    //await LandingPage.logoutButton.click();
    await page.goto(`${process.env.BASE_URL}`)
    await page.waitForURL(`${process.env.BASE_URL}/`)

    const LoginPage=new Login(page);
    await LoginPage.LoginFunctionality({...data,loginType:"Manufacturer"})


})