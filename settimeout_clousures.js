for (var index = 0; index < 5; index++) {
    function New(x){
        setTimeout(() => {
            console.log(x)
        }, x * 1000);
    }
    New(index)
}

for (var index = 0; index < 5; index++) {
        setTimeout(() => {
            console.log(x)
        }, index * 1000);
}
