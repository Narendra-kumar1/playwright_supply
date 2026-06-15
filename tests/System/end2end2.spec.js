 





import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import AddEditRetailer from "../../PageObjectModel/AddEditRetailer.page";
import Retailers from "../../PageObjectModel/Retailers.page";
import AddEditManufacturer from "../../PageObjectModel/AddEditManufacturer.page";
import AddEditProduct from "../../PageObjectModel/AddEditProduct.page";
import path from "path";

import RetailerData from "../../utils/retailer";
//import data3 from "../../test-data/productData.json";
import productData from "../../utils/productData";

import manufacturerData from "../../utils/manufacturer";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});


test("add Retailer @EndToEnd",async({page})=>{

    const data2=manufacturerData();
    const data=RetailerData();

    const data3=productData();
    page.on("dialog",async dialog=>{
        await dialog.accept()
    })
    await page.goto(`${process.env.BASE_URL}/admin/index.php`);
     
    
    const LandingPage=new Landing(page);
    await LandingPage.addRetailerLink.click();
    
    const AddEditRetailerPage=new AddEditRetailer(page);
    await AddEditRetailerPage.addRetailerFunctionality(data);
    await LandingPage.addManufacturerLink.click();

    
    const AddEditManufacturerPage=new AddEditManufacturer(page);
    await AddEditManufacturerPage.AddManufacturerFunctionality(data2);
    
    await LandingPage.addProductLink.click();

    const AddEditProductPage=new AddEditProduct(page);
    await AddEditProductPage.addProductFunctionality(data3);

    await LandingPage.manageAreaLink.click();
    await LandingPage.manageCategoryLink.click();
})