function if_elseif_else() {
    var x = 2;
    if (x === 1) {
        console.log(x);
    } else if (x < 1) {
        console.log(0);
    } else {
        console.log(x++);
    }
}

if_elseif_else();