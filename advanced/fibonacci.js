function fib(max) {
    var x = 0;
    var y = 1;
    var fib = 0;
    console.log(x + " ");
    console.log(y + " ");

    for (var i = 2; i < max; i++) {
        fib = x + y;
        console.log(fib + " ");

        x = y;
        y = fib;
    }
}

fib(30);
