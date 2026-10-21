const name  = "Abhay"
const repoCount  = 3
console.log(name + repoCount + " Repositories");  
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Abhay-Ra-THOR')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newString = gameName.substring(0,3)
console.log(newString);
console.log(gameName.split('a'));
const anotherString = gameName.slice(-4,3)
console.log(anotherString);
const myString = "    Abhay Rathor    "
console.log(myString);
console.log(myString.trim());
const url = "https://abhayrathor.com/legit%20OP"

console.log(url.replace('%20','-'));

console.log(url.includes('abhay'));
console.log(gameName.split('-')); 