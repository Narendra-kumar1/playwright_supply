



class AddEditManufacturer{
    constructor(page){
        this.page=page;
        this.name=this.page.getByLabel("Name",{exact:true});
        this.email=this.page.getByPlaceholder("Email");
        this.phone=this.page.getByPlaceholder("Phone");
        this.username=this.page.getByPlaceholder("Username",{exact:true});
        this.password=this.page.getByLabel("Password");
        this.AddManufacturerButton=this.page.getByRole("button",{name:"Add Manufacturer"});

        this.updateManufacturerButton=this.page.getByRole("button",{name:"Update Manufacturer"});
    }

    async AddManufacturerFunctionality(data){
        await this.name.fill(data.name);
        await this.email.fill(data.email);
        await this.phone.fill(data.phone);
        await this.username.fill(data.username);
        await this.password.fill(data.password);
        await this.AddManufacturerButton.click();
    }
    async updateManufacturer(data){
        await this.name.fill(data.name)
        await this.email.fill(data.email);
        await this.updateManufacturerButton.click();
    }
}

export default AddEditManufacturer;