






import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import AddEditProduct from "../../PageObjectModel/AddEditProduct.page";
import Products from "../../PageObjectModel/Products.page";
import AddEditRetailer from "../../PageObjectModel/AddEditRetailer.page";
import Login from "../../PageObjectModel/Login.page";
import path from "path";

//import data1 from "../../test-data/productData.json"
import productData  from "../../utils/productData";
//import data2 from "../../test-data/retailer.json"
import RetailerData from "../../utils/retailer";



test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")})

test("end to end 1 testing @EndToEnd",async({page})=>{
    const data1=productData()
    const data2=RetailerData();
    page.on("dialog",async dialog=>{
        await dialog.accept();
    })

    await page.goto(`${process.env.BASe_URL}/admin/index.php`);

    const LandingPage=new Landing(page);
    await LandingPage.addProductLink.click();

    const AddEditProductPage=new AddEditProduct(page);
    await AddEditProductPage.addProductFunctionality(data1);

    await LandingPage.addRetailerLink.click()
     
    const AddEditRetailerPage=new AddEditRetailer(page);
    await AddEditRetailerPage.addRetailerFunctionality(data2);

   //await LandingPage.logoutButton.click();

    await page.goto(`${process.env.BASe_URL}`);

    const LoginPage=new Login(page);
    await LoginPage.LoginFunctionality({...data2,loginType:"Retailer"});
 
})


