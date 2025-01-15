const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Инициализация приложения
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Настройка парсера тела для обработки данных POST-запросов
app.use(bodyParser.json());

// Обработка ошибок 404 и 400
app.use((err, req, res, next) => {
  if (err.status === 404) {
    return res.status(404).json({ error: 'Not Found' });
  } else if (err.status === 400) {
    return res.status(400).json({ error: 'Bad Request' });
  }
});

// GET /api/users - возвращает список пользователей
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
    { id: 3, name: 'Alice Johnson', role: 'Project Manager' }
  ];
  return res.json(users);
});

// GET /api/users/:id - динамический запрос
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: 'Not Found' });
  }
  return res.json(user);
});

// POST /api/users - создание нового пользователя
app.post('/api/users', (req, res) => {
  const { name, role } = req.body;
  const id = Math.floor(Math.random() * 1000);
  const createdAt = new Date().toISOString();
  const user = { id, name, role, createdAt };
  return res.json(user);
});

// Запуск сервера на порту 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});