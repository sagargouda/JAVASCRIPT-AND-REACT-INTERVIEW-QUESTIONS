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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//!! 3) promise
//?? js is a synchronous language but callback function make it asynchronous and promises help us to get out of callback helll

//?? how promises are created  ?
//?? when promise is created , there are 2 outcomes fullfilled or rejected , when promises are not fullfilled or rejected they will be in a pending state ,
//?? promises are fulfilled with a value , that value can be further processed (when the value is also promise )
//?? promises are rejected with a reason that caused them to be rejected

//?? how promise looks
const promise = new Promise((resolve, reject) => {
  // resolve or reject
});

//?? promise has 3 method (then , catch and finally ) they all can be used once it is settled in resolved or rejected sate.

//?? then = this will be called either when promise is rejected or resolved depeding on state appropriate callback fucntion is called

//?? catch (on rejected function) = this will be called when promise is rejected

//?? finally (on finallly fucntion) =  this will be called evrry time after then and catch

//todo working of a promise (creating a promise that will resolve after 5 seconds)

// let promises = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hey sagar");
//   }, 5000);
// });

// promises.then((val) => {
//   console.log(val);
// });

//todo we can also chain promises

// promises
//   .then((val) => {
//     return "HOLA" + val;
//   })
//   .then((val) => {
//     console.log(val);
//   });

// todo attacghing finally

// promises
//   .then((val) => {
//     return "HOLA" + val;
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .finally(() => {
//     console.log("task is done");
//   });

//todo rejecting a promise after 5 seconds

// const sagar = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("400 error ");
//   }, 5000);
// });

// sagar
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// sagar
//   .catch((err) => err)
//   .then((val) => {
//     console.log("I am chained with" + val);
//   });

//todo promise helper methods

// Promise.resolve("I am resolved").then((val) => console.log(val));

// Promise.reject("I am rejected ").catch((err) => console.log(err));

//!! Async and await

// const promises = Promise.resolve("I am resolved");

// async function example(promises) {
//   try {
//     const resp = await promises;
//     console.log(resp);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("Task done");
//   }
// }
// example(promises);

//todo : fucntion decalred with async keyword returns a promise

// const promises = Promise.resolve("I am resolved");

// const example = async (promises) => {
//   try {
//     const resp = await promises;
//     console.log(resp);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("Tasks are done finally ");
//   }
// };

// example(promises).then((val) => {
//   console.log(val);
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//!! 4)
//todo
// function sayHello() {
//   console.log(name);
//   console.log(age);

//   var name = "sagar";
//   let age = 21;
// }
// sayHello();

//?? undefined , refrence error

//!! 5)
//todo
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

//?? 3,3,3  0,1,2
//?? reason = here var is global scoped during loop we increament i by 1 each time here due to set timeout is kept in web api space , the for loop is given more priotiy so loop runs fast and i becomes 3 and when set timeout logs i became 3 , so 333 but let has it's own scope as they are block scoped during each iteration i will have a new value and each value is scoped inside loop

//!! 6)
//todo
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());
//?? 20 , NaN because arrow fucnitons don't have their own this keywrod , so what happens is this keyword in arrow fucnitons refers to it's current surrounding scope so it doesn't refer to shape object but surrounding scope window for eaxmple here

//!! 7)
//todo
+true; //1
+"sgaar"; // NAN
!"hero"; //false

//?? so here + opeartor converts anything to number so it results 1 , so true is 1 , false is 0 and
//?? here hero is a truthy value and we are asking is truthy value false it obvi says false , beacause truthy value can't be false
