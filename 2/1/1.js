var age = prompt('Ваш возраст?','');

if (checkAge_1(age)) {
    alert('Вот ваш билет!');
} else {
    alert('Не продам!');
}

age = prompt('Ваш возраст, молодой человек?','');

if (checkAge_2(age)) {
    alert('Проходите!');
} else {
    alert('Стоять!');
}
