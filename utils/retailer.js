// {

//     "username":"Retailer",
//     "password":"12345",
//     "phone":"7894561230",
//     "email":"retailer@gmail.com",
//     "address":"banglore location"
// }
import { faker } from "@faker-js/faker"
//import CredentialsData from "./credentialsData";
function RetailerData(){
    let data={}
    data.username=faker.person.firstName();
    data.password=`${Math.round(Math.random()*1000000)}`;
    data.phone=`9${faker.string.numeric(9)}`
    data.email=faker.internet.email();
    data.address=faker.location.streetAddress();
    if(data.username.length<5){
        data.username+="abcd"
    } 
    //CredentialsData({...data,type:"Retailer"});
    return data;
}

export default RetailerData;