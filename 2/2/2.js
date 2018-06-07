var firstNumber = prompt('Введите первое число:', '');
var secondNumber = prompt('Введите второе число:', '');

alert('Меньшее число: ' + min(firstNumber, secondNumber));

function min(a, b) {
    return a < b ? a : b;
}