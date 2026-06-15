


class Order{
    constructor(page){
        this.page=page;
        this.searchDropDown=this.page.locator("#cmbFilter");
        this.searchTextField=this.page.locator("#txtId");

    }
    
}

export default Order;