// {

import { faker } from "@faker-js/faker"
 

//     "name":"distributorTop",
//     "email":"top@gmail.com"

// }

function updateDistributor(){
    let data={}
    data.name=faker.person.firstName();
    data.email=faker.internet.email();
    return data;
}

export default updateDistributor;