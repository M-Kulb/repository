
const linkas = document.querySelector('a')

console.log(linkas.getAttribute('href'))

linkas.setAttribute('title', 'GO GO GO')

linkas.removeAttribute('href')

const vzLink = 'https://www.vz.lt/'

const meteoLink = 'http://www.meteo.lt/lt'

const vz = document.querySelector('#vz')

document.querySelector('#vz').addEventListener('click', () => linkas.setAttribute('href', vzLink))

document.querySelector('#meteo').addEventListener('click', () => linkas.setAttribute('href', meteoLink))

const linkasImg = document.querySelector('img')

const T1Link = 'http://127.0.0.1:5500/JS/01.jpg'

const T2Link = 'http://127.0.0.1:5500/JS/02.jpg'

const T3Link = 'http://127.0.0.1:5500/JS/03.jpg'

const T1 = document.querySelector('#T1')

const T2 = document.querySelector('#T2')

const T3 = document.querySelector('#T3')

document.querySelector('#T1').addEventListener('click', () => linkasImg.setAttribute('src', T1Link))

document.querySelector('#T2').addEventListener('click', () => linkasImg.setAttribute('src', T2Link))

document.querySelector('#T3').addEventListener('click', () => linkasImg.setAttribute('src', T3Link))

// console.log(img.dataset.bla1)




const labas = document.querySelector('[name=labas]')

labas.addEventListener('input', () => {
    console.log(labas.value)
})

