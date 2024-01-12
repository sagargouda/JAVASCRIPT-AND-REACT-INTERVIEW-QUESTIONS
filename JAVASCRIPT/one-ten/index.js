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

//!! 2) Array.reduce method
//?? array.reduce is method available to perform types of action like adding or aggregation or sepration or seggregation and also running things in a series , here fucntion will be called for each element of array with intial value at beginning and then with the value returned from the last call of same fucntion

//?? how it looks
// app.reduce(callback , intialValue)
//?? if i expand
// app.reduce((previousValue, currentValue, currentIndex, array) => {
//  const nextvalue = previousValue + currentValue;
//  return nextvalue
// },intialValue)

//todo (aggregation or adding)
// const sagar = [1, 2, 3, 4, 5];
// const sum = sagar.reduce((prev, curr) => {
//   let next = prev + curr;
//   return next;
// }, 0);
// here 0 acts as prev , it is not mandatory too
// console.log(sum);

//todo (seggration)
//?? we can also seprate group of elements depending on our requirements

// const arr = [1.1, 1.2, 1.3, 2.1, 2.2, 2.3];

// const seegrri = arr.reduce((prev, curr) => {
//   let floori = Math.floor(curr);
//   if (!prev[floori]) {
//     prev[floori] = [];
//   }
//   prev[floori].push(curr);
//   return prev;
// }, {});

// console.log(seegrri);
