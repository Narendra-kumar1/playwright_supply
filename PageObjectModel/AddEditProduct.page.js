


class AddEditProduct{
    constructor(page){
        this.page=page;
        this.productNameTextField=this.page.getByPlaceholder("Product Name");
        this.priceTextField=this.page.getByPlaceholder("Price");
        this.unitTypeDropDown=this.page.getByLabel('Unit Type');
        this.categoryDropDown=this.page.getByLabel('Category');
        this.EnableRadioButton=this.page.locator('input[value="1"]');
        this.disableRadioBUtton=this.page.locator('input[value="2"]');
        this.descriptioinTextArea=this.page.getByLabel("Description");
        this.addProductBUtton=this.page.getByRole("button",{name:"Add Product"});
        this.updateProductButton=this.page.getByRole('button',{name:"Update Product"})
    }

    async addProductFunctionality(data){
        await this.productNameTextField.fill(data.productName);
        await this.priceTextField.fill(data.price);
        await this.unitTypeDropDown.selectOption(data.unitType);
        await this.categoryDropDown.selectOption(data.category);
        await this.EnableRadioButton.check();
        await this.descriptioinTextArea.fill(data.description);
        await this.addProductBUtton.click();

    }

    async updateProduct(data){
        await this.productNameTextField.fill(data.productName);
        await this.EnableRadioButton.check();
        await this.updateProductButton.click();
    }
}

export default AddEditProduct;