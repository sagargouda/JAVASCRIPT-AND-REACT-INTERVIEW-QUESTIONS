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
//Todo
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

//?? in javascript , function are just objects , so method getFullname gets added to constrcutp fucntion object itself . for that reason we can call person.getfullname() and member.getfullname throws typeerror
