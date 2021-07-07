function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('1')

var tuscias = [];

for(var index = 0; index < 30; index++){
    tuscias.push(rand(5, 25));
}
console.log (tuscias)

////////2

console.log('2A')
var count=0
var rand
var tuscias = [];

for(var index = 0; index < 30; index++){
    tuscias.push(rand(5, 25))

if (rand > 10){
    count++
}
}
console.log(count)

///////2B
console.log('2B')





