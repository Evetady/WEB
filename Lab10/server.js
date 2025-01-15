//Запустите свою первую программу, сохраненную в js-файле
const os = require('os');
let userName = os.userInfo().username

console.log(userName)

setInterval(() => {
    console.log('Выполняюсь каждую секунду.')
}, 1000)

setTimeout(() => {
    console.log('Задержка выполнения 5 сек.')
}, 5000)

