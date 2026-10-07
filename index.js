let phones = ["Iphone15", "Iphone13", "Samsungs23", "Pixel 10"];

console.log(phones);
phones.shift();
console.log(phones);
phones.unshift("Redmi 14");
console.log(phones);

if (phones.includes("Redmi 15")) {
  console.log("Redmi 15: R15");
} else {
  console.log("Out of stock");
}
