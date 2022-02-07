let url = 'https://type.fit/api/quotes';
let title = document.querySelector('.title');
let text = document.querySelector('.text');

async function getQuotes() {
    const res = await fetch(url);
    const data = await res.json();

    for (key in data) {
        title.textContent += key;
    }


    // text.textContent = data[0].author;



}
getQuotes();