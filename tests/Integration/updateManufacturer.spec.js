




import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import Manufacturers from "../../PageObjectModel/Manufacturers.page";
import AddEditManufacturer from "../../PageObjectModel/AddEditManufacturer.page";
import path from "path";

import manufacturerData from "../../utils/manufacturer";
import updateManufacturer from "../../utils/updateManufacturer";
//import updateManufacturerData from "../../test-data/updateManufacturer.json";


test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});

test("update manufacturer @Integration",async({page})=>{
    
    const data=manufacturerData();
    const updateManufacturerData=updateManufacturer();
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
     
    const row=await ManufacturersPage.searchManufacturer(data);
    await row.locator("a").click();
    
    await AddEditManufacturerPage.updateManufacturer(updateManufacturerData);

    await ManufacturersPage.verifyManufacturer(updateManufacturerData);
})