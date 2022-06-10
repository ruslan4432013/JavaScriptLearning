/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


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
    privat: false
}


function rememberMyFilm() {
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

        personalMovieDB.movies[lastFilmWatched] = ratingLastFilmWatched

    }
}

rememberMyFilm()


function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман')
    } else {
        alert('Ошибка')
    }
}

detectPersonalLevel()

function showMyDb(hide) {
    if (!hide) {
        console.log(personalMovieDB)
    }
}

function writeYourGenres() {
    for(let i=1; i <= 3; i++) {
        let loveGenres = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres.push(loveGenres)
    }
}

console.log(personalMovieDB)