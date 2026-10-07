let items = [
    {
  name: "s23", model: "Samsung", price: 25, quantity: 1
},
  {
    name: "Redmi 15", model: "Xiaomi", price: 10, quantity: 2
  }

]

function product(item){
  return item
}

function amountDue(items){
  return items[0].price * items[0].quantity + items[1].price * items[1].quantity
}

console.log(product(items))
console.log(amountDue(items))


// function amountDue(price, quantity){
//   return price * quantity;
// }
// console.log(amountDue(2, 5))

//
// let phones = ["Iphone15", "Iphone13", "Samsungs23", "Pixel 10"];

// console.log(phones);
// phones.shift();
// console.log(phones);
// phones.unshift("Redmi 14");
// console.log(phones);

// if (phones.includes("Redmi 15")) {
//   console.log("Redmi 15: R15");
// } else {
//   console.log("Out of stock");
// }
