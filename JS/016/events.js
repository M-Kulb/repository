

const bs = document.querySelector('.black-square');

const goClick = function (eventas) {
  eventas.target.classList.toggle('red');
}

bs.addEventListener('click', goClick)