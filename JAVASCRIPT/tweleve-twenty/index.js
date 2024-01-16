//!! 12)
//TODO
// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);
//?? ANSWER IS {} , beacuse we created an empty object in global scope which means greetign is assigned as window.greetign = {} , to avoid this we use 'use strict'

//!! 13)
//Todo
// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";

//?? fucntion are objects only we can do this

//!! 14)
// //Todo
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

//?? in javascript , function are just objects , so method getFullname gets added to constrcutp fucntion object itself . for that reason we can call person.getfullname() and member.getfullname throws typeerror

//!! 15)
//todo
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const sagar = new Person("sagar", "reedy");
// const arjun = Person("arjun", "singh");

// console.log(sagar);
// console.log(arjun);
//?? Person {firstName: "Lydia", lastName: "Hallie"} and undefined

//?? here for reddy we didn't use new keyword , when we use new , this refers to the new empty object we create , when we don't add new , this refers to global object. so when this.firstname = "arjun" and this.lastname = "singh" which means global.firstname = "arjun" and global.lastname = "singh" so arjun is left undefined since we don't return value from person fcuntion.

//!! 16
//todo  what are 3 phases of event propagtion
//?? capturing > target > bubbling , so during capturing phase the event goes through anscestoir elements down to target element and it reaches to target element and then bubbling begins

//!! 17
//todo) all object have prototypes
//?? true and false both because all objects have prototypes except for base object , base object is root of prottype chain and is automatically created by js runtime , base object is Object.prototype , so base object is like blueprint or templateb for other objects. it serves as root of prototype chain, providing set of common properties and methods that are inherited by all objects in language , when i crfeate objects , they inherit form base project and this inheritance a protype chain

//!! 18
//todo
// function sum(a, b) {
//   return a + b;
// }

// sum(1, "2");
//?? 12 (coercion is converting one type to another)

//!! 19
//todo
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

//?? 0,2,2

//!! 20
//todo
// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = "sagar";
// const age = 23;

// getPersonInfo`${person} is ${age} years old`;

//?? ["", " is ", " years old"] "sagar" 23
//?? so here the logic is wghen we send template literals the value of first argunent is always an array of string values and remaining arguements get value of passded expresion
