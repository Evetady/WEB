//Калькулятор любви
function getUserName(title) {
    return prompt(title + " (введите ваше имя):");
}

function getRandomPercentage() {
    return Math.floor(Math.random() * 101);
}

function calculateLoveConvergence() {
    const firstName = getUserName("Введите ваше имя:");
    const secondName = getUserName("Введите имя вашего партнера:");
    const result = getRandomPercentage();

    const message = `${firstName} подходит к ${secondName} на ${result} процентов!`;
    console.log(message);
    alert(message);
}

//BMI Калькулятор
function getUserMeasurement() {
    const weight = parseFloat(prompt("Введите вес в килограммах: "));
    const height = parseFloat(prompt("Введите рост в метрах: "));
    return { weight, height };
}

function calculateBMI(userMeasurement) {
    const { weight, height } = userMeasurement;
    return weight / (height * height);
}

function determineBMICategory(bmi) {
    if (bmi <= 18.5) {
        return "Недостаточный вес";
    } else if (bmi <= 25) {
        return "Нормально";
    } else if (bmi <= 30) {
        return "У вас излишек веса";
    } else {
        return "Ожирение";
    }
}

function calculateAndDisplayBMI() {
    const userMeasurement = getUserMeasurement();
    const bmi = calculateBMI(userMeasurement);
    const category = determineBMICategory(bmi);

    console.log(`Ваш индекс массы тела (BMI): ${bmi.toFixed(2)}`);
    console.log(`Категория: ${category}`);

    alert(`Ваш индекс массы тела (BMI): ${bmi.toFixed(2)}\nКатегория: ${category}`);
}

//Является ли год високосным?
function getUserYear() {
    return parseInt(prompt("Введите год: "), 10);
}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true; // високосный год, если делится на 400 без остатка
    } else if (year % 100 === 0) {
        return false; // не високосный год, если делится на 100 без остатка
    } else if (year % 4 === 0) {
        return true; // високосный год, если делится на 4 без остатка
    }
    return false; // не високосный год
}

function calculateLeapYearStatus() {
    const userYear = getUserYear();
    const isLeap = isLeapYear(userYear);

    console.log(`${userYear} - ` + (isLeap ? "високосный год" : "не високосный год"));

    alert(`${userYear} - ` + (isLeap ? "високосный год" : "не високосный год"));
}

//Кто оплачивает ужин?
function getUserNames() {
    return prompt("Введите имена (через пробел) для оплаты ужина: ").split(' ');
}

function pickRandomName(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function calculateDinnerPayer() {
    const names = getUserNames();
    const payer = pickRandomName(names);

    console.log(`Оплачивать будет ${payer}`);

    alert(`Оплачивать будет ${payer}`);
}