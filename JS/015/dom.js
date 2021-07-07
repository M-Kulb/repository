function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(document);

const h1 = document.querySelectorAll('h1');

setTimeout(() => h1.style.color = 'green', 2000)

console.log(h1)



const borders = ['one', 'two', 'three']
const colors = ['green', 'yellow', 'blue']
const ul = document.querySelectorAll('ul');

ul.forEach((lis, i) => {
    lis.querySelectorAll('li').forEach(li => {
        li.style.fontSize = rand(10,30) + 'px';
                li.style.color = colors[i]
                li.classList.add(borders[i])

    })
})
    







