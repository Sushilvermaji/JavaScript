// PRIMITIVE DATA TYPES (By Value)

// 7 Types : String, Number, Boolean, null, undefined, Symbol , BigInt


// NON-PRIMITIVE (By Refernce)

// Array, Objects, Functions

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

const bigNumber = 4343452366648883835n

const heroes = ["Shaktimaan", "Batman", "IronMan"] // dataype bytype of object

let MyObj = {
    name :" Sushil",
    age : 22,
}

const MyFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof MyFunction)

//  MEMORY

// STACK(Primitve) and HEAP (Non Primitive)

let YoutubeChannel = "HiteshChaudhary"
newYoutubeChannel = YoutubeChannel
newYoutubeChannel = "Chai aur Code"

console.log(YoutubeChannel);

console.log(newYoutubeChannel);


let u1 = {
    name : "sushil Verma"
}

let u2 = u1
u2.name = "Vivek "

console.log(u1.name);

console.log(u2.name)


