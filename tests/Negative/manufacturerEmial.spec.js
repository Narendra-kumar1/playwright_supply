

import {test,expect} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import AddEditManufacturer from "../../PageObjectModel/AddEditManufacturer.page";
import Manufacturers from "../../PageObjectModel/Manufacturers.page";
import path from "path";

import manufacturerData from "../../utils/manufacturer";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});

test("manufacturer email without domain @Adhoc",async({page})=>{

    const data=manufacturerData();
    
    page.on("dialog",async dialog=>{
        await dialog.accept()
    })

    await page.goto(`${process.env.BASE_URL}/admin/add_manufacturer.php`);
    
   // const LandingPage=new Landing(page);
    
    const AddEditManufacturerPage=new AddEditManufacturer(page);
    await AddEditManufacturerPage.AddManufacturerFunctionality({...data,email:"ab"});

     

    await expect(await page.getByText("* Invalid Email")).toBeVisible();
})