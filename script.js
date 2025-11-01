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
// const answer = Math.PI;

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
// const answer = Math.random(); //gives number between 0 to 2 i.e 0.9342423423...3
// console.log(answer)

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

// Ternary Operator

const age = 30;

age < 50 ? console.log("Welcome") : console.log("Not allowed");
