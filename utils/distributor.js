


// {
//     "name":"distributor",
//     "phone":"7894561230",
//     "email":"distributor1@gmail.com",
//     "address":"banglore"
// }

import { faker } from "@faker-js/faker"
//import CredentialsData from "./credentialsData";


function distributorData(){
    let data={}
    data.name=faker.person.firstName();
    data.phone=`9${faker.string.numeric(9)}`
    data.email=faker.internet.email();
    data.address=faker.location.streetAddress();
    if(data.name.length<5){
        data.name="dist"+data.name;
    }
    //CredentialsData({...data,type:"Distributor"});

    return data;
}

export default distributorData;