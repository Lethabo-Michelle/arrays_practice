let customer = {
  fName: "Lethabo",
  amount: 500,
  products:[
    {
      name: "keyboard", model: "Samsung", price: 25, quantity: 1
    },
    {
      name: "mouse", model: "Samsung", price: 10, quantity: 2
    }
  ]
}

function buy(){
  return (me.products[0].price * me.products[0].quantity) + (me.products[1].price * me.products[1].quantity) ;
}

console.log(buy())