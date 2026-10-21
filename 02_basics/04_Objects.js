//const tinderUser = new Object();
const tinderuser = {}
tinderuser.id = "123abc";
tinderuser.name = "Abhay";
tinderuser.isLoggedIn = false;
tinderuser.age = 22;
tinderuser.email = "abhay@example.com";
//console.log(tinderUser);

const regularUser = {
    email : "some@example.com",
    fullName : {
        userFullName : {
            firstName : "Abhay",
            lastName : "Rathor"
        }
    }
}
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};
//const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id : 1,
        email : "some@example.com"
    },
    {
        id : 1,
        email : "some@example.com"
    },
    {
        id : 1,
        email : "some@example.com"
    },
    {
        id : 1,
        email : "some@example.com"
    }
]
console.log(users[1].email)
console.log(tinderuser);

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName : "JavaScript",
    price : 299,
    courseInstructor : "Abhay Rathor"
}
// destructuring
//course.courseInstructor = "Abhay Rathor";

const {courseInstructor: instructor} = course;
//console.log(courseInstructor);
console.log(instructor);




