
import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import addEditDistributor from "../../PageObjectModel/AddEditDistributor.page";
import Distributors from "../../PageObjectModel/Distrbutors.page";
import path from "path";


import distributorData from "../../utils/distributor";


test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});

test("add Distributor @Integration",async({page})=>{

    const data=distributorData();

    page.on("dialog",async dialog=>{
        await dialog.accept()
    })
    
    await page.goto(`${process.env.BASE_URL}/admin/index.php`);
    
    
    const LandingPage=new Landing(page);
    await LandingPage.addDistributorLink.click();
    
    const addEditDistributorPage=new addEditDistributor(page);
    await addEditDistributorPage.addDistributorFunctionality(data);

    await LandingPage.distributorsLink.click();

    const DistributorsPage=new Distributors(page);
    await DistributorsPage.verifyDistributor(data);
})