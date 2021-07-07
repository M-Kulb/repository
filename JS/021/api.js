const words = ["Raudona","Mėlyna","Žalia"];

const spalvos = ['red', 'blue', 'green']

const h1 = document.querySelector('h1');


document.querySelector('#case-1').addEventListener('change', (select) => {

    h1.innerText = select.target.value;

});



document.querySelector('#case-3').addEventListener('click', () => {

    h1.innerText = "Hello"

});



document.querySelector('#case-2').addEventListener('change', (select) => {

    h1.style.color = spalvos[select.target.value];

});


/////////////////////

console.log(JSON.stringify(words))







// document.querySelector('#case-4').addEventListener('click', () => {
//     fetch('http://127.0.0.1:5500/JS/021/labas.txt')

//     .then(response => response.text())
    
//     .then(data => h1.innerText = data)
// })



document.querySelector('#case-4').addEventListener('click', () => {
    fetch('http://127.0.0.1:5500/JS/021/labas.txt')

    .then(response => response.text())
    
    .then(data => h1.innerHTML = data)
})