let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ", a)
}
console.log(a);
//console.log(b);
//console.log(c); YE PRINT HOJAYEGA STILL BCOZ OF VAR

function one(){
    const username = "Abhay"
    function two(){
       const website = "youtube.com"
        console.log(username);
    } 
   //console.log(website);
    two()
}
one();

if(true){{
    const username = "abhay"
    if(true){
        const website = "'s youtube channel"
        console.log(username+website);
    }
   //console.log(website);
}}

// ******** INTERESTING ********//

console.log(addone(5)); //**** THIS WILL NOT GIVE ERROR FUNCTION CALLED BEFORE DEFINING****
function addone(num){
    return num+1
}
//console.log(addTwo(5)); ***THIS WILL GIVE ERROR***
const addTwo = function(num){
    return num+2
}

console.log(addTwo(5));