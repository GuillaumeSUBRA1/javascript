function list() {
    console.log("##### liste de 20 nombres entiers #####\n");
    const integers = [];
    for (var i = 0; i <= 20; i++) {
        integers.push(i);
    }
    even(integers);
    odd(integers);
    min(integers);
    max(integers);
    multiple_of(integers, 3);
    multiple_of(integers, 4);
    multiple_of(integers, 5);
    sum(integers);
    mean(integers);
    reverse(integers);
    separatevarwo(integers);
    console.log("##### liste de 20 nombres entiers #####\n");


    function even(l) {
        console.log("tous les items pairs de la liste = " + l.filter((i) => i % 2 == 0));
    }

    function odd(l) {
        console.log("tous les items impairs de la liste = " + l.filter((i) => i % 2 == 1));
    }

    function min(l) {
        console.log("plus petit item de la liste = " + Math.min.apply(null, l));
    }

    function max(l) {
        console.log("plus grand item de la liste = " + Math.max.apply(null, l));
    }

    function multiple_of(l, x) {
        console.log(
            "tous les items multiples de " + x + " de la liste = " + l.filter((i) => i % x == 0));
    }

    function sum(l) {
        console.log("somme des items de la liste = " + l.reduce((a, b) => a + b));
    }

    function mean(l) {
        console.log("moyenne de la liste = " + l.reduce((a, b) => a + b) / l.length);
    }

    function reverse(l) {
        const list = [...l];
        console.log("liste inversée = " + list.reverse());
    }

    function separatevarwo(l) {
        console.log("liste moitié 1 = " + l.slice(0, l.length / 2) + " | liste moitié 2 = "
            + l.slice(l.length / 2, l.length));
    }
}

list();