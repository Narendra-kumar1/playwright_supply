


class Landing{
    constructor(page){
        this.page=page;
        this.addProductLink=this.page.getByRole("link",{name:"Add Products"});
        this.addRetailerLink=this.page.getByRole("link",{name:"Add Retailers"});
        this.addManufacturerLink=this.page.getByRole("link",{name:"Add Manufacturer"})
        this.addDistributorLink=this.page.getByRole("link",{name:"Add Distributor"});
        this.manageUnitLink=this.page.getByRole("link",{name:"Manage Unit"});
        this.manageCategoryLink=this.page.getByRole("link",{name:'Manage Category'});
        this.manageAreaLink=this.page.getByRole("link",{name:'Manage Area'})

        this.productsLink=this.page.getByRole("link",{name:"Products",exact:true});
        this.manufacturersLink=this.page.getByRole("link",{name:"Manufacturers",exact:true})
        this.distributorsLink=this.page.getByRole("link",{name:"Distributors",exact:true})
        this.retailersLink=this.page.getByRole("link",{name:"Retailers",exact:true})

        this.logoutButton=this.page.getByRole("button",{name:"Log out"});
    }
}

export default Landing;