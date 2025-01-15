// Получаем список пользователей
fetch('/api/users')
    .then(response => response.json())
    .then(users => {
        const usersList = document.getElementById('users');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.role}`;
            usersList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching users:', error));

// Обработчик формы создания нового пользователя
document.getElementById('new-user-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвратить перезагрузку страницы

    // Получить данные из формы
    const name = document.querySelector('input[name="name"]').value;
    const role = document.querySelector('input[name="role"]').value;

    // Сделать POST-запрос на сервер для создания пользователя
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, role })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(user => {
            // Успешное создание пользователя, отобразить данные
            const usersList = document.getElementById('users');
            const li = document.createElement('li');
            li.textContent = `New User: ${name} - ${role} - ID: ${user.id}`;
            usersList.appendChild(li);
        })
        .catch(error => {
            console.error('Error creating new user:', error);
        });
});