
let name = "Sushil Verma"
let repo = 5

// console.log(name + repo + "Value")

console.log(`Hello MY name is ${name} and on github my repo is ${repo}`);

const gameName = new String('sush-il Verma') // another method of declaring of String

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newName = gameName.substring(0,4)
console.log(newName);

const slicName = gameName.slice(-5,4)
console.log(slicName)

const name2 = "  Verma  "

console.log(name2);
console.log(name2.trim());

const url = "http://verma.com/sushil%20verma"

console.log(url.replace('%20', '-'))

console.log(url.includes("Verma"))

console.log(gameName.split('-'));








