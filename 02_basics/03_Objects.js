 // singleton //
//object.create() //

// object literal //


const mySym = Symbol("key1");
const Jsuser = {
    Full_name : "Abhay",
    age : 22,
    location : "India",
    email : "abhay@example.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"],
    [mySym] : "MyKey1"
};
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["Full_name"]);
console.log(Jsuser[mySym]);
console.log(typeof Jsuser[mySym]);   

Jsuser.email = "abhay@chatgpt.com";
/* Object.freeze(Jsuser); // freeze the object */
Jsuser.email = "abhay@newdomain.com";
console.log(Jsuser);

Jsuser.greeting  = function(){
    console.log("Hello Jsuser");
}
Jsuser.greetingTwo  = function(){
    console.log(`Hello Jsuser, ${this.Full_name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());