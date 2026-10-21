const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(1);
console.log(arr); 
console.log(arr.includes(9));
console.log(arr.indexOf(3));

const newArr = arr.join();
console.log(arr);
console.log(newArr);
console.log(typeof newArr);

// slice and splice
console.log("A",arr);;
const myn1 = arr.slice(1,3);
console.log("B",myn1);

const myn2 = arr.splice(1,3);
console.log("C",myn2);
console.log("D",arr); 