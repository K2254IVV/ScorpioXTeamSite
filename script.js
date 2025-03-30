// Переключение вкладок
function showTab(tabName) {
    document.querySelectorAll('.main-panel').forEach(panel => {
        panel.classList.add('hidden');
    });
    document.getElementById(tabName).classList.remove('hidden');

    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Смена темы
document.getElementById('theme-selector').addEventListener('change', function() {
    document.body.className = this.value + '-theme';
    localStorage.setItem('theme', this.value);
});

// Смена языка
document.getElementById('language-selector').addEventListener('change', function() {
    localStorage.setItem('language', this.value);
    location.reload(); // Для простоты - перезагрузка страницы
});

// Загрузка сохранённых настроек
window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.className = theme + '-theme';
    document.getElementById('theme-selector').value = theme;

    const lang = localStorage.getItem('language') || 'ru';
    document.getElementById('language-selector').value = lang;
});
