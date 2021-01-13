function subtract(num1, num2){
    return num1 - num2;
}

console.log(subtract(43,18));

function welcome(name, age, gender){
    return console.log(`My name is ${name}, I am ${age} years old and I am a ${gender}`);
}

welcome("Keith chegwin", 20, "Bloke");

powerUp = (n1, n2) => Math.pow(n1, n2);
console.log(powerUp(3, 4));

distanceCalc = (n1, n2) => Math.sqrt(n1**2 + n2**2);
console.log(distanceCalc(3, 4));