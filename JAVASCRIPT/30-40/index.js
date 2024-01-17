//!!31
//todo
// String.prototype.giveSagarPizza = () => {
//   return "Just give sagar pizza already!";
// };

// const name = "sagar";

// console.log(name.giveSagarPizza());

//?? just give sagar pizza already , so here string is a built in function which i can add properties to , i just added a method to it's prototype priumitve stringsare automatically cvonverted into string object

//!! 32
//todo
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
//?? here object keys are automatically converted to strings so i am setting object key to object a with value 123; when we stringify an object it becomes  "[object Object]" so a["[object Object]"] = 123 and a["[object Object]"] = 456 , so when i log a[b] which is a["[object Object]"] , we see 456
