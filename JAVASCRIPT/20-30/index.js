//!! 21
//todo
// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });

//?? Hmm.. You don't have an age I guess , the reason you will understand if you know primitve an dobject types , here primitives compared by their value , objects are compared by their refrence , so the 2 objects we are comparing don't have that , the object we passed as parameter refers to doiffrent location in memory than object we used in order to check their equality

//!! 22
//todo
// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);
//?? it is indeed object , you will understand this when you know about argumnents object

//!! 23
//todo
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();

//?? we get refrence error , if we don't use use strict it woudl work

//!! 24
//todo
// const sum = eval("10*10+5");
//?? answer = 105 because eval evealutes code that is passed as string so it evaluates it expression as string and rteturns a number 105

//!! 25
//todo how long does coold_secret accessible
// sessionStorage.setItem("cool_secret", 123);
//?? data stored in session storage is removed after closing tab , if i have used local storage data may have been there

//!! 26
//todo
// var num = 8;
// var num = 10;

// console.log(num);
//?? answer is 10 as var keyword we can decalre multiple variable with same name

//!! 27
//todo
// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty("1");
// obj.hasOwnProperty(1);
// set.has("1");
// set.has(1);

//?? true , true , false , true beacuse all object keys excluding symbols are strings , so even if don't type it will convert as string but for set it doesn't work that way it has numberic type not string type

//!! 28
//todo
// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);
//??  {a:"three",b:"two"} because if i have 2 keys with same name the key will replaced . it will still be in its first position but with last specified value

//!! 29
//todo  The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.
//?? true
