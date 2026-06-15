// array

const myArr = [0,1,2,3,4,5,true,"Verma"]

const heroes = ["shaktiman" , "superman", "batman"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr);

// Array method

myArr.push(6)


// myArr.pop()
// console.log(myArr);


myArr.unshift(9) // to insert value at the first
// console.log(myArr);


myArr.shift() // delete value from the starting
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // bind  array and turn into string


// console.log(newArr);

// console.log(myArr);


console.log("A " + myArr);

let mn1 = myArr.slice(1,3)
console.log(mn1);

console.log("B " + myArr);


let mn2 = myArr.splice(1,3) // its manipulate original array
console.log(mn2);

console.log(myArr);









