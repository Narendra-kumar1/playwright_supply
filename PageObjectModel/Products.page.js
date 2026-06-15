
import {expect} from "@playwright/test"

class Products{
    constructor(page){
        this.page=page;
        this.productRow=this.page.locator('//table[@class="table_displayData"]//tr');
    }
    async searchProduct(data){
         const row=await this.productRow.filter({has:this.page.getByText(data.productName,{exact:true})});
         return row;

    }
    async verifyProduct(data){
        const row=await this.searchProduct(data);
        await expect(await row.first()).toBeVisible();
    }

     
}

export default Products;