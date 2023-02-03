console.log("start")

setTimeout(() => {
    console.log("Callback")
}, 2000);

console.log("end")

let start_date = new Date().getTime();
let end_date = new Date().getTime();

// The below code take 10000 milliseconds to execute (10 seconds)
while(end_date <= start_date + 10000){
    end_date = new Date()
}
console.log("after while loop")