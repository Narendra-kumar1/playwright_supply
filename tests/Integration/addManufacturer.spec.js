

import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import AddEditManufacturer from "../../PageObjectModel/AddEditManufacturer.page";
import Manufacturers from "../../PageObjectModel/Manufacturers.page";
import path from "path";

import manufacturerData from "../../utils/manufacturer";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});

test("add manufacturer @Integration",async({page})=>{
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
    await ManufacturersPage.verifyManufacturer(data);
})