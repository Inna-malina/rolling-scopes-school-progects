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

changeImages(1, 6);
getQuotes();

console.log('На странице есть цитата и кнопка для смены цитаты +5');
console.log('на странице есть цитата и кнопка для смены цитаты +5');
console.log('При загрузке страницы приложения отображается рандомная цитата +10');
console.log('При перезагрузке страницы цитата обновляется (заменяется на другую) +10');
console.log('Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10');
console.log('Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10');
console.log('Можно выбрать один из двух языков отображения цитат: en/ru или en/be **  - не сдалано');
console.log('Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения (добавлены: анимация кнопки, смена изображений при клике на кнопку, декоративный фон, мобильная адаптация) +10');