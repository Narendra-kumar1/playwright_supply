


import {test,expect} from "@playwright/test"
import Order from "../../PageObjectModel/Order.page";
import path from "path";

test.use({storageState:path.join(__dirname,"../../auth/Admin.auth.json")})

test.fail("search the order by wrong search @Adhoc",async({page})=>{
    await page.goto(`${process.env.BASE_URL}/admin/view_orders.php`);
    const OrderPage=new Order(page);
    await OrderPage.searchDropDown.selectOption(" Id ");
    await OrderPage.searchTextField.fill("random");
    await page.keyboard.press("Enter");
    await OrderPage.searchDropDown.selectOption(" Id ");
    await expect(OrderPage.searchTextField).toBeVisible();
})