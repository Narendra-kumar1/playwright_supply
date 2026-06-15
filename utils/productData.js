


import { faker } from "@faker-js/faker";

function productData() {
  const bakeryItems = [
    "Cream Bun",
    "Chocolate Cake",
    "Black Forest Cake",
    "Vanilla Cupcake",
    "Red Velvet Cake",
    "Fruit Cake",
    "Swiss Roll",
    "Muffin",
    "Donut",
    "Brownie"
  ];

  const productName = faker.helpers.arrayElement(bakeryItems);

 let data= {
    productName: productName,
    price: faker.number.int({ min: 10, max: 500 }).toString(),
    unitType: "PCS",
    category: "Bread Buns",
    description: `Freshly baked ${productName}`
  };

  return data;
}

export default productData;