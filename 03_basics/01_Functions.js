function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result  = addTwoNumbers(5, 10);
console.log("result: ",result);

function loginUserMessage(username){
    if(username === undefined || !username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Abhay"));
console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,500,300)) 

const user = {
    username: "Abhay",
    price: 199
}
function usernameprice(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

usernameprice(user);

usernameprice({
    username: "Sagar",
    price: "399"
}
)

const newArray = [200,500,300,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,200,300,400,500]));

