'use strict';


// the == only checks if the values are the same, it doesn't care about the data type of the object

console.log(1 == "1"); // returns true

console.log(1 == [1]); // returns true

console.log("1" == [1]); // returns true


//using === will check if the VALUE and the data type are the same 

console.log(1 === "1"); // returns false

console.log(1 === [1]); // returns false

console.log("1" === [1]); // returns false



let age = 10;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
}

let busAge = 10;
let ageCheck = busAge > 65 ? "OAP" : "gotta pay for your bus fare then";
console.log(ageCheck);
