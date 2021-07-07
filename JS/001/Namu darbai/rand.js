function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var kin1 =  rand(0, 4)
var kin2 =  rand(0, 4)

if (kin1 > kin2){
    console.log(kin1 / kin2)
}

else {
    console.log(kin2 / kin1)
}

///-----------------------------

var kin1 = rand(0, 25)
var kin2 = rand(0, 25)
var kin3 = rand(0, 25)

if (kin1 > kin2 > kin3){
    console.log(kin2)
}

else if (kin1 > kin3 > kin2){
    console.log(kin3)
}

else {
    console.log(kin1)
}

///--------------------------

var a = rand(1, 10)
var b = rand(1, 10)
var c = rand(1, 10)

if (a + b > c && a + c > b && b + c > a){
    console.log (a,b,c,'Trikampį galima sudaryti')
}

else {
    console.log (a,b,c,'Trikampio negalima sudaryti')
}

///--------------------------

var kin1 = rand(0, 2)
var kin2 = rand(0, 2)
var kin3 = rand(0, 2)
var kin4 = rand(0, 2)






