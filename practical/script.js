/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

    while (!numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilm: function () {
        for (let i = 0; i < 2; i++) {
            let lastFilmWatched = prompt('Один из последних просмотренных фильмов? Введите (exit) для выхода ', '')


            if (!lastFilmWatched || lastFilmWatched.length > 50) {
                alert('Последний просмотренный фильм не должен быть пустым или содержать больше 50 символов')
                i--
                continue
            }

            let ratingLastFilmWatched = prompt('На сколько оцените его? Введите (exit) для выхода ', '')

            if (!ratingLastFilmWatched) {
                alert('Рейтинг не может быть пустым')
                i--
                continue
            }

            this.movies[lastFilmWatched] = ratingLastFilmWatched
        }
    },
    detectPersonalLevel: function () {

        if (this.count < 10) {
            alert('Просмотрено довольно мало фильмов')
        } else if (this.count >= 10 && this.count <= 30) {
            alert('Вы классический зритель')
        } else if (this.count >= 30) {
            alert('Вы киноман')
        } else {
            alert('Ошибка')
        }
    },
    showMyDb: function (hide) {
        if (!hide) {
            console.log(this)
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let loveGenres = prompt(`Ваш любимый жанр под номером ${i}`)
            if (!loveGenres) {
                i--
            } else {
                this.genres.push(loveGenres)
            }

        }
        this.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index+1} - это ${item}`)
        })
    },
    toggleVisibleMyDB: function () {
        this.privat ? this.privat = false : this.privat = true
    }

}


personalMovieDB.rememberMyFilm()


personalMovieDB.detectPersonalLevel()

personalMovieDB.writeYourGenres()


console.log(personalMovieDB)