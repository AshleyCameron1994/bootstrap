'use strict';

let darthVader ={allegiance : "dark side", weapon : "lightsbare", sith : true};
console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is the ${darthVader.weapon}`);
console.log(`Darth Vader is a sith yes? ${darthVader.sith}`);

let myArray = ["hello", "everyone"];
console.log(myArray.length);

console.log(myArray.push("how", "are", "you"));
console.log(myArray.shift());
console.log(myArray);


for (eachElement of myArray) {
    console.log(eachElement);
    }







