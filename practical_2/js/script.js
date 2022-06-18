/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promo = document.querySelector('.promo__bg'),
          checkbox = document.querySelector('.add input[type="checkbox"]'),
          form = document.querySelector('.add'),
          input = document.querySelector('.add input')


    document.querySelector('.promo__adv').remove()
    document.querySelector('.promo__genre').innerText = 'ДРАМА'
    promo.style.backgroundImage = 'url("img/bg.jpg")'


    renderFilm()


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        insertFilm(input.value)
        if (checkbox.checked) {
            console.log('Добавляем любимый фильм')
        }
    })

    document.addEventListener("click", e => {
        if (e.target.classList.contains('delete')) {
            let parent = e.target.parentNode
            movieDB.movies.splice(movieDB.movies.indexOf(parent.dataset['name']), 1)
            parent.remove()
            renderFilm()

        }
    })

    function insertFilm(filmName) {
        movieDB.movies.push(filmName)
        renderFilm()
    }

    function renderFilm() {
        let promoList = document.querySelector('.promo__interactive-list')
        promoList.innerHTML = movieDB.movies.sort().map((item, index) => renderFileList(item, index)).join('')
    }

    function renderFileList(movieName, index) {
        let name = movieName.toUpperCase()

        if (name.length > 21) {
            name = name.slice(0, 21) + '...'
        }

        return `<li class="promo__interactive-item" data-name="${movieName}">${index + 1}. ${name}
                <div class="delete"></div>
            </li>`
    }
})

