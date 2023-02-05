// higher order functions are those functions in javascript that takes another function as a parameter or returned any function to return value

// function calc(fun){
//     return fun;
// }

// function fun(){
//     console.log("Fun function called")
// }

// let another_fun = calc(fun)
// another_fun();


// You can use the higer order function to write less code and extract logic and abstract your code
// radius = [1,2,3,4,5]
// function area(radius){
//     return Math.PI * radius *radius;
// }

// function calculate(radius,logic){
//     let output = [];
//     radius.forEach(element => {
//         output.push(logic(element))
//     });
//     return output;
// }
// console.log(calculate(radius,area))




function area(radius){
    return Math.PI * radius *radius;
}
let radius = [1, 2, 3, 4]
function calculate(logic) {
    console.log(this)
    // let output = [];
    // radius.forEach(element => {
    //     output.push(logic(element))
    // });
    // return output;
}

// You can assign any function to any datatype prototype so you can use this assigned function that datatype's 
Array.prototype.calculate = calculate;
console.log(radius)

radius.calculate(area)




