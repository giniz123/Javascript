/*console.log("Hello World");
alert("Hi there, click ok to continue");*/

// ========== variable (let, var, const) (can only be char, num, $ _)

// one way to define variable

// var name = "Giniz Osti";

// another way
// var name; // Creating or defining varialbe
// name = "Giniz Osti"; // assigning value of variable

// let add = "Melbourne";

// console.log(name, add);

// name = "John";

// const age = 20;

// age = 15; // cannot override the age data, it is const variable

// console.log(age);

// let firstName= "Giniz";  most used one (Camelcase)
// let FirstName= "Giniz";
// let FIRSTNAME= "Giniz";
// let firstname= "Giniz";

// ===== Arthimetic Operator
// let a = 5;
// const b = 6;
// const c = b;

// + Addition
// const result = a + b + c;

// - Subtraction
// const result = a - b;

// * Multiplication
// const result = a * b;

// ** exponentiation
// const result = a ** b;

// / division
// const result = a / b;

// // modulus division
// const result = a % b;

// ++ increment
// a++;
// -- decrement
// a--;

// console.log(a--);
// console.log(a);

// Math Object
// const answer = Math.PI;  => Math properties

//1. Math.round (4,7);
//const answer = Math.round(4.7);
//const answer = Math.round(4.4);

// 2. Math.pow(8,2);
// const answer = Math.pow(8, 2);
// const answer = Math.pow(3, 3);

// 3. Math.sqrt(64);
// const answer = Math.sqrt(64);

// 4. Math.ceil(4.4);
// const answer = Math.ceil(4.4);

// 5. Math.floor(4.9);
// const answer = Math.floor(4.9);

// 6. Math.min(0, 150, 30, 20, -8, -200)
// const answer = Math.min(0, 150, 30, 20, -8, -200);

// 7. Math.max(0, 150, 30, 20, -8, -200)
// const answer = Math.max(0, 150, 30, 20, -8, -200);

// 8. Math.random();
// const answer = Math.random(); //gives number between 0 to 1 i.e 0.9342423423...3
// console.log(answer)

// const result = Math.round(randomNumber);

// ====== Comparisons Operator
// ==
//===
//>, >=
//<, <=

// const v1 = 5;
// const v2 = 5;

// const result = v1 == v2;
// const result = v1 === v2;

// const result = v1 > v2;
// const result = v1 >= v2;
// const result = v1 < v2;
// const result = v1 <= v2;

// console.log(result);

// ======JS data types

// String "Giniz Osti"; // Other way===> '', ``
// const value = "Giniz Osti";

// Number // 1234
// const value = 1234;

// Boolean // True or False
// const value = false;

// Undefined // Not defined in system memory
// const value = undefined;

// Null // defined in system memory
// const value = null;

// console.log(typeof value, value);

// let user = "Giniz";
// console.log(user);

// const u1 = user;
// console.log(u1);

// user = "John";
// console.log(user);
// console.log(u1);

// Reference Types
// Object

// const user = {
//   fName: "Giniz",
//   num: 34,
// };
// console.log(user);

// const u1 = user;
// console.log(u1);

// user.fName = "Sam";
// console.log(user);
// console.log(u1);

// ===============   Data Manipulation

// Number / 0-9
//  safe number range ===> -2^53-1 to 2^53-1
// const num = 3_213_244_543_543;
// console.log(num);

// const num = "a53.232a";
// // const val = +num;
// // const val = parseInt(num);
// const val = parseFloat(num);
// isNaN(val);

// console.log(typeof val, val, isNaN(val));

// STRING

// a. Escape Character
// const str = `Hi there! I'm "Giniz Osti" and I live in Melbourne`;
// const str = 'Hi there! I\'m "Giniz Osti" and I live in Melbourne';
// console.log(typeof str);
// console.log(str);

// b. Length

// const str = 'Hi there! I\'m "Giniz Osti" and I live in Melbourne';
// console.log(str);

// const val = str.length;

// const val = str.toUpperCase();

// const val = str[42];
// const val = str.charAt(22);
// const val = str.indexOf("e");
// const val = str.lastIndexOf("e");
// const val = str.lastIndexOf("Giniz");

// const val = str.replace("Giniz", "John");
// const val = str.replace("i", "u");
// const val = str.replaceAll("i", "u");

// const val = str.slice(3, 9);
// const val = str.slice(3);
// const val = str.slice(-6, -2);
// const val = str.substring(3, 5);

// const val = str.includes("giniz");  //False
// const val = str.includes("Giniz");  // True

// const val = str.search("Giniz");

// const val = str.trim();

// const val = str.split("i").join("i");

// const val = str.concat(
//   "Hello, we can add as much content as we want",
//   " using concat"
// );

// const val =
//   str + "Hello, we can add as much content as we want" + " using concat";
// console.log(val);

// ============Logical operator
// &&, ||, !, Ternary

// ======= JS Conditional Statements

// 1. If

// Truthy value: True, any number (positive or negative)= 1,2,3 & -1,-2,-3
//  String value= "d", object{}, array[], function()=> {} i.e. Reference data type
// falsy value: False, 0, NaN, empty string= "", null, undefined

// const val = () => {};
// const val = !"hi there";
// console.log(val);

// if (val) {
//   console.log("You pass through the if condition");
// }

// 2. If else
// const age = 30;
// const vip = true;

// if (age < 50) {
//   console.log("Welcome");
// }

// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("You can come inside");
// }

// if ((age >= 18 && age < 50) || vip == true) {
//   console.log("You can come inside");
// } else {
//   console.log("Sorry, you're not allowed to come inside");
// }

// 3. Else if
// if (condition1) {
//   // statement1
// } else if (condition2) {
//   // statement2
// } else if (condition3) {
//   // statement3
// } else {
//   // run default code
// }

// const pet = "cow";

// if (pet === "cat") {
//   console.log("Meow");
// } else if (pet === "dog") {
//   console.log("Whoff");
// } else if (pet === "cow") {
//   console.log("Mowwww");
// } else {
//   console.log("Definitely not an animal");
// }

// // 4. Switch

// const pet = "cow";

// switch (pet) {
//   case "cat":
//     console.log("Meow");
//     break;

//   case "dog":
//     console.log("Whoof");
//     break;

//   case "cow":
//     console.log("Mowww");
//     break;

//   default:
//     console.log("Not an animal");
// }

// Logical Operator
// &&, ||, !, Ternary

// &&, || ===> They are used as a substitute of if condition

// const age = 0;
// const vip = true;

// if (age < 50) {
//   console.log("Welcome");
// }

// age < 50 && console.log("Welcome");

// const val = age || "N/A";
// console.log(val);

// Ternary Operator ===> Used as a substitute of if else or else if condition

// const age = 30;

// age < 50 ? console.log("Welcome") : console.log("Not allowed");

// Array[]
// const val = [
//   "Giniz",
//   232,
//   "Osti",
//   null,
//   undefined,
//   [211, "GinizOsti"],
//   {},
//   () => {},
// ];
// console.log(val);

// Length, push, pop, shift, unshift, toString, join, [], splice, slice, indexOf

// Sort, reverse

// forEach, map

// Filter, reduce, every, find

// const fruit = ["banana", "apple", "orange", "mango"];

// const value = fruit.length;
// const value = fruit[3];

// Adding data in array
// fruit.push("watermelon");
// fruit.unshift("watermelon");
// fruit.splice(2, 0, "watermelon");

// deleting data from array
// const val = fruit.pop();
// const val = fruit.shift();

// const val = fruit.splice(2, 2);
// const val = fruit.slice(2, 4);
// delete fruit[2];
// const val = fruit.toString();
// const val = fruit.toString().split(",");

// const val = fruit.indexOf("mango");
// const val = fruit.includes("mango");
// const val = fruit.join("_");

// console.log(fruit.sort());
// fruit.sort().reverse();
// fruit.reverse();
// console.log(fruit);

// Mostly common Loops used in all programming language

// 1. For Loops

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 2. While loops
// while (condition)

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// 3. do while loops
// do{} while()

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// for (let i = 0; i <= 100; i++) {
//   if (i == 10) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

// ================================================ JS specific loop

// ============ For Of Loops => For arrays
// for (x of cars i.e. iteravals)

// let colors = ["Red", "Orange", "Yellow", "Green", "Blue"];

// for (color of colors) {
//   if (color === "Green") {
//     break;
//   } else {
//     console.log(color);
//   }
// }

// const fruits = ["apple", "banana", "orange", "mango"];
// // console.log(fruits[1]);

// const upperFruit = [];

// for (item of fruits) {
//   upperFruit.push(item.toUpperCase());
//   // console.log(item);
// }
// console.log(upperFruit);

// For Of ==> for string

// const greetings = "Hello World";
// console.log(greetings);

// for (const greet of greetings) {
//   if (greet === " ") {
//     continue;
//   }
//   console.log(greet);
// }

// ================ For each loops

// fruits.forEach();

// const Fruits = ["apple", "banana", "orange", "mango"];

// Fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

// ===== Map loop

// const Fruits = ["apple", "banana", "orange", "mango"];
// const newarray = Fruits.map((fruit, index) => {
//   // console.log(index, fruit);
//   // return "SKU :" + fruit.toUpperCase();
//   if (fruit.includes("n")) {
//     return fruit;
//   }
// });

// console.log(newarray);

// ======= Filter loop
// const Fruits = ["apple", "banana", "orange", "mango"];

// const newData = Fruits.filter((item, i) => {
//   // if (item.includes("n")) {
//   //   return true;
//   // }

//   return item.includes("n");
// });

// const newData = Fruits.filter((item, i) => item.includes("n"));

// console.log(newData);

// ============== Reduce() loop // Mostly used for totaling numbers in array

// const money = [10, 345, 56, 3245, 5467, 3456, 435673];

// const total = money.reduce((acc, item) => {
//   return acc + item;
// }, 1000);

// console.log(total);

//==================== Every()

// const Fruits = ["apple", "banana", "orange", "mango"];

// const result = Fruits.every((item) => {
//   console.log(item);
//   return item.includes("a");
// });

// console.log(result);

// Another example:

// const money = [10, 345, 56, 3245, 5467, 3456, 435673];

// const result = money.every((amount) => {
//   return amount >= 10;
// });

// console.log(result);

// Way of checking if the item exists in array or not
// ============= First way => Includes() => gives boolean value
// const money = [10, 345, 56, 3245, 5467, 3456, 435673];

// const result = money.includes(10);
// console.log(result);

// =========== Second way => Find() => gives exact item we're looking for

// const result = money.find((item) => {
//   return item === 56;
// });

// const result = money.find((item) => item === 56);

// ============ Third way => Indexof() => gives the index of the item in array

// const result = money.indexOf(56);

// console.log(result);

// ========== JS array Challenges
// 0-1 where 1 is exclusive means that it doesn't come anytime and 0 is inclusive

// const newArray = [];

// for (i = 0; i < 50; i++) {
//   const result = Math.floor(Math.random() * 100) + 1;

//   // newArray.push(result);
//   newArray[i] = result;
// }
// newArray.sort((a, b) => b - a).reverse();
// console.log(newArray);

// const total = newArray.reduce((acc, item) => {
//   return acc + item;
// }, 0);
// const total = newArray.reduce((acc, item) => acc + item, 0);
// console.log(total);

// const evenArray = newArray.filter((item) => {
//   // if (item % 2 === 0) {
//   //   return true;
//   // }

//   return item % 2 === 0;
// });

// const evenArray = newArray.filter((item, index) => item % 2 === 0);
// const oddArray = newArray.filter((item, index) => item % 2 === 1);
// const oddArray = newArray.filter((item, index) => item % 2 !== 0);
// console.log(evenArray, oddArray);

// const uniqueArray = [];
// for (i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }

// // // JS data manipulation

// Object{}

// const person = {
//   name: "Jack Hammer",
//   phNo: 888999777,
//   address: "Melbourne",
//   isMarried: undefined,
//   hasPet: true,
//   skills: ["html", "css", "javascript", ["flexbox", "grid-system"]],
//   gender: null,
//   parent: {
//     father: "ABB",
//     mother: "BAA",
//   },
//   bio: () => {
//     return "Hi there!";
//   },
// };
// How to read through objects

// const newData = person.name;
// const newData = person["name"];
// const newData = person.skills[1];
// const newData = person.skills[3][1];
// const newData = person.parent["mother"];
// const newData = person.bio();

// person.name = "Giniz";

// console.log(person);
// console.log(newData);

// how to update and add attributes/properties in object
// person["name"] = "Ram";
// person.name = "Ram";
// person.height = "173cm";
// person.skills.push("react");
// person.skills[3].push("box-model");

// person.parent.marriageDate = "2020";

// console.log(person);

// Delete data from object

// person.phNo = null;
// person.phNo = undefined;
// delete person.phNo;

// first method to delete array from array
// person.skills.pop(3);

// 2nd method to delete array from array
// person.skills[3].splice(0, 2);
// person.skills.splice(3, 1);

// best practices

// console.log(person);

// Destructuring: const {name}= obj

// Default
// person.room = undefined;
// const {
//   name,
//   phNo,
//   parent: { father, mother },
//   room = "N/A",
// } = person;

// console.log(name, phNo, father, mother, room);

// Rest
// const { name, phNo, parent, ...rest } = person;

// console.log(rest);

// Spread

// const career = {
//   jobTitle: "Software Engineer",
//   salary: 100,
// };

// const combo = {
//   ...person,
//   ...career,
// };
// console.log(combo);

// for in loop for object
// for (key in person) {
//   console.log(key, person[key]);
// }

// Converting object into array
// object.entries{sourceObject}

// To get both keys and values (properties) in an array, we use entries

// const personArg = Object.entries(person);
// console.log(personArg);

// To only get keys in an array, we use keys

// const personArg = Object.keys(person);
// console.log(personArg);

// To only get values in an array, we use values

// const personArg = Object.values(person);
// console.log(personArg);

// Date Manipulation / Date Object

// const date = new Date();

// console.log(date.getTime());

// Date challange : Create a function that takes a
// food and the expire date and retuns one of the followings:
// 1. if expired: AB is expired 4 days ago
// 2. if not expired: you have 10 days to use this product.

// const foods = [
//   {
//     foodName: "Tuna",
//     expireDate: "2025-11-09",
//   },
//   {
//     foodName: "Noodle",
//     expireDate: "2025-11-15",
//   },
// ];

// const checkExpiry = ({ foodName, expireDate }) => {
//   const currentTime = new Date().getTime();
//   const expireTime = new Date(expireDate).getTime();
//   const timeDiff = expireTime - currentTime;
//   const dayDiff = Math.floor(timeDiff / (24 * 60 * 60 * 1000));

//   if (dayDiff < 0) {
//     return `${foodName} is expired ${Math.abs(dayDiff)} days ago`;
//   } else {
//     return `You have ${dayDiff} days to use this ${foodName}`;
//   }
// };

// foods.map((food) => {
//   const result = checkExpiry(food);
//   console.log(result);
// });

// ============= JS Function

// creating function

// function introduceYourself(name, location) {
//   const str = `Hello there, this is ${name} and welcome to ${location} `;

//   console.log(str);
// }

// function greet(name = "user") {
//   console.log(`Good Morning ${name}`);
// }

// greet("Giniz");
// greet();

// =========== Examples- creating function that gives area of reactangle

// function areaOfRectangle(length = "l", breadth = "b") {
//   let area = length * breadth;
//   return area;
// }

// console.log(areaOfRectangle(2, 3));

// ES6 function OR arrow function

// const introduceYourself = (name, location) => {
//   const str = `Hello there, this is ${name} and welcome to ${location} `;

//   console.log(str);
// };

// introduceYourself("Giniz", "Sydney");
// introduceYourself("Josh", "Melbourne");
// introduceYourself("Geoff", "Brisbane");

// Understanding of multiple functions working together

const people = [
  {
    name: "Giniz",
    location: "Melbourne",
    interest: "Coding and learning new things ",
    hobby: "watching soccer",
  },
  {
    name: "Joseph",
    location: "Brisbane",
  },
  {
    name: "Louis",
  },
];

const remainingDetails = ({ interest, hobby }) => {
  return `and I like ${interest} and love ${hobby}`;
};

const intros = ({ name, location = "Hidden", ...rest }) => {
  let about = `${name} is from ${location}`;
  if (rest.interest) {
    about += remainingDetails(rest);
  }
  return about;
};

people.forEach((element, index) => {
  console.log(intros(element));
});
