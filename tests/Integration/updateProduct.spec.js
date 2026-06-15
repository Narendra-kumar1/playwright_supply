





import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import AddEditProduct from "../../PageObjectModel/AddEditProduct.page";
import Products from "../../PageObjectModel/Products.page";
import path from "path";

import productData from "../../utils/productData";
import updateProduct from "../../utils/updateProduct";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")})

test("add product @Integration",async({page})=>{

    const data=productData()
    const updatedData=updateProduct();

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

    
    const row=await ProductsPage.searchProduct(data);
    await row.first().locator("a").click();

    await AddEditProductPage.updateProduct(updatedData);
    
    await ProductsPage.verifyProduct(updatedData);
    
})