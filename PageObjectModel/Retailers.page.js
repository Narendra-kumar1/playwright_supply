
import {expect} from "@playwright/test"


class Retailers{
    constructor(page){
        this.page=page;
        this.RetailerRows=this.page.locator('//table[@class="table_displayData"]//tr');
    }
    async searchRetailer(data){
        const row=await this.RetailerRows.filter({has:this.page.getByText(data.username,{exact:true})});
        return row;
    }
    async verifyRetailer(data){
        const row=await this.searchRetailer(data);
        await expect(row).toBeVisible();
    }
}
export default Retailers;