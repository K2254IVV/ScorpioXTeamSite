function showTab(tabName) {
    // Скрываем все панели
    document.querySelectorAll('.main-panel').forEach(panel => {
        panel.classList.add('hidden');
    });

    // Показываем выбранную
    document.getElementById(tabName).classList.remove('hidden');

    // Обновляем активную кнопку
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}
