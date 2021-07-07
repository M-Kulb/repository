
const setas = new Set()

setas.add('grybas')
setas.add('agurkas')
setas.add('pupa (ankstine)')

console.log(setas)

const arr7 = [...setas]
arr7.sort()
setas.clear()
arr7.forEach(v => setas.add(v))
console.log(setas)

/////////////////

const arr8 = [...setas]

localStorage.setItem('mano setas', JSON.stringify(arr8))
const arr9 = JSON.parse(localStorage.getItem('mano setas'))
const setasBack = new Set(arr9)

console.log(setasBack)

///////////


const hard = [

    new Set([2,8,7]),

    new Set([2,0,7,8,7]),

    new Set([2,8,0,7,1,9]),

    new Set([2,8,7,0])

];


hard.sort((a,b) => b.size - a.size) 

console.log(hard)

///////////////////

console.log(hard instanceof Array);

console.log(setas instanceof Set);

const easy = [

    [1,8],

    new Set([7, 9]),

    new Set(),

    [1,8,7],

    new Set([7, 9, 11]),

    [],

    new Set([7, 9, 71, 11, 45]),

];

// easy.sort((a, b) => a instanceof Array ? -1 : 0)
// console.log(easy)

easy.sort((a, b) => {
    if (b instanceof Array === a instanceof Array ||
        b instanceof Set === a instanceof Set) {
            return 
        }
        else if (b instanceof Array) {
            return 1
        }
        else if (b instanceof Set) {
            return -1
        }
})

const filterEasy = easy.filter(v => v instanceof Set ? 1 : 0)

console.log(filterEasy) 

/////////////////////////////

const map = new Map()

map.set('Petras', 'Kas guli Petro stalciuje')
map.set('Janotas', 'Kas guli janoto urve')
map.set('Sarikas', 'Kas guli Sariko budoje')



console.log(map.has('Janotas'))

console.log(map.get('Sarikas'))

for (const val of map) {
    console.log(val[0])
}

const mapArray = [...map]

console.log(map)

console.log(mapArray)


const kitasMapas = new Map([['a',2],['b',2],['c',2]])

console.log(kitasMapas)

const arr10 = [...map]
arr10.sort((a,b) => a[0] < b[0] ? -1 : 0)
map.clear()
arr10.forEach(v => map.set(v[0], v[1]))
console.log(map)


const notSoEasy = [

    [1,8],

    new Set([7, 9]),

    new Set(),

    new Map([['a',2], ['b',2], ['c',2]]),

    [1,8,7],

    new Set([7, 9, 11]),

    [],

    new Set([7, 9, 71, 11, 45]),

    new Map([['a',2], ['c',2]]),

];

notSoEasy.sort((a,b) => {
    if  (a.constructor.name === b.constructor.name) {
            return 0;
        }
        if (a instanceof Array) {
           return -1
        }
        if (a instanceof Map) {
            if (b instanceof Array) {
                return 1
            }
            if (b instanceof Set) {
                return -1
            }
        }
        if (a instanceof Set){
            return 1
        }
})

console.log(notSoEasy)

/////////////////////////////

const m1 = ['z', 's', 'a', 'd']

const m1a = m1.slice()

m1a.sort()

console.log(m1a)



const m1b = m1.slice()




 m1b.sort((a,b) => {
    if(a < b) {
        return -1
    }
    else {
        return 0
    }
})

console.log(m1b)

const m1c = m1.slice()

m1c.sort((a,b) => {
    if(a > b) {
        return -1
    }
    else {
        return 0
    }
})

console.log(m1c)

////////////////////////////

document.querySelector('#sort').addEventListener('click', () => {
    console.log(m1c)
})

/////////////////////

document.querySelector('#sort1').addEventListener('click', () => {
    m1b.sort((a,b) => {
        if(a < b) {
            return -1
        }
        else {
            return 0
        }
    })
    console.log(m1b)
})

///////////////////////////

const m2 = [

    ['zru', 'six'],

    ['rot', 'dzi'],

    ['uxm', 'ycw'],

    ['otr', 'sth']

];

const m2a = m2.slice()

m2a.sort((a,b) => {
    if(b[1] > a[1]) {
        return -1
    }
    else {
        return 0
    }
})

console.log(m2a)

const m2b = m2.slice()

m2b.sort((a,b) => {
    if(b[0] < a[0]) {
        return -1
    }
    else {
        return 0
    }
})

console.log(m2b)

// //////////////////////////////8

const m2c = m2.slice()

m2c.sort((a,b) => {
    if(b[1][1] < a[1][1]) {
        return -1
    }
    else {
        return 0
    }
})

console.log(m2c)


///////////////////////////

const m2d = m2.slice()

m2d.sort((a,b) => {
    if(b[0][2] > a[0][2]) {
        return -1
    }
    else {
        return 0
    }
})

console.log(m2d)


///////////////////////////


const m3 = [

    new Map([['dog', 5], ['cat', 7], ['snake', 58]]),

    new Map([['snake', 33], ['dog', 14], ['cat', 8]]),

    new Map([['dog', 51], ['cat', 77], ['snake', 23]]),

    new Map([['cat', 10], ['dog', 23], ['snake', 17]])

];


const m3a = m3.slice()

m3a.sort((a,b) => {
    if(b.get('cat') < a.get('cat')) {
        return -1
    }
    else {
        return 0
    }
})

console.log(m3a)

//////////////////////////////

const m3b = m3.slice()

m3b.sort((a,b) => {
    if(b.get('dog') > a.get('dog')) {
        return -1
    }
    else {
        return 0
    }
})

console.log(m3b)


//////////////////////

const m3c = m3.slice()

m3c.sort((a,b) => {
    if(b.get('snake')+b.get('dog') > a.get('snake')+a.get('dog')) {
        return -1
    }
    else {
        return 0
    }
})

console.log(m3c)





































