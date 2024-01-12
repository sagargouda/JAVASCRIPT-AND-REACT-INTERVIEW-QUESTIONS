//!! 1) what is closure
//?? closure is bundling of 2 r more functions where inner functions have access to properties and methods of outer functions even after execution of external fucntion is done or function bundled together with lexical environment
//todo - 1
// function what() {
//   let question = "hey sagar wasuup";
//   function explainQuestion() {
//     console.log(question);
//   }
//   explainQuestion();
// }
// what(); // hey sgaar wassup

//todo - 2

// function sum() {
//   let a = 10;
//   return function add(b) {
//     return a + b;
//   };
// }
// let sumAnswer = sum(); // sumAnswer is a fucntion now
// console.log(sumAnswer(10)); // answrr is 20

//todo-3  (toughest)
// function x(m) {
//   return function y(n) {
//     return function z(q) {
//       return m + n + q;
//     };
//   };
// }

// const a = x(10);
// let b = a(20);
// let c = b(20);
// console.log(c);
