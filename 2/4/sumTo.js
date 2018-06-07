function sumToLoop(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumToRecursion(n) {
    if (n == 1) return 1;
    return n + sumToRecursion(n - 1);
}

function sumToFormula(n) {
    return n * (n + 1) / 2;
}
