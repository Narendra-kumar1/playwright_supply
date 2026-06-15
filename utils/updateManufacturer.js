


// {"name":"Raja kumar","email":"raj@gmail.com"}

import { faker } from "@faker-js/faker";


function updateManufacturer(){
    let data={}
    data.name=faker.person.firstName();
    data.email=faker.internet.email();
    if(data.name.length<5){
        data.name+="abcd"
    }

    return data;

}

export default updateManufacturer;