







import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import AddEditRetailer from "../../PageObjectModel/AddEditRetailer.page";
import Retailers from "../../PageObjectModel/Retailers.page";
import path from "path";

// import data from "../../test-data/retailer.json"
// import updatedRetailer from "../../test-data/updatedRetailer.json"
import RetailerData from "../../utils/retailer";
import updateRetailer from "../../utils/updateRetailer";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});

test("update Retailer @Integration",async({page})=>{
    const data=RetailerData();
    const updatedRetailer=updateRetailer();

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

    const row=await RetialersPage.searchRetailer(data);
    await row.locator("a").click();

    await AddEditRetailerPage.updateRetailer(updatedRetailer);

    await RetialersPage.verifyRetailer(updatedRetailer);
})