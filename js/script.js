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
    }

}

function changeImages(min, max) {
    let rund = Math.floor(Math.random() * (max - min) + min);
    image.src = `./images/${rund}.jpg`;

}

button.addEventListener('click', function (e) {
    const x = e.clientX; //добавляем декор для кнопки
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);


    changeImages(1, 6);
    getQuotes();
});