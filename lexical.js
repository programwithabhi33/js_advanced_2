var a = 10;
function abhi(){
    abhi3();
    function abhi3(){
        abhi4();
        function abhi4(){
            abhi5();
            function abhi5(){
                console.log(a)
            }
        }
    }
}
abhi();