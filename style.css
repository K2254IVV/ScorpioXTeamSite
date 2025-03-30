/* Основные стили */
body {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    padding: 0;
    background: #000;
    color: #333;
    transition: all 0.3s ease;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Панели */
.header-panel, .nav-panel, .main-panel {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3), 
                inset 0 1px 1px rgba(255,255,255,0.5);
}

.header-panel {
    text-align: center;
    background: linear-gradient(to bottom, #f8f8f8, #e0e0e0);
}

/* Навигация */
.nav-panel {
    display: flex;
    gap: 10px;
}

.nav-button {
    background: linear-gradient(to bottom, #4a6da7, #2a4a7a);
    border: none;
    border-radius: 6px;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    box-shadow: 0 2px 3px rgba(0,0,0,0.3);
    transition: all 0.2s ease;
    flex: 1;
    text-align: center;
}

.nav-button:hover {
    background: linear-gradient(to bottom, #5a7db7, #3a5a8a);
}

.nav-button.active {
    background: linear-gradient(to bottom, #6a8dc7, #4a6a9a);
}

/* Карточки дистрибутивов */
.distro-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.distro-card {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
}

.distro-card:hover {
    transform: translateY(-5px);
}

.distro-logo {
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
}

/* Загрузки */
.download-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.download-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 8px;
}

.distro-logo-small {
    width: 50px;
    height: 50px;
}

/* Настройки */
.settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.settings-card {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
}

.settings-item {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.settings-item label {
    margin-right: 10px;
}

.settings-footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
}

/* Переключатели */
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 24px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: #4a6da7;
}

input:checked + .slider:before {
    transform: translateX(26px);
}

/* Кнопки */
.glossy-button {
    background: linear-gradient(to bottom, #6aad4a, #4a8d2a);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease;
}

.glossy-button:hover {
    background: linear-gradient(to bottom, #7abd5a, #5a9d3a);
}

/* Тёмная тема */
body.dark-theme {
    background: #111;
    color: #eee;
}

body.dark-theme .header-panel,
body.dark-theme .nav-panel,
body.dark-theme .main-panel {
    background: #333;
    color: #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

body.dark-theme .distro-card,
body.dark-theme .download-item,
body.dark-theme .settings-card {
    background: #444;
}

body.dark-theme .header-panel {
    background: linear-gradient(to bottom, #444, #222);
}

/* Утилиты */
.hidden {
    display: none;
}

#settings-status {
    color: #6aad4a;
    font-size: 14px;
}
