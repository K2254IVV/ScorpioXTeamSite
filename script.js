// Смена темы
function changeTheme() {
    const theme = document.getElementById('theme-selector').value;
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme); // Сохраняем в localStorage
}

// Смена языка (заглушка — можно подключить i18n)
function changeLanguage() {
    const lang = document.getElementById('language-selector').value;
    alert('Язык изменён на: ' + lang); // В реальном проекте тут будет перевод
    localStorage.setItem('language', lang);
}

// Загрузка сохранённых настроек при загрузке страницы
window.onload = function() {
    // Тема
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme + '-theme';
    document.getElementById('theme-selector').value = savedTheme;

    // Язык
    const savedLang = localStorage.getItem('language') || 'ru';
    document.getElementById('language-selector').value = savedLang;
};
