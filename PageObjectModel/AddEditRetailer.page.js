


class AddEditRetailer{
    constructor(page)
    {
        this.page=page;
        this.username=this.page.getByPlaceholder("Username")
        this.password=this.page.getByPlaceholder("Password")
        this.areaCode=this.page.getByLabel("Area Code")
        this.phone=this.page.getByPlaceholder("Phone")
        this.email=this.page.getByPlaceholder("Email")
        this.address=this.page.getByPlaceholder("Address")
        this.addRetailerButton=this.page.getByRole("button",{name:"Add Retailer"});
        this.updateRetailerButton=this.page.getByRole('button',{name:"Update Retailer"});

    }


    async addRetailerFunctionality(data){
        await this.username.fill(data.username)
        await this.password.fill(data.password)
        await this.areaCode.selectOption("560010 (ban)");
        await this.phone.fill(data.phone);
        await this.email.fill(data.email);
        await this.address.fill(data.address);
        await this.addRetailerButton.click();
    }

    async updateRetailer(data){
        await this.username.fill(data.username);
        await this.updateRetailerButton.click();
    }
}

export default AddEditRetailer;