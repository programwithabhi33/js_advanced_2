// console.log("Javascript Hoisting")

// In the first javascript will assign all the variables to undefined and then code execution starts

// In this case javascript will allocate all the variables (only defined variables in the program e.g x) to undefined and in the case of pure functions (pure functions are those functions that are initialised with function keyword and not assigned to any variable) the function itself moved to the memory stack 
console.log(x)

console.log(getName)

let x = 7;

function getName(){
    console.log("Function getName")
}

// ()=>{
//     console.log("Anonimous function")
// }