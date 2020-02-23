const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const leftArrowCenter = document.getElementById('left-arrow-center')
const rightArrowCenter = document.getElementById('right-arrow-center');
const divLeftArrow = document.getElementById('div-left-arrow');
const divRightArrow = document.getElementById('div-right-arrow');
const divLeftArrowCenter = document.getElementById('div-left-arrow-center');
const divRightArrowCenter = document.getElementById('div-right-arrow-center');
const center = document.getElementById('center');
const left = document.getElementById('left');
const right = document.getElementById('right');

function derecha(){
    divRightArrowCenter.style.display = 'none';
    divLeftArrowCenter.style.display = 'none';
    divLeftArrow.style.display = 'flex';
    right.style.display = 'flex'
    center.style.display = 'none';
}

function izquierdaCentro(){
    divRightArrowCenter.style.display = 'flex';
    divLeftArrowCenter.style.display = 'flex';
    divLeftArrow.style.display = 'none';
    right.style.display = 'none'
    center.style.display = 'flex';   
}

function izquierda(){
    divRightArrowCenter.style.display = 'none';
    divLeftArrowCenter.style.display = 'none';
    divRightArrow.style.display = 'flex';
    left.style.display = 'flex'
    center.style.display = 'none';
}

function derechaCentro(){
    divRightArrowCenter.style.display = 'flex';
    divLeftArrowCenter.style.display = 'flex';
    divRightArrow.style.display = 'none';
    left.style.display = 'none'
    center.style.display = 'flex';   
}

rightArrowCenter.addEventListener('click', derecha);
leftArrowCenter.addEventListener('click', izquierda);
leftArrow.addEventListener('click', izquierdaCentro);
rightArrow.addEventListener('click', derechaCentro);