// primitive
// string, Number, Boolean,etc see from lecture


const outsideTemp = null
let userEmail; // undefined
const id = Symbol('123')
const anotherId  = Symbol('123')

console.log(id ===anotherId);
const bigNumber = 64862482387463466374544n
console.log(typeof bigNumber);
const heros = ["skt", "tag","og"];
let myObj = {
    name: "Abhay",
    age: 22,
}
let myYoutubeName = "AbhayRathorIITR"

let anotherName = myYoutubeName
anotherName  = "Legit"
console.log(myYoutubeName);
console.log(anotherName);

let userOne  = {
    name: "Abhay",
    email: "abhay@google.com"
}

let userTwo  = userOne

userTwo.email = "Legit@google.com"
console.log(userOne.email);
console.log(userTwo.email);
