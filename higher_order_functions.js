// higher order functions are those functions in javascript that takes another function as a parameter or returned any function to return value

function calc(fun){
    return fun;
}

function fun(){
    console.log("Fun function called")
}

let another_fun = calc(fun)
another_fun();
