const marvel_heros= ["ironman" , "Spiderman" , "Thor"]

const dc_heros = ["Superman" , "Flash", "WonderWoman"]

// marvel_heros.push(dc_heros) // does not need to store in new aray 

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

let allheros = marvel_heros.concat(dc_heros) // need  new array to return value
// console.log(allheros);

let new_all_heros =   [...marvel_heros, ...dc_heros];

// console.log(new_all_heros); // spred property by usinf this we add many array together 

let another_array = [3,4,[4,5], 5, 7,9,[3,[4,6]],11]



let original_another_array = another_array.flat(2)
// console.log(original_another_array);

console.log(Array.isArray("Verma"));

console.log(Array.from("Verma"));

console.log(Array.from({name : "Sushil Verma"}));  // Interesting case

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));









