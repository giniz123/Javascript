// Hoisting
// Moving variables or function declarations to the top of their context
// How and where you create a variable determines the hoisting

// var x = "ww";
// function f() {
//   var x = "a";

//   console.log(x);

//   if (true) {
//     var x = "yy";
//     console.log(x);
//   }
//   console.log(x);
// }

// f();

// console.log(x);

// ////// Closure
//  Allowing a function to remember and access it's lexical scope
//  even when it's executing outside it's original scope.

//  A function inside a function can have access to the variable
//  defined in the parent function even parent function finishes executing.

// function f() {
//   let counter = 0;

//   return function () {
//     return counter++;
//   };
// }

// const v1 = f();

// console.log(v1());

// console.log(v1());
// console.log(v1());
// console.log(v1());
// console.log(v1());

// // Interview question for closure and hoisting
// let counter = 0;
// for (var i = 0; i < 5; i++) {
//   function print() {
//     console.log(`${i} but counter is ${counter++}`);
//   }
//   setTimeout(print, 0);
// }

// Object Oriented Programming OOP

// OOP

// const person = {
//   name: "Giniz",
//   address: "Melbourne",
//   bio() {
//     return `This is ${this.name} and I live in ${this.address}`;
//   },
// };

// console.log(person.bio());

// Factory Function

// function personDetail(name, address) {
//   return {
//     name,
//     address,
//     bio() {
//       return `This is ${this.name} and I reside in ${this.address}`;
//     },
//   };
// }

// const leoObj = personDetail("Lionel Messi", "Barcelona");
// console.log(leoObj, leoObj.bio);

// function aboutPerson(name, address) {
//   return {
//     name,
//     address,
//     bio() {
//       return `This is ${this.name} and I live in ${this.address}`;
//     },
//   };
// }

// const aboutGiniz = aboutPerson("Giniz", " Melbourne");
// console.log(aboutGiniz, aboutGiniz.bio());

// const aboutSam = aboutPerson("Sam", "USA");
// console.log(aboutSam, aboutSam.bio());

// Constructor Function

// function AboutPerson(name, location) {
//   this.name = name;
//   this.location = location;
// }

// AboutPerson.prototype.bio = function () {
//   return `This is ${this.name} and I live in ${this.address}`;
// };

// const ginizObj = new AboutPerson("Giniz", "Melbourne");
// console.log(ginizObj);

//  Class OOP

class Person {
  constructor(name, add) {
    this.name = name;
    this.add = add;
  }

  bio() {
    return `Hey this is ${this.name} and I live in ${this.add}`;
  }

  nameUpper() {
    this.name = this.name.toUpperCase();
  }
}

const ginizObj = new Person("Giniz", "Melbourne");
ginizObj.nameUpper();
console.log(ginizObj.bio());
