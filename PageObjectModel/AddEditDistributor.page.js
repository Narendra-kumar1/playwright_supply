



class addEditDistributor{
    constructor(page){
        this.page=page;
        this.name=this.page.getByPlaceholder("Name");
        this.email=this.page.getByPlaceholder("Email")

        this.phone=this.page.getByPlaceholder("Phone")
        this.address=this.page.getByPlaceholder("Address")
        this.addDistributorButton=this.page.getByRole("button",{name:"Add Distributor",exact:true})

        this.updateDistributorButton=this.page.getByRole('button',{name:"Update Manufacturer"});
    }
    async addDistributorFunctionality(data){

        await this.name.fill(data.name);
        await this.email.fill(data.email)
        await this.phone.fill(data.phone);
        await this.address.fill(data.address);
        await this.addDistributorButton.click();

    }
    async updateDistributorFunctionality(data){
        await this.name.fill(data.name);
        await this.email.fill(data.email);
        await this.updateDistributorButton.click();
    }
}

export default addEditDistributor