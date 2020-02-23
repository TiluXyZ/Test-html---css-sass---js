const nav = document.getElementById('nav');
const openImg = document.getElementById('open');
const closeImg = document.getElementById('close');

function openNav(){
    nav.style.marginLeft = '-100px';
    openImg.style.display = 'none';
    closeImg.style.display = 'block';
}

function closeNav(){
    nav.style.marginLeft = '-1000px';
    openImg.style.display = 'block';
    closeImg.style.display = 'none';
}

openImg.addEventListener('click', openNav);
closeImg.addEventListener('click', closeNav);