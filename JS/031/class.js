function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


class Tv {

    constructor(is, kanalai, title){
        this.istrizaine = is;
        this.kanalai = kanalai;
        this.title = title

    }

  
    putIn(){
        localStorage.setItem(this.title, JSON.stringify(this))
    }

    getBack() {
    let out3 = localStorage.getItem(this.title)
    out3 = JSON.parse(out3)
    return[out3.istrizaine, out3.kanalai, out3.title]
    

    }

}


const tv1 = new Tv(78, ['LRT', 'TV3', 'LNK'], 'tv1')
const tv2 = new Tv(32, ['Discovery', 'NG', 'MTV'], 'tv2')

tv1.putIn()
let out1 = new Tv(...tv1.getBack())
out1.istrizaine++
out1.putIn
out1 = new Tv(...out1.getBack())

tv2.putIn()
let out2 = new Tv(...tv2.getBack())
out2.istrizaine++
out2.putIn
out1 = new Tv(...out2.getBack())

console.log(out1)
console.log(out2)


 console.log(tv1)




////////////

const tv3 = {
    istrizaine: 78,
    kanalai: ['LRT', 'TV3', 'LNK']

}

const tv4 = {
    istrizaine: 32,
    kanalai: ['Discovery', 'NG', 'MTV']

}

console.log(tv3)

console.log(tv4)

//////////////////////

localStorage.setItem('tv3', JSON.stringify(tv3))
let out3 = localStorage.getItem('tv3')
out3 = JSON.parse(out3);
out3.istrizaine++;
localStorage.setItem('tv3', JSON.stringify(out3))
out3 = localStorage.getItem('tv3')
out3 = JSON.parse(out3)

localStorage.setItem('tv4', JSON.stringify(tv3))
let out4 = localStorage.getItem('tv4')
out4 = JSON.parse(out4)

console.log(out3)
console.log(out4)

///////////////////

const clist = ['LRT', 'TV3', 'LNK', 'Polonia', 'SAT1']


class Sorter {
    constructor(ar) {
        this.arr = ar
    }
    sortByAsc() {
        this.arr.sort()
        return this.arr.slice()
    }
    sortByDesc() {
        this.arr.sort((a,b) => {
            if(a > b) {
                return -1
            }
            else {
                return 1
            }
        })
        return this.arr.slice()
    }

    sortByDescLength(){
        this.arr.sort((a,b) => {
            if(a.length > b.length) {
                return -1
            }
            else {
                return 1
            }
        })
        return this.arr.slice()
    }

    sortByLastAsc(){
        this.arr.sort((a,b) => {
            if(a[a.length -1] < b[b.length -1]) {
                return -1
            }
            else {
                return 1
            }
        })
        return this.arr.slice()
    }

}






const sorter = new Sorter(['LRT', 'TV3', 'LNK', 'Polonia', 'SAT1'])

console.log(sorter.sortByAsc())
console.log(sorter.sortByDesc())
console.log(sorter.sortByDescLength())
console.log(sorter.sortByLastAsc())


//////////////////////////////////////////


class SetSorter {
    constructor(ar) {
        this.arr = [...ar]
    }


    sortByAsc() {
        this.arr.sort()
        return new Set (this.arr.slice())
    }
    sortByDesc() {
        this.arr.sort((a,b) => {
            if(a > b) {
                return -1
            }
            else {
                return 1
            }
        })
        return new Set (this.arr.slice())
    }

    sortByDescLength(){
        this.arr.sort((a,b) => {
            if(a.length > b.length) {
                return -1
            }
            else {
                return 1
            }
        })
        return new Set (this.arr.slice())
    }

    sortByLastAsc(){
        this.arr.sort((a,b) => {
            if(a[a.length -1] < b[b.length -1]) {
                return -1
            }
            else {
                return 1
            }
        })
        return new Set (this.arr.slice())
    }

}


const sorter2 = new SetSorter(new Set(['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1']));




console.log(sorter2.sortByAsc())
console.log(sorter2.sortByDesc())
console.log(sorter2.sortByDescLength())
console.log(sorter2.sortByLastAsc())

////////////////////////////

/////////// 1 //////////////

class Kibiras1 {
    constructor(){
        this.akmenuKiekis = 0
    }

    pridetiAkmeni() {
        this.akmenuKiekis ++
    }
    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis
    }
    kiekAkmenu(){
        console.log('kiek yra akmenu', this.akmenuKiekis)
    }
}

const kibiras = new Kibiras1()
const viedras = new Kibiras1()
const kasikas = new Kibiras1()

kibiras.kiekAkmenu()
viedras.kiekAkmenu()
kasikas.kiekAkmenu()

viedras.pridetiAkmeni()

kibiras.kiekAkmenu()
viedras.kiekAkmenu()
kasikas.kiekAkmenu()

////////////// 2 ///////////////

class Pinigine {
    constructor(){
        this.popierinaiPinigai = 0
        this.metaliniaiPinigai = 0
    }
    ideti(kiekis){
        if (kiekis <= 2){
            this.metaliniaiPinigai += kiekis
        }
        else {
            this.popierinaiPinigai += kiekis
        }
    }

    skaiciuoti () {
        console.log('yra tiek pinigu', this.popierinaiPinigai + this.metaliniaiPinigai)
    }
}

const odinePinigine = new Pinigine()
const medziaginePinigine = new Pinigine()



odinePinigine.ideti(235)
medziaginePinigine.ideti(0.87)

odinePinigine.skaiciuoti()
medziaginePinigine.skaiciuoti()

//////////////// 4 ///////////////

class PirkiniuKrepselis {
    constructor(){
        this.turinys = new Map()
    }
    idetiSureli(kiekis){
        if (this.turinys.has('sureliai')){
            const t = this.turinys.get('sureliai')
            this.turinys.set('sureliai', kiekis + t)
        }
        else {
            this.turinys.set('sureliai', kiekis)
        }
    }
    idetiPieno(kiekis) {
        if (this.turinys.has('pienas')){
            const t = this.turinys.get('pienas')
            this.turinys.set('pienas', kiekis + t)
        }
        else {
            this.turinys.set('pienas', kiekis)
    }
}
    idetiDuonos(kiekis) {
        if (this.turinys.has('duona')){
            const t = this.turinys.get('duona')
            this.turinys.set('duona', kiekis + t)
        }
        else {
            this.turinys.set('duona', kiekis)
    }
        
    }

    krepselioTurinys(){
        console.log('krepselio turinys', this.turinys)

    }
}

const naujasKrepselis = new PirkiniuKrepselis()

naujasKrepselis.idetiSureli(10)
naujasKrepselis.idetiDuonos(15)
naujasKrepselis.idetiPieno(5)

naujasKrepselis.krepselioTurinys()

/////////////////////// 3

class Troleibusas {
    constructor(){
        this.keleiviuSkaicius = 0
    }
    ilipa(keleiviuSkaicius){
        this.keleiviuSkaicius += keleiviuSkaicius
    }
    islipa(keleiviuSkaicius){
        this.keleiviuSkaicius -= keleiviuSkaicius
    }
    vaziuoja(){
        if(this.keleiviuSkaicius >= 0){
        console.log('trolike vaziuoja',this.keleiviuSkaicius)
        }
        else{
            console.log('negrybauk')
        }
    }
}

const trolikas = new Troleibusas()

trolikas.ilipa(10)
trolikas.islipa(6)

trolikas.vaziuoja()


//////////////////////// 5 

