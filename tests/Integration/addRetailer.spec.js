




import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import AddEditRetailer from "../../PageObjectModel/AddEditRetailer.page";
import Retailers from "../../PageObjectModel/Retailers.page";
//import data from "../../test-data/retailer.json"
import path from "path";

import RetailerData from "../../utils/retailer";


test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});

test("add Retailer @Integration",async({page})=>{

    const data=RetailerData();

    page.on("dialog",async dialog=>{
        await dialog.accept()
    })
    
    await page.goto(`${process.env.BASE_URL}/admin/index.php`);
     
    
    const LandingPage=new Landing(page);
    await LandingPage.addRetailerLink.click();
    
    const AddEditRetailerPage=new AddEditRetailer(page);
    await AddEditRetailerPage.addRetailerFunctionality(data);

    await LandingPage.retailersLink.click();

    const RetialersPage=new Retailers(page);
    await RetialersPage.verifyRetailer(data);
})