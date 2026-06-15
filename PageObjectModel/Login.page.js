


class Login{
    constructor(page){
        this.page=page;
        this.username=this.page.getByLabel("Username");
        
        this.password=this.page.getByLabel("Password");
        this.loginType=this.page.getByLabel("Login Type");
        this.loginButton=this.page.getByRole("button",{name:"Login"});
    }

    
    async LoginFunctionality(data,authentication){
        await this.username.fill(data.username);
        await this.password.fill(data.password);
        await this.loginType.selectOption(data.loginType);
        await this.loginButton.click();
    }
}


export default Login;