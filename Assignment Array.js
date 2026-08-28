//Section 1 – Basic Array Operations
//1. Create and Display an Array
let Fruits= ["Apple","Banana","Mango","Grapes","Pear"]
console.log(Fruits);

//2. Add an Element Using push()
let arr= ["HTML", "CSS"]
arr.push("Java-Script");
console.log(arr);

//3. Remove an Element Using pop()
let arr= ["HTML", "CSS", "JavaScript"]
arr.pop("Java-Script")
console.log(arr);

//4. Remove the First Element Using shift()
let arr = ["Red", "Blue", "Green"]
arr.shift(0)
console.log(arr);

//5. Add an Element at the Beginning
let arr = ["CSS", "JavaScript"]
arr.unshift("HTML")
console.log(arr);

//6. Add Multiple Elements
let arr= ["HTML", "CSS"]
arr.push("Java-Script","React");
console.log(arr);

//7. Remove an Element Using splice()
let arr = ["HTML", "CSS", "JavaScript", "React"]
arr.splice(1,1)
console.log(arr);

//8. Add an Element Using splice()
let arr = ["HTML", "JavaScript"]
arr.splice(1,0,"CSS");
console.log(arr);

//9. Replace an Array Element
let arr = ["HTML", "CSS", "Java"]
arr.splice(2,1,"JavaScript");
console.log(arr);


//10. Extract Part of an Array
let arr= ["HTML", "CSS", "JavaScript", "React", "Node.js"]
let newarr= arr.slice(1,4);
console.log(newarr);

//11. Create a Copy Using slice()
let arr = ["HTML", "CSS", "JavaScript", "React", "Node.js"]
newarr = arr.slice();
console.log(newarr);

//12. Find the Index of an Element
let arr = ["HTML", "CSS", "JavaScript", "React"]
let result=arr.indexOf("JavaScript");
console.log(result);

//13. Find an Element Using indexOf()
let arr =  ["HTML", "CSS", "JavaScript", "React"]
let result=arr.indexOf("React");
console.log(result);

//14. Find an Object Using find()
let students = [
 { name: "Rahul", age: 20 },
 { name: "Priya", age: 22 }
]
let student =students.find(function(student){
       return student.name === "Rahul";
});
console.log(student)

//15. Find an Index Using findIndex()
let users = [
 { name: "Rahul", age: 20 },
 { name: "Priya", age: 22 }
];
let index =users.findIndex(function(user){
      return user.name === "Priya";
});
console.log(index);


//16. Flatten a Nested Array
let arr = [1, 2, [3, 4]]
let result=arr.flat()
console.log(result);

//17. Flatten a Multi-Level Array
let arr =  [1, [2, [3, 4]]]
let result= arr.flat(Infinity);
console.log(result);

//18. Display Every Element Using forEach()
let arr = ["Red", "Green", "Blue", "Black", "White"]
arr.forEach(function(arr){
    console.log(arr);
});

//19. Display Elements with Their Index
let language = ["HTML", "CSS", "JavaScript"]
language.forEach(function(value,index){
    console.log(value,index);
});


//20. Update an Array Using Multiple Methods 
let arr = ["HTML", "CSS", "JavaScript"]
arr.push("React");//1-add
arr.shift(1,0);//2-remove
console.log(arr);//3-display
