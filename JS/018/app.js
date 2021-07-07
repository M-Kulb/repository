
const h1 = document.querySelector('h1')

h1.style.color = 'green';

const iTag = document.querySelector('i')

const mazas = ['small']

iTag.classList.add(mazas)

const meinas = ['main']

h1.classList.remove(meinas)

const h2 = document.querySelectorAll('h2')

const h2pirmas = document.querySelector('h1 + h2')


const pirma = ['first']



h2pirmas.classList.add(pirma)

h2pirmas.classList.remove(meinas)


const spanas1 = document.querySelector('h2 span')

spanas1.style.fontSize = '10px'

spanas1.style.color = 'gray'

console.log('h2 tagų yra:', h2.length)


// let counter = 0 
// const h2 = document.querySelectorAll('h2').forEach(()=> counter ++)

// const h2 = document.querySelectorAll('h2').forEach(()=>{
//      counter ++
// })




let h2firstCOunt = 0

h2.forEach(h2 => {
    if (!h2.classList.contains('first')){
        h2firstCOunt++
    }
    
});



// for (let i=0; i < h2.length; i++){
//     if (!h2[i].classList.contains('first')){
//         h2firstCOunt++
//     }
// }

console.log('h2 be first yra:',h2firstCOunt)


h2.forEach(h2 => {
    h2.style.color = "lightblue"
})


// for (let i=0; i < h2.length; i++){
//     h2[i].style.color = 'lightblue'
// }

const div = document.querySelectorAll('div')

div.forEach(div =>{
    if (div.classList.contains('prices')){
               div.classList.add('price-tag')
            }
})
    



// for (let i=0; i < div.length; i++){
//     if (div[i].classList.contains('prices')){
//         div[i].classList.add('price-tag')
//     }
// }

const tagasNew = document.querySelectorAll('.new')

tagasNew.forEach(tagasNew =>{
    tagasNew.style.textDecoration = 'underline'
})



// for (let i=0; i < tagas.length; i++){
    
//         tagas[i].style.textDecoration = 'underline'
//     }

const ulas = document.querySelectorAll('ul')

ulas.forEach(ulas =>{
    ulas.style.paddingTop = '15px';
    ulas.style.paddingBottom = '15px';
    ulas.style.borderColor = 'black';
    ulas.style.borderStyle = 'solid';
 
})



const newAnimalsList = {}

ulas.forEach( ulas => {
    let count = 0;
    ulas.querySelectorAll('li').forEach( li => {
        if (li.classList.contains('new')){
        count ++
        }
    })
    newAnimalsList[ulas.id] = count
})

console.log(newAnimalsList)

//////////////////////





////////////////////4A

const dbTagas = function(e) {
    e.target.style.color = 'red'
}

for (let i=0; i < tagasNew.length; i++) {
    tagasNew[i].addEventListener('dblclick', dbTagas)
}






 




