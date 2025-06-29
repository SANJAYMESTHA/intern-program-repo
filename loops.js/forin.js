//Used to loop through the properties of an object.

//syntax:-
for (let key in object) {
  // code block to be executed
}

//ex:-
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}


/*output:-
name: John
age: 30
city: New York
*/