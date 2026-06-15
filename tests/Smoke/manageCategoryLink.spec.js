






import {test,expect} from "@playwright/test"
import Landing from "../../PageObjectModel/Landing.page";
import path from "path"

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")})

test("Manage Category link @Smoke",async({page})=>{

    await page.goto(`${process.env.BASE_URL}/admin/index.php`);

    const LandingPage=new Landing(page);
    await LandingPage.manageCategoryLink.click();
    
    await expect(page).toHaveURL(`${process.env.BASE_URL}/admin/view_category.php`);
})