const marvel_heros = ["Ironman", "Thor", "SpiderMan"];
const dc_heros = ["Batman", "Superman", "Wonder Woman"];
marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][0]); 

console.log(marvel_heros.concat(dc_heros));
const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);

const another_array = [1, 2, 3, 4, 5,[6,7,8],9,[10,[11,12]]];
console.log(another_array.flat(Infinity));

console.log(Array.isArray("Abhay"));
console.log(Array.from("Abhay"));
console.log(Array.from({name : "Abhay"})); //****//


let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
console.log(Array.of(score1, score2, score3, score4));