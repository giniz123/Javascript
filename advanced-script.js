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
let counter = 0;
for (var i = 0; i < 5; i++) {
  function print() {
    console.log(`${i} but counter is ${counter++}`);
  }
  setTimeout(print, 0);
}
