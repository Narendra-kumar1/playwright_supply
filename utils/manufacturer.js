


import {faker} from "@faker-js/faker"
//import CredentialsData from "./credentialsData";

function manufacturerData(){
    const data={}
    data.name=faker.person.firstName();
    data.email=faker.internet.email()
    data.phone=`9${faker.string.numeric(9)}`
    data.password=`${Math.round(Math.random()*1000000)}`
    data.username=data.name;
    if(data.name.length<5){
        data.name+="abcd"
        data.username+="abcd"
    } 
    //CredentialsData({...data,type:"Manufacturer"});
    //console.log(data);
  // return {name:"Raj",email:"raj@gmail.com",phone:"7894561230",username:"RajKumar",password:"78945"}
    return data;
}
//manufacturerData()
export default manufacturerData;