function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

var number = prompt('Введите число:', '');
alert(factorial(number));