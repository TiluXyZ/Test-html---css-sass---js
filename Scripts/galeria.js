const cruz = document.getElementById('cruz');
const text = document.getElementById('text');
const img = document.getElementById('img');
const title = document.getElementById('title');
const button = document.getElementById('button');
const card = document.getElementById('card');

function testeo(){
    cruz.style.display = 'flex';
    text.style.display = 'flex';
    img.style.display = 'none';
    title.style.display = 'none';
    button.style.display = 'none';
    card.style.padding = '5px 5px 15px';
    text.style.padding = '0 10px';
}

function testeo2(){
    cruz.style.display = 'none';
    text.style.display = 'none';
    img.style.display = 'block';
    title.style.display = 'flex';
    button.style.display = 'block';
    card.style.padding = '15px';
}

button.addEventListener('click', testeo);
cruz.addEventListener('click', testeo2);