
function zebras(long, fill)
{
const masyvas = []
for ( let i = 0; i < long; i++){
masyvas.push(fill)
}
return masyvas
}

let A = 5

let AA = zebras(A, 'Triusis')
console.log(AA)

///////1

function green()
{
   let G = "GREEN"
return G
}

console.log(green())


//////2

function color(what) {
    if (what == 1) {
        return 'white'
    }
    else if (what == 2){
        return 'black'
    }
    else {
        return 'no color'
    }
}


console.log(color(1))


/////3

function sum (a,b) {
    return (a+b)
}

function diff (a, b){
    return (a-b)
}

console.log(sum(5,5))
console.log(diff(3,1))

///////4

function sum (a=0,b=0) {
    return (a+b)
}

function diff (a, b){
    return (a-b)
}

console.log(sum(5,5))
console.log(diff(3,1))

//////5








