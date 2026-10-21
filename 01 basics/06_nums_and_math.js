const balance = 1000;

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.123456789
console.log(otherNumber.toPrecision(5));    
const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));

// *********MATH OBJECT********* //
console.log(Math);
console.log(Math.abs(-55));
console.log(Math.round(2.4));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));

console.log(Math.min(2,3,4,5,6,7,8));
console.log(Math.max(2,3,4,5,6,7,8));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10));
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);