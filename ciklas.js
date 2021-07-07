function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//////1A

var a = 5
var b = 6
var c = 7
var suma = a + b + c
var stringas = String(a) + String(b) + String(c)
var stringas2 = "" + a + b + c



console.log(suma)


////1B
console.log(stringas)
console.log(stringas2)


////1C
var string4 = ''+ a +' '+ b +' '+ c
console.log(string4)

////1D
var string5 = ''+ a +' '+ b +' '+ c +' '+ suma
console.log(string5)

/////2
var kin1 = rand (5, 10)
console.log(kin1)

////3
var labas="labas", i

for (i=0; i<5; i++){
   console.log(labas)
}

////4
for (i=0; i<7; i++){
    console.log(kin1)
 }

 ////5

 for (i=0; i<kin1; i++){
    console.log(kin1)
 }

 ////6

 for (i=0; i<kin1; i++){
     if (kin1>7){
    console.log(kin1)
     }
}

////7A


var kin2 

for (i=0; i<5; i++){
    var kin2 = rand(10,20);
    console.log(kin2)
    }

////7B
var a = 0


for (i=0; i<5; i++){
    var kin2 = rand(10,20);
    a = a+kin2
    }

    console.log(a)
    
////7C

var a = 0

for (i=0; i<5; i++){
    var kin2 = rand(10,20);
    a = a+kin2+" "
    }

    console.log(a)

    ////7D

    var a = 0
    

for (i=0; i<5; i++){
    var kin2 = rand(10,20);
    a = a+kin2+" "
    }

    console.log(a)

    ////8A

    var kin3 

do {
    var kin3 = rand(10,25);
    console.log (kin3);
}
       while (kin3 >= 12)

/////8B
   
var kin3 
var suma3=0

do {
    var kin3 = rand(10,25);
    console.log (kin3);
    suma3++;
}
       while (kin3 >= 12)
       console.log("suma", suma3)

//////8C

var kin3 
var suma3=0

do {
    var kin3 = rand(10,25);
    console.log (kin3);
   if (kin3 <= 18) {
suma3 += kin3
}
}
       while  (kin3 >= 12)
       console.log("suma", suma3)


/////8D


var kin3 
var suma3=0
var atmesta=0

do {
    var kin3 = rand(10,25);
    console.log (kin3);
   if (kin3 <= 18) {
suma3 += kin3
}
else {
    atmesta++
}
}
       while  (kin3 >= 12)
       console.log("suma", suma3)
       console.log("atmesta", atmesta)

/////8E

var kin3 
var lyginiai=0
var nelyginiai =0

do {
    var kin3 = rand(10,25);
    console.log (kin3);
   if (kin3 % 2 === 0) {
lyginiai++
}
else {
    nelyginiai++
}
}
       while  (kin3 >= 12)
       console.log("lyginiai", lyginiai)
       console.log("nelyginiai", nelyginiai)

////8F

// var kin3 
// var countsmall
// var countbig=0
// do {
//     countsmall=0;


// do {
//     var kin3 = rand(10,25);
//     countsmall++;
// }
//        while (kin3 >= 12) 
//        countbig++

      

//     } while (countsmall < 20)

//     console.log(countbig)

/////9
// var kin3
// var countsmall
// var countbig

// do {
//     var kin3 = rand(5,10)
//     for (i=0; i<kin3; i++)
//     countsmall++;{

//     }
// }

// while (kin3 != 5)
// countbig++

// console.log(countbig)
// console.log(countsmall)

//9B
// var kin3
// var count5 = 0
// do {
//     var kin3 = rand(5,10)
//     if (count5 === 3){
//         count5++
//     }
//     console.log(kin3)  
// } while (count5 < 3)


///////10

var Petras = 0
var Kazys = 0 

do {
Petras += rand(10, 20);
Kazys += rand (5, 25)

}while(Petras < 222 && Kazys < 222)


if(Petras > 222 && Kazys > 222) {
 console.log('Lygiosios', 'Petras:', Petras, 'Kazys:', Kazys);
}

else if (Petras > Kazys) {
    console.log('Laimėjo Petras', 'Petras:', Petras, 'Kazys:', Kazys);
}

else if (Petras < Kazys) {
    console.log('Laimėjo Kazys', 'Petras:', Petras, 'Kazys:', Kazys);
}


/////////

var kin3 

do {
    var kin3 = rand(10,25);
    console.log (kin3);
    if (kin3 >= 12){
        break
    }
}
       while (true) (kin3 >= 9);
    
      
       













    







 

 










