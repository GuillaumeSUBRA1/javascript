let value = 0;

function plus() {
    value++;
    document.getElementById("value").innerText = "value : " + value;
}

function moins() {
    value--;
    document.getElementById("value").innerText = "value : " + value;
}