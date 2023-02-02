// First class functions in javascript are those function that are treated like variables and pass as arguments to another function or returned from any other function e.g, is given below

let fun = function (){
    console.log("You are fun function")
}

function calc(fun){
    return fun;
}

let another_fun = calc(fun)
another_fun();