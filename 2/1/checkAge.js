function checkAge_1(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge_2(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

