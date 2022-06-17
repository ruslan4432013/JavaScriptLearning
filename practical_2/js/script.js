/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


document.querySelector('.promo__adv').remove()

document.querySelector('.promo__genre').innerText = 'ДРАМА'

let promo = document.querySelector('.promo__bg')

promo.style.backgroundImage = 'url("img/bg.jpg")'


let renderFileList = (movieName, index) => {
    return `<li class="promo__interactive-item">${index+1}. ${movieName.toUpperCase()}
                <div class="delete"></div>
            </li>`
}

document.querySelector('.promo__interactive-list').innerHTML = movieDB.movies.map((item, index) => renderFileList(item, index)).sort().join('')