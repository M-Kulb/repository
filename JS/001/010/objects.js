const obj = {forest: 'Gump', digit2: 555, arr: [5,8,9]};

obj.color = 'Black';
obj.what = 'Cat';
obj.digit = 888;
obj.abc = {a: 'A', b: 'B'}


console.log(obj);

console.log('color', obj.color)

console.log('B', obj.abc.b)

let obj2 = obj;

let A = 5;
let B = 12;
A = B 
B = 45

console.log('A:', A, 'B:', B)

let C = {A: 5}
let D = {B: 12}

C = D

C.A = 23

console.log('C:', C, 'D:', D)