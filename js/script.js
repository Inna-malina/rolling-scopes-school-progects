let url = 'https://type.fit/api/quotes';
let title = document.querySelector('.title');
let text = document.querySelector('.text');

async function getQuotes() {
    const res = await fetch(url);
    const data = await res.json();

    let rand = Math.floor(Math.random() * data.length);
    let elem = data[rand];
    // console.log(data[rand]);

    for (key in elem) {

        title.textContent = elem.text;
        text.textContent = elem.author;
        console.log(elem.text);
        console.log(elem.author);
    }


}
getQuotes();