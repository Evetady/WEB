// Подключаем пакет axios для выполнения HTTP-запросов
const axios = require('axios');
const path = require('path');

// Настройка сервера для обслуживания статических файлов
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/weather-data', (req, res) => {
  const weatherData = require('./data').currentWeather;
  res.json(weatherData);
});

// Настройка статических файлов
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});