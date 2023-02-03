console.log("start")

// This means settimeout execute after the main thread is empty or call stack empty this means the settimeout callback function won't run after 2000 milliseconds but it ready to execute after 2000 milliseconds but after that the event loop watching the call stack to be empty or not if the call stack is empty the callback functions will be pushed on the callstack and then it execute 
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