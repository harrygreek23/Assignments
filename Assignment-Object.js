//1. Create a User Object
// let user ={
//     name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// }

// console.log(user);

//2. Access Object Properties Using Dot Notation
// const product = {
//  name: "Laptop",
//  price: 50000,
//  category: "Electronics",
// };

// console.log(product.name);
// console.log(product.price);

//3. Access Object Properties Using Bracket Notation
// const user = {
//  name: "Rahul",
//  email: "rahul@example.com"
// };

// console.log(user["email"]);

//4. Dynamic Property Access
// const user = {
//  name: "Rahul",
//  email: "rahul@example.com"
// };
// const key = "name";

// console.log(user[key]);

//5. Update an Object Property
// let user = {
//  name: "Rahul",
//  role: "student"
// }
// user.role="developer";
// console.log(user);

//6. Add a New Property
// const profile= {
//  name: "Rahul",
//  email: "rahul@example.com"
// }

// profile.isLoggedIn =true;
// console.log(profile);

//7. Get Object Keys
// const user = {
//  name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// };
// console.log(Object.keys(user));

//8. Get Object Values
// const product = {
//  name: "Laptop",
//  price: 50000,
//  category: "Electronics"
// };
// console.log(Object.values(product));

//9. Get Object Entries
// const settings = {
//  theme: "dark",
//  language: "English",
//  notifications: true
// };
// console.log(Object.entries(settings));

//10. Display Object Entries
// const user = {
//  name: "Rahul",
//  email: "rahul@example.com"
// };

// const result=Object.entries(user);

// result.forEach(function([key,value]){
//     console.log(key,value);
// });

//11. Object Destructuring
// const user = {
//  name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// };
// const {name, email}= user;
// console.log(name);
// console.log(email);

//12. Destructuring with Renaming
// const product = {
//  name: "Laptop",
//  price: 50000
// };
// const {name:productName}= product;
// console.log("ProductName =",productName);


//13. Create an Object Using Shorthand Properties
// const name = "Rahul";
// const email = "rahul@example.com";
// const role = "developer";

// const user ={name, email,role};
// console.log(user);

//14. Destructure Function Parameters
//  displayUser({
//  name: "Rahul",
//  email: "rahul@example.com"
// });

// function displayUser({ name, email }) {
//     console.log(name);
//     console.log(email);
// }


//15. Copy an Object Using Spread
// const user = {
//  name: "Rahul",
//  role: "developer"
// };
 
// const newuser={...user};
// console.log(newuser);

//16. Update an Object Using Spread
// const user = {
//  name: "Rahul",
//  role: "student"
// };

// user.role="developer";

// const newuser={...user};
// console.log(newuser);

//17. Combine Two Arrays Using Spread
// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express"];

// const system=[...frontend, ...backend]

// console.log(system);


//18. Rest Parameters
showSkills("Rahul", "HTML", "CSS", "JavaScript");

function showSkills(username , ...skills){
    console.log("Name:", username);
    console.log("Skills:", skills);
};
console.log(showSkills);
