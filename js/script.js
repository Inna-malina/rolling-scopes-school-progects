let url = 'https://type.fit/api/quotes';
let title = document.querySelector('.title__description-main');
let text = document.querySelector('.text__description-main');
let button = document.querySelector('.main__button_contaner');
let image = document.querySelector('.image__main-images');

async function getQuotes() {
    const res = await fetch(url);
    const data = await res.json();

    let rand = Math.floor(Math.random() * data.length);
    let elem = data[rand];

    for (key in elem) {
        title.textContent = elem.text;
        text.textContent = elem.author;
        console.log(elem.text);
        console.log(elem.author);
    }

}

function changeImages(min, max) {
    let rund = Math.floor(Math.random() * (max - min) + min);
    image.src = `./images/${rund}.jpg`;
    console.log(rund);
}


button.addEventListener('click', function () {
    changeImages(1, 6);
    getQuotes();
});