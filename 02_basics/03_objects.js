// singletons
// we create object bu two methods by literal and constructor 
// By literal method, singletons is not formed 
// BUT, by constructor signletons is formed

// LITERAL METHOD 

const mySym  = Symbol("myKey")

let JSobj = {
    name : "Sushil",
    "fullname" : "Sushil Verma",
    [mySym] : "myKey",
    age : 22,
    location : "Greater Noida",
    email : "vsushil446@gmail.com",
    isLogin : false

}

// console.log(JSobj.name);
// console.log(JSobj["fullname"]);
console.log(JSobj[mySym]);

JSobj.email = "awazsachki653@gmail.com"

Object.freeze(JSobj)

JSobj.email = "ankur79106@gmail.com"
console.log(JSobj);



