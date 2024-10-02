function fibonacci(i) {
    if (i <= 1) {
        return i;
    }
    return fibonacci(i - 1) + fibonacci(i - 2);
}

for (var i = 0; i < 30; i++) {
    console.log(fibonacci(i));
}