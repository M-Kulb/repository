function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const A = 1
const B = 3
const C = 2

const plus = function (a, b) {
    let s = a + b 
    return s
}

function sum(a, b, c, p) {
    let s = a + p(b,c) 
    return s
}

const rez = sum(A, B, C, plus)
console.log("rez", rez)

//////



const m1 = [1,2,3]

function f7(mas, fun) {
    for(let i = 0; i < mas.length; i++) {
        mas[i] = fun()
    }
}

f7(m1, () => ['red', 'blue', 'green'][rand(0,2)])

console.log(m1)

f7(m1, function(){
    return ['red', 'blue', 'green'][rand(0,2)];
})

//////////8

const m2 = [8, 9, 7, 6, 12, 48, 0, 6]
m2.sort()
console.log(m2)


m2.sort((a, b) => a - b);
console.log(m2);

//////9

const m3 = ['Pingvinas', 'Zebras', 'Voras', 'Vilkas', 'Zuikis']
const map1 = m3.map( x => x.length);
console.log (map1)

//////


const loghi = function(){
    console.log(this.valueOf())
}

const letterAcount = function() {
    let counter = 0
for (let i=0; i < this.length; i++){
    if(this[i] === 'a' ){
        counter ++
    }
}
    console.log("A:",counter)

}

String.prototype.log = loghi;
String.prototype.getA = letterAcount;

const kate = new String ('dvi kates');

const suo = new String ('trys sunys')

const pele = new String('daug pelių');


kate.log()
suo.log()
pele.log()

pele.getA()

//////


function all(){
    console.log(this)
}

const ufo = {
    hello: 'labas',
 
    fly(arr) {
        console.log(this);
        const go1 = function(a) {
            console.log(a, this.hello)
        }
        const go = (a) => {
            console.log(a, this.hello)
        }
        arr.forEach(go)
        arr.forEach(go1)

            
    }
    
}

ufo.fly([5,9,77])

/////////

const vidurkis = (...arg) => {
    let sum = 0
    for (let i = 0 ; i < arg.length ; i++) {
        sum += arg[i]
    }

    console.log(sum/arg.length)
}



vidurkis(5, 77, 21, 55, 77)



