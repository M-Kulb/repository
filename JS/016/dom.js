function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(document);



const divs = document.querySelectorAll('div');
console.log(divs)

for (let i = 0; i<divs.length; i++){

    if (i % 2 === 0) {
        divs[i].classList.add('one')
    }
    
    else

    divs[i].style.backgroundColor = 'blue'
    divs[i].style.height = '100px'
    divs[i].style.width = '100px'

}



   



