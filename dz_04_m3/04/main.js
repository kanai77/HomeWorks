const baseURL = "https://api.tvmaze.com";

const xhr = new XMLHttpRequest(); // instance XMLHttpRequest
const movie = document.querySelector('.movies')

xhr.onreadystatechange = (progress) => {
    if (xhr.readyState === 1) {
        setTimeout(() => {
            movie.innerText = 'Запрос открыт!'
        }, 100)
    } else if (xhr.readyState === 2) {
        clearTimeout()
        setTimeout(() => {
            movie.innerText = 'Запрос отправлен!'
        }, 1500)
    } else if (xhr.readyState === 3) {
        clearTimeout()
        setTimeout(() => {
            movie.innerText = 'Loading.......'
        }, 3000)
    } else if (xhr.readyState === 4) {
        clearTimeout()
        const last = setTimeout(() => {
            movie.innerText = 'Запрос получен!'
        }, 6000)
    setTimeout(() => {
        clearTimeout(last)
        movie.innerText = ''
    }, 7000)
    }
}

xhr.onload = (response) => {
    setTimeout(() => {
        const movies = document.querySelector('.movies');
        const data = JSON.parse(response.target.response);

        for (let i = 0; i < data.length; i++) {
            movies.innerHTML += `
   <div>
    <img src="${data[i].image.medium}"/>
    <button><a href="${data[i].url}">${data[i].name}</a></button>
   </div>
  `;
        }
        if (data === true) {

        }
    }, 7000)
}

xhr.open('GET', `${baseURL}/shows?page=1`);
xhr.send()
