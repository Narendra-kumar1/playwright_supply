

import {expect} from "@playwright/test"

class Distributors{
    constructor(page){
        this.page=page;
        this.DistributorRows=this.page.locator('//table[@class="table_displayData"]//tr');
    }
    async searchDistributor(data){
        const row=await this.DistributorRows.filter({has:this.page.getByText(data.name,{exact:true})});
        return row;
    }
    async verifyDistributor(data){
                
        const row=await this.searchDistributor(data);
        await expect(row).toBeVisible();
    }
    
}
export default Distributors;