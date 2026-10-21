let myDate = new Date();
console.log(myDate.toString());
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2003,11,30,10,30);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate =  new Date();
console.log(newDate.toLocaleString('default', {
    weekday: 'long',
}));