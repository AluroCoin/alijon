// Функция для переключения музыки
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = 'Выключить музыку';
    } else {
        backgroundMusic.pause();
        musicToggle.textContent = 'Включить музыку';
    }
});

// Функция для управления запросом в техподдержку
const supportButton = document.getElementById('support-button');
const supportForm = document.getElementById('support-form');
const sendSupportButton = document.getElementById('send-support');

supportButton.addEventListener('click', () => {
    supportForm.style.display = supportForm.style.display === 'block' ? 'none' : 'block';
});

sendSupportButton.addEventListener('click', () => {
    const message = document.getElementById('support-message').value;
    if (message) {
        const mailtoLink = `mailto:aluron.coin.tech@gmail.com?subject=Техподдержка&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink; // Открываем почтовый клиент
        supportForm.style.display = 'none'; // Скрываем форму после отправки
        document.getElementById('support-message').value = ''; // Очищаем поле ввода
    } else {
        alert('Пожалуйста, введите сообщение.');
    }
});