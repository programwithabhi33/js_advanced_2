// Clousure mean that you have a function and that function had access of it's outer scope variables and this creates a clousure below is the example of clousure
function abhishek(){
    let c = 10;
    function a(){
        function b(){
            console.log("Inside function b")
            console.log(c)
        }
        console.log("Inside function a")
        console.log(c)
        c = 100;
        b();
    }
    return a;
}

let abhi = abhishek();
abhi();