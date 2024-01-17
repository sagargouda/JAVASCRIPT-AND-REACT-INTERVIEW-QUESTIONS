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
sessionStorage.setItem("cool_secret", 123);
//?? data stored in session storage is removed after closing tab , if i have used local storage data may have been there
