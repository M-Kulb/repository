
const mas1 = ['cat', 'bird', 'tiger', 'dog'];
const set1 = new Set(['cat', 'bird', 'tiger', 'dog']);
const map1 = new Map([['medium','cat'], ['small','bird'], ['big','tiger'], ['unknown','dog']]);

mas1.sort()

console.log(mas1)

mas1.sort((a,b) => {
    if(a > b) {
        return -1
    }
    else {
        return 0
    }
})

console.log(mas1)

/////////////////////
class Sorter {

    static sortAsc(data) {
        if (data instanceof Array) {
            return this.sortArrAsc(data)
        }
        if (data instanceof Set) {
            return this.sortSetAsc(data)
        }

    }
    static sortDesc(data) {
        if (data instanceof Array) {
            return this.sortArrDesc(data)
        }
        if (data instanceof Set) {
            return this.sortSetDesc(data)
        }
    }

    static sortSetAsc(set) {
        const arr = this.sortArrAsc([...set]);
        set.clear();
        arr.forEach(v => set.add(v));
        return set;
    }

    static sortSetDesc(set) {
        const arr = this.sortArrDesc([...set]);
        set.clear();
        arr.forEach(v => set.add(v));
        return set;
    }

    static sortArrAsc(arr) {
        arr.sort((a, b) => {
            if (a === b) {
                return 0;
            }
            return a < b ? -1 : 1;
        });
        return arr;
    }
    static sortArrDesc(arr) {
        arr.sort((a, b) => {
            if (a === b) {
                return 0;
            }
            return a > b ? -1 : 1;
        });
        return arr;
    }
}


console.log(Sorter.sortAsc(mas1));
console.log(Sorter.sortDesc(set1));


const json = '[{"id":1,"title":"MAC"},{"id":2,"title":"Nike"},{"id":3,"title":"Victoria\u2019s Secret"},{"id":4,"title":"Zara"},{"id":5,"title":"Zizzi"},{"id":6,"title":"Witteveen"},{"id":7,"title":"H&M"},{"id":8,"title":"RIMOWA"},{"id":9,"title":"Adidas"},{"id":10,"title":"Paw Patrol"},{"id":11,"title":"Mattel"},{"id":12,"title":"Kenzo"},{"id":13,"title":"Asos"}]'

const mapArr = JSON.parse(json)

const map33 = new Map

map33.set(mapArr)

const mapArr1 = [...map33]

map33.clear

mapArr1.forEach(v => map33.set(v[0], v[1]));

console.log(map33)

//////////////////////////////////







