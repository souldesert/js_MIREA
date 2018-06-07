var user = detect.parse(navigator.userAgent);

if(user.browser.family == 'IE') {
    alert('О, да у вас IE!');
} else if (user.browser.family == 'Chrome'
    || user.browser.family == 'Firefox'
    || user.browser.family == 'Safari'
    || user.browser.family == 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем');
} else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
}
