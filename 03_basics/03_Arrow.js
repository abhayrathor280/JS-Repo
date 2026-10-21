const user = {
    username: "Abhay",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Sagar"
user.welcomeMessage()

console.log(this);
/* function chai(){
    let username = "Abhay"
    //console.log(this);
    console.log(this.username);
}
chai() */
/* const chai = function(){
    let username = "Abhay"
    //console.log(this);
    console.log(this.username);
}
chai() */
const chai = () =>{
    username: "Abhay"
    //console.log(this);
    console.log(this.username);
} 
chai() 
const addTwo = (num1,num2) => num1+num2 //return not required in arrow function until curly braces used
const sumOfTwo = (num1,num2) => (num1+num2)
//for obj return
const objReturn = (num1,num2) => ({username:"Abhay"})
console.log(addTwo(3,5));
console.log(objReturn(1,2));