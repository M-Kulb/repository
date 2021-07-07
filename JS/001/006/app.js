function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var komoda = ['obuolys', 'kobra', 69, 'lapai' ]

console.log (komoda)

komoda[2]++

console.log (komoda[2])

komoda[1] = 'anakonda'

console.log (komoda)

console.log ('masyvo ilgis', komoda.length);

console.log ('masyvo paskutinis stalcius:', komoda[komoda.length - 1]);

komoda.push('medziai');
komoda.push('krumai', 'samanos');

komoda.unshift('ezeras');

console.log(komoda.shift())
console.log(komoda.pop())

for(var index = 0; index < komoda.length; index++){
    console.log('stalcius nr.' + index, komoda[index]);
}

var tuscias = [];

for(var index = 0; index < 10; index++){
    tuscias.push(rand(0, 10));
}

console.log (tuscias)

console.log(komoda.indexOf('medziai'))

komoda.splice(3, 1)





