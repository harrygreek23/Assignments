//1. Convert Product Names to Uppercase
// const product= ["laptop", "mobile", "headphones"]

// const uppeproduct = product.map((product)=>product.toUpperCase());
// console.log(uppeproduct);

//2. Add a Currency Symbol to Prices
// const price=[100, 250, 500]
// const newprice=price.map((price)=>`₹${price}`);

// console.log(newprice);

//3. Extract User Names
// const User = [
//  { name: "Rahul", email: "rahul@example.com" },
//  { name: "Priya", email: "priya@example.com" }
// ]
// const newuser = User.map((User)=>User.name);
// console.log(newuser);

//4. Create Updated Product Prices
// const price = [100, 200, 300]

// const newprice = price.map((price)=>(price * 1.10).toFixed(0));
// console.log(newprice);

//5. Update Object Data Immutably
// const user = [
//  { name: "Rahul", role: "student" },
//  { name: "Priya", role: "student" }
// ]

// const newuser= user.map((user)=>{
//     return{...user, role: "Developer"}
// } );
// console.log(newuser);


//6. Add a New Property Using map()
// const product = [
//  { name: "Laptop", price: 50000 },
//  { name: "Mouse", price: 500 }
// ]

// const product= product.map((product)=>{
//     return {...product, inStock: true}
// })
// console.log(product);

//7. Display Technologies Using forEach()
// const technologies= ["HTML", "CSS", "JavaScript"]

// technologies.forEach((technologies)=>{
//   console.log(technologies);
// })

//8. Create a New Array Using map()
// const technologies= ["HTML", "CSS", "JavaScript"]

// const result= technologies.map((technologies)=>technologies.toUpperCase())
//    console.log(result);


//9. Format User Names Using map()
const names= ["Rahul", "Priya", "Aman"]
const udated= names.map((names)=>"user :" + names)
   
console.log(udated);



//10. Filter Available Products
// const product = [
//  { name: "Laptop", inStock: true },
//  { name: "Mouse", inStock: false }
// ]
// const Products= product.filter((product)=>product.inStock)
// console.log(Products);


//11. Filter Users by Role
// const user = [
//  { name: "Rahul", role: "developer" },
//  { name: "Priya", role: "student" }
// ]

// const singleuser= user.filter((user)=>{
//     return user.role === "developer";
// });
// console.log(singleuser);

//12. Filter Expensive Products
// const product = [
//  { name: "Mouse", price: 500 },
//  { name: "Keyboard", price: 1500 }
// ]
// const updated= product.filter((product)=>{
//     return product.price > 1000;
// });
// console.log(updated);

//13. Filter Active Users
// const user = [
//  { name: "Rahul", isActive: true },
//  { name: "Priya", isActive: false }
// ]

// const Active= user.filter((user)=>user.isActive)
// console.log(Active);


//14. Filter Gmail Addresses
// const emails = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]
// const newmails= emails.filter((emails)=>{
//     return emails.includes("@gmail.com");
// });
// console.log(newmails);

//15. Calculate the Total Cart Price
const productPrice = [500, 1200, 300]
//type-1
// const total = productPrice.reduce((total, productPrice)=>total +=productPrice )
// type-2
const total = productPrice.reduce((accumulator, productPrice)=>{
     return accumulator + productPrice;
}, 0);


console.log(total);

//16. Count Total Products
// const product = ["Laptop", "Mouse", "Keyboard"]

// const total = product.reduce((accumulator, product)=>{
   
//     return accumulator + 1;
// }, 0);

// console.log(total);


//17. Calculate the Total Quantity
// const cart = [
//  { name: "Laptop", quantity: 1 },
//  { name: "Mouse", quantity: 2 }
// ]
// const totalquantity = cart.reduce((accumulator, cart)=>{
//      return accumulator + cart.quantity;
// }, 0);

// console.log(totalquantity);

//18. Calculate Total Order Amount
// const order = [
//  { amount: 500 },
//  { amount: 1000 },
//  { amount: 750 }
// ]
// const totalamount = order.reduce((accumulator, order)=>{
//     return accumulator + order.amount;
// }, 0);
// console.log(totalamount);


//19. Create a Comma-Separated String
// const technologies= ["HTML", "CSS", "JavaScript"]
// const result = technologies.reduce((accumulator, technologies)=>{
//     return accumulator + ", " + technologies;
// } );
// console.log(result);

// //20. Calculate Final Cart Total
// const cart= [
//  { name: "Mouse", price: 500, quantity: 2 },
//  { name: "Keyboard", price: 1000, quantity: 1 }
// ]
  
// const total = cart.reduce((acc , cart)=>{
//     return acc + (cart.price * cart.quantity);
// } ,0);
// console.log(total);