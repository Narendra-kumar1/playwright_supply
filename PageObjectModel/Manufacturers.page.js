
import {expect} from "@playwright/test"

class Manufacturers{
    constructor(page){
        this.page=page;
        this.manufacturersRows=this.page.locator('//table[@class="table_displayData"]//tr');
    }
    async searchManufacturer(data){
        const row=await this.manufacturersRows.filter({has:this.page.getByText(data.name,{exact:true})});
        return row;
    }
    async verifyManufacturer(data){
        const row=await this.searchManufacturer(data);
        await expect(row).toBeVisible();
    }
   
}

export default Manufacturers;