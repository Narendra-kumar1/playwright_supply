// {
//     "username":"RetailerUpdate"
// }

import { faker } from "@faker-js/faker";



function updateRetailer(){
    let data={};
    data.username=faker.person.firstName();
   
    if(data.username.length<5){
        data.username+="abcd"
    }
     return data;
}

export default updateRetailer;