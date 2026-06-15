






import {test,expect} from "@playwright/test"
import Login from "../../PageObjectModel/Login.page";
import Landing from "../../PageObjectModel/Landing.page";
import AddEditManufacturer from "../../PageObjectModel/AddEditManufacturer.page";
import Manufacturers from "../../PageObjectModel/Manufacturers.page";
import path from "path";

import manufacturerData from "../../utils/manufacturer";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});

test(" manufacturer  delete @Adhoc",async({page})=>{

    const data=manufacturerData();

    page.on("dialog",async dialog=>{
        await dialog.accept()
    })
    await page.goto(`${process.env.BASE_URL}/admin/index.php`);
    
    
    const LandingPage=new Landing(page);
    await LandingPage.addManufacturerLink.click();
    
    const AddEditManufacturerPage=new AddEditManufacturer(page);
    await AddEditManufacturerPage.AddManufacturerFunctionality(data);

    await LandingPage.manufacturersLink.click();

    const ManufacturersPage=new Manufacturers(page);
    const row= await ManufacturersPage.searchManufacturer(data);
    
    const count=await row.count();
    for(let i=0;i<count;i++){
       await row.nth(i).locator("//td/input").check();
    }
    
    await page.getByRole('button',{name:"Delete"}).click();

    await page.goto(`${process.env.BASE_URL}`);

    const LoginPage=new Login(page);
    await LoginPage.LoginFunctionality({username:data.username,password:data.password,loginType:"Manufacturer"});

    await expect(page.getByText(" * Username or Password is incorrect. ")).toBeVisible();

})