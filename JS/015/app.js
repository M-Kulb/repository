function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obj = new Object()

console.log(obj)

class Kate {

    constructor(){
        console.log("Nauja kate");
        this.age = rand (1, 8)
    }
    voice = () => console.log('miau')

    getAge = () => this.age

}

const ka1 = new Kate()
const ka2 = new Kate()

console.log(ka1)
console.log(ka2)

ka2.voice()


console.log(ka2.getAge())

////////////


