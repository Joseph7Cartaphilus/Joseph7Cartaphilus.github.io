document.addEventListener("DOMContentLoaded", function () {
    // Получаем кнопку и элементы, которые нужно перевести
    var button = document.getElementById('language-toggle1');
    var englishElements = document.querySelectorAll('.english');
    var russianElements = document.querySelectorAll('.russian');

    // Добавляем обработчик события клика на кнопку
    button.addEventListener('click', function () {
        // Переключаем классы элементов, чтобы переключить язык
        englishElements.forEach(function (element) {
            element.classList.toggle('hidden');
        });
        russianElements.forEach(function (element) {
            element.classList.toggle('hidden');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Получаем кнопку и элементы, которые нужно перевести
    var button = document.getElementById('language-toggle2');
    var englishElements = document.querySelectorAll('.english');
    var russianElements = document.querySelectorAll('.russian');

    // Добавляем обработчик события клика на кнопку
    button.addEventListener('click', function () {
        // Переключаем классы элементов, чтобы переключить язык
        englishElements.forEach(function (element) {
            element.classList.toggle('hidden');
        });
        russianElements.forEach(function (element) {
            element.classList.toggle('hidden');
        });
    });
});