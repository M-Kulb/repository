
const aTag = document.querySelector('a')

aTag.style.color = 'green'


const h1 = document.querySelector('h1')

h1.style.color = 'red';




const goClick = function (eventas) {

eventas.preventDefault()
    h1.style.color = 'blue'
  }

  aTag.addEventListener('click', goClick)


////////////////////////////////////

const divs = document.querySelectorAll('div');

const hideDiv = function(e) {
    e.target.style.display = 'none'
}


for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', hideDiv);
}

/////////////////////////////

const dukraSpan = document.querySelector('span span')

const killFamily = function(e) {
    e.target.closest('i').remove

}

dukraSpan.addEventListener('click', killFamily)


const newDukra = document.createElement('span');

const nameOfDukra = document.createTextNode('Dukra 2');

newDukra.appendChild(nameOfDukra)

const tevas = document.querySelector('i');

tevas.appendChild(newDukra)

/////////////////////////////////////






// const h2Tag = document.querySelectorAll('h2')

// for(let i = 0; i < h2Tag.length; i++) {
//     const insertas = document.createElement('span')
//     const nameOfInsertas = document.createTextNode(i+1)
//     insertas.appendChild(nameOfInsertas)
//     h2Tag[i].appendChild(insertas)
// }

const h2Tags = document.querySelectorAll('h2');

for (let i = 0; i < h2Tags.length; i++) {
    const sp = document.createElement('span');
    const nr = document.createTextNode(i+1);
    sp.appendChild(nr);
    h2Tags[i].appendChild(sp);
}




