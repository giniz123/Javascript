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

// class Person {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//   }

//   bio() {
//     return `Hey this is ${this.name} and I live in ${this.add}`;
//   }

//   nameUpper() {
//     this.name = this.name.toUpperCase();
//   }
// }

// const ginizObj = new Person("Giniz", "Melbourne");
// ginizObj.nameUpper();
// console.log(ginizObj.bio());

// =========== 4 Pillars of OOP

// ======= Encapsulation / Abstraction

// const ginizobj = {
//   name: "Giniz",
//   add: "Melbourne",
//   DOB: "1-1-2000",
// };

// class Person {
//   #DOB;  // Abstraction=> Abstracting DOB
//   constructor(obj) {
//     this.name = obj.name;
//     this.add = obj.add;
//     this.#DOB = obj.DOB;
//   }

//   bio() {
//     return `This is ${this.name} from ${
//       this.add
//     } and I am ${this.#getAge()} years old`;
//   }

//   #getAge() {
//     return new Date().getFullYear() - new Date(this.#DOB).getFullYear();
//   }

//   birthday() {
//     return `Happy birthday ${this.name}! Now you're ${
//       this.#getAge() + 1
//     } years old`;
//   }
// }

// const user1 = new Person(ginizobj);
// console.log(user1.bio());
// console.log(user1.birthday());
// console.log(user1.DOB);
// console.log(user1.getAge());

// Inheritance

// class Living {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//   }
//   bio() {
//     return `This is ${this.name} from ${this.add}`;
//   }
// }

// class Person extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);
//     this.career = obj.career;
//   }

//   jobcareer() {
//     return `their career is ${this.career}`;
//   }
// }

// const p1 = {
//   name: "Giniz",
//   add: "Melbourne",
//   career: "Software Developer",
// };

// const p1obj = new Person(p1);
// console.log(p1obj.bio());
// console.log(p1obj.jobcareer());

// class Animal extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);
//     this.strength = obj.strength;
//   }

//   action() {
//     return `their strength is ${this.strength}`;
//   }
// }

// const dog = {
//   name: "Marshal",
//   add: "Kathmandu",
//   strength: "to bark and chase theif",
// };

// const marshalobj = new Animal(dog);
// console.log(marshalobj);

// Polymorphism

// class Student extends Person {
//   constructor(obj) {
//     super(obj);
//   }
//   jobcareer() {
//     return `They are currently ${this.career}`;
//   }
// }

// const s1 = {
//   name: "John",
//   add: "Brisbane",
//   career: "Studying IT",
// };

// const s1obj = new Student(s1);
// console.log(s1obj);
// console.log(s1obj.jobcareer());

// More about ====== Abstraction

// class Living {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//     if (new.target === Living) {   // Abstracting
//       throw new Error(
//         "Living is abstracted. You cannot access it and neither can create any instance from it"
//       );
//     }
//   }

//   bio() {
//     return `This is ${this.name} from ${this.add}`;
//   }
// }

// class Person extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);
//     this.career = obj.career;
//   }

//   jobcareer() {
//     return `their career is ${this.career}`;
//   }
// }

// const p1 = {
//   name: "Giniz",
//   add: "Melbourne",
//   career: "Software Developer",
// };

// const p1obj = new Person(p1);
// console.log(p1obj.bio());
// console.log(p1obj.jobcareer());

// const newLivingObj = new Living(p1.name, p1.add);
// console.log(newLivingObj.bio());

// OOP Challenges

// class Car {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//     this.engineOn = false;
//   }

//   startEngine() {
//     if (!this.engineOn) {
//       this.engineOn = true;
//       return `You have turned your car on`;
//     } else {
//       return `Your car is already on`;
//     }
//   }

//   drive() {
//     if (this.engineOn) {
//       return `You can drive now!`;
//     } else {
//       return `You have to start your engine before driving`;
//     }
//   }

//   stopEngine() {
//     if (this.engineOn) {
//       return `Your engine has stopped`;
//     } else {
//       return `You have to start your engine first to stop it!`;
//     }
//   }
// }

// const carTesla = new Car("Tesla", "Y");
// // console.log(carTesla);
// console.log(carTesla.startEngine());
// console.log(carTesla.drive());
// console.log(carTesla.stopEngine());

// ===================== Functional Programming
// It doesn't change the original function/ It doesn't mutate the main function

// 1. Separation of Concerns
// 2. Immutable Data

// const person = Object.freeze({
//   name: "Giniz",
//   career: "Software Developer",
// });

// const newPerson = { ...person, name: "Ram" };

// console.log(person);
// console.log(newPerson);

// Pure Function => always gives same o/p or no side effect
// Pure function is independent which means it only relies in itself and
// doesn't contain any reference from outside

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 3));
// console.log(add(2, 3));
// console.log(add(2, 3));
// console.log(add(2, 3));

// Impure Function OR Non-pure function

// let total = 0;
// const add = (a, b) => {
//   total = a + b;
//   return total;
// };

// console.log(add(2, 3));
// console.log(add(2, 3));
// console.log(add(2, 3));

// First class function OR Higher order function
// [].map(()=>{}) => array methods/loops are higher order function itself
/* In higher order function => Passing function as a parameter */

/* *************************   Example   ******************************* */

/*

const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (val, exponential) => {
  return Math.pow(val, exponential);
};

const mainFunction = (func, a, b) => {
  return func(a, b);
};

console.log(mainFunction(add, 5, 8));
console.log(mainFunction(substract, 5, 8));

console.log(multiply(3, 3));

*/

/* In higher order function => Calling one function inside another function */

/* *************************   Example   ******************************* */

/*

const main = (a, b) => {
  const total = a + b;
  const power = (exp) => {
    return Math.pow(total, exp);
  };
  return power;
};
const result = main(2, 3);
console.log(result(2));

*/

// Composition Function => combination of multiple function

const add = (a, b) => {
  return a + b;
};

const multiply = (val, exp) => {
  return Math.pow(val, exp);
};

const calculator = (a, b, c) => {
  return multiply(add(a, b), c);

  // OR

  // const adder = add(a, b);
  // const result = multiply(adder, c);
  // return result;
};

console.log(calculator(4, 4, 2));
