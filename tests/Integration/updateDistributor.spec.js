












import {test} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import addEditDistributor from "../../PageObjectModel/AddEditDistributor.page";
import Distributors from "../../PageObjectModel/Distrbutors.page";
import path from "path";

//import updateDistributorData from "../../test-data/updateDistributor.json"

import distributorData from "../../utils/distributor";
import updateDistributor from "../../utils/updateDistributor";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")});

test("update distributor @Integration",async({page})=>{

    const data=distributorData();
    const updateDistributorData=updateDistributor();
   // console.log(data,updateDistributorData)

    page.on("dialog",async dialog=>{
        await dialog.accept()
    })
    await page.goto(`${process.env.BASE_URL}/admin/index.php`);
   // const data=distributorData();
    
    const LandingPage=new Landing(page);
    await LandingPage.addDistributorLink.click();
    
    const addEditDistributorPage=new addEditDistributor(page);
    await addEditDistributorPage.addDistributorFunctionality(data);

    await LandingPage.distributorsLink.click();
    
    const DistributorsPage=new Distributors(page);

    const row=await DistributorsPage.searchDistributor(data);
    await row.locator("a").click();

    await addEditDistributorPage.updateDistributorFunctionality(updateDistributorData);

    await DistributorsPage.verifyDistributor(updateDistributorData);
})