


import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import AddEditProduct from "../../PageObjectModel/AddEditProduct.page";
import Products from "../../PageObjectModel/Products.page";
import path from "path";

import productData from "../../utils/productData";



test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")})

test("add product @Integration",async({page})=>{
    const data=productData();

    page.on("dialog",async dialog=>{
        await dialog.accept();
    })
    await page.goto(`${process.env.BASe_URL}/admin/index.php`);

    const LandingPage=new Landing(page);
    await LandingPage.addProductLink.click();

    const AddEditProductPage=new AddEditProduct(page);
    await AddEditProductPage.addProductFunctionality(data);
     
    await LandingPage.productsLink.click();
    const ProductsPage=new Products(page);
    await ProductsPage.verifyProduct(data);
    
})