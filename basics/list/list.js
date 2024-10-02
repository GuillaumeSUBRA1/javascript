function list(){
        const list = [];;
        for (var i = 0; i <= 20; i++) {
            list.push(i);
        }
        size(list);
        first(list);
        last(list);
        even(list);
        odd(list);
        min(list);
        max(list);
        multiple_of(list, 3);
        multiple_of(list, 4);
        multiple_of(list, 5);
        mean(list);
        sum(list);
        reverse(list);
        separatevarwo(list);
    
    function size(l) {
        console.log("taille de la liste = " + l.length);
    }

    function  first( l) {
        console.log("premier item de la liste = " + l[0]);
    }

    function  last(l) {
        console.log("dernier item de la liste = " + l[l.length-1]);
    }

    function  even(l) {
        const pairs = [];
        for (var i = 0; i < l.length; i++) {
            if (i % 2 == 0) {
                pairs.push(i);
            }
        }
        console.log("tous les items pairs de la liste = " + pairs);
    }

    function  odd(l) {
        const impairs = [];
        for (var i = 0; i < l.length; i++) {
            if (i % 2 == 1) {
                impairs.push(i);
            }
        }
        console.log("tous les items impairs de la liste = " + impairs);
    }

    function  min(l) {
        const min = l[0];
        for (var i = 0; i < l.length; i++) {
            if (min>l[i]) {
                min = l[i];
            }
        }
        console.log("plus petit item de la liste = " + min);
    }

    function  max(l) {
        const max = m[0];
        for (var i = 0; i < l.length; i++) {
            if (max<l[i]) {
                max = l[i];
            }
        }
        console.log("plus grand item de la liste = " + max);
    }

    function  multiple_of(l, x) {
        const multiple = [];
        for (var i = 0; i < l.length; i++) {
            if (i % x == 0) {
                multiple.push(i);
            }
        }
        console.log("tous les items multiples de " + x + " de la liste = " + multiple);
    }

    function  mean(l) {
        var mean = 0;
        for (var i = 0; i < l.length; i++) {
            mean += l.at(i);
        }
        console.log("moyenne de la liste = " + mean / l.length);
    }

    function  sum(l) {
        var s = 0;
        for (var i = 0; i < l.length; i++) {
            s += l.at(i);
        }
        console.log("somme des items de la liste = " + s);
    }

    function reverse(l) {
        const list = [...l];
        var size = l.length;
        for (var i = 0; i < size / 2; i++) {
            var t = list.at(i);
            list.splice(i, list.at(size - 1 - i));
            list.push(size - 1 - i, t);
        }
        console.log("liste inversée = " + list);
    }

    function  separatevarwo(l) {
        const first = [];
        const second = [];
        var size = l.length;
        var mid = size / 2;

        for (var i = 0; i < size; i++) {
            if (i < mid) {
                first.push(l.at(i));
            } else {
                second.push(l.at(i));
            }
        }

        console.log("liste moitié 1 = " + first + " | liste moitié 2 = " + second);
    }
}

list();
