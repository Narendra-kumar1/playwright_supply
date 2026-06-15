


import { faker } from "@faker-js/faker";

function updateProduct() {
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

  return {
    productName: productName,
  };
}

export default updateProduct;