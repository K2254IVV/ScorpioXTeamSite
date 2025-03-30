// Локализация
const translations = {
    ru: {
        "home": "Главная",
        "downloads": "Загрузки",
        "settings": "Настройки",
        "about": "О нас",
        "our-distros": "Наши дистрибутивы",
        "kaneki-desc": "Тёмный дистрибутив для разработчиков",
        "xortix-desc": "Лёгкий киберпанк-дистрибутив",
        "download": "Скачать",
        "theme": "Тема",
        "language": "Язык",
        "light-theme": "Светлая",
        "dark-theme": "Тёмная",
        "about-text": "Мы создаём Linux-дистрибутивы в стиле 2012 года."
    },
    en: {
        "home": "Home",
        "downloads": "Downloads",
        "settings": "Settings",
        "about": "About",
        "our-distros": "Our Distributions",
        "kaneki-desc": "Dark-themed OS for developers",
        "xortix-desc": "Lightweight cyberpunk distro",
        "download": "Download",
        "theme": "Theme",
        "language": "Language",
        "light-theme": "Light",
        "dark-theme": "Dark",
        "about-text": "We create Linux distros in 2012 style."
    }
};

// Смена языка
function changeLanguage() {
    const lang = document.getElementById('language-selector').value;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
}

// Смена темы
function changeTheme() {
    const theme = document.getElementById('theme-selector').value;
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
}

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

// Инициализация
window.onload = function() {
    // Загружаем тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme + '-theme';
    document.getElementById('theme-selector').value = savedTheme;

    // Загружаем язык
    const savedLang = localStorage.getItem('language') || 'ru';
    document.getElementById('language-selector').value = savedLang;
    changeLanguage();
};
