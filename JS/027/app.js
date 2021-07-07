
// localStorage.setItem('cat', 'Miau Miau')


// localStorage.clear()

console.log(localStorage.getItem('cat'))




// for (let i=1; i<=100; i++) {
// localStorage.setItem('dog' + i, 'Au Au Au')
// }

localStorage.setItem('arr', JSON.stringify(['a', 'b']))

localStorage.setItem('d', 500)

console.log(localStorage.getItem('arr'))
console.log(localStorage.getItem('d'))


const ar = [5, 8, 9]

const [A,B, C] = ar

console.log(A)
console.log(B)
console.log(C)

const masyvas1 = [55, 77, 99, 100]  //a1:55, a22:77....

const masyvas2 = [55, 77, 99, 100, 777]

const obj = {}

masyvas1.forEach( (e, i) => obj['a' + (i+1)] =e)

console.log(obj)


const json = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';

const array1 = JSON.parse(json)

array1.sort((a,b) => {
    if(a.title < b.title) {
        return -1
    }
    else {
        return 0
    }
})

const where = document.querySelector('body')
const ul = document.createElement('ul')
where.appendChild(ul)

array1.forEach (element => {
    const t = document.createTextNode(element.title)
    const li = document.createElement('li')
    li.appendChild(t)
    ul.appendChild(li)
})


const arr = [5, 8, 9, 22]

const array2 = []

arr.forEach (e => array2.push(e*2))

console.log(array2)




window.addEventListener('resize', reportWindowSize);

window.addEventListener('DOMContentLoaded', () => {
    heightOutput = document.querySelector('#height')
    widthOutput= document.querySelector('#width')
      reportWindowSize()
  })

  let heightOutput 
  let widthOutput

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  }


  window.addEventListener('scroll', reportWindowScroll);

  window.addEventListener('DOMContentLoaded', () => {
      scrollOutput = document.querySelector('#scroll')

        reportWindowScroll()
    })
  
    let scrollOutput 
  
  
  function reportWindowScroll() {
      scrollOutput.textContent = window.scrollY;
      
    }

    const arr1 = [77, 99, 105, 42]

    for (const val of arr1) {
        console.log(val)
        console.log(typeof val)
    }

 

    for (const val in arr1) {
        console.log(val, arr1[val])
       }


       ///////////////////////

       const obj3 = {a:55,z:77,r:98,y:42};

    //    for (const val of obj3) {
    //     console.log(val)
    //     console.log(typeof val)
    // }

    for (const val in obj3) {
        console.log(val, obj3[val])
       }



const mySet1 = new Set()
mySet1.add(1)
mySet1.add(5)
mySet1.add('some text')
mySet1.add('1')

console.log('1', mySet1.has(1))
console.log('2', mySet1.has(2))

mySet1.delete(1)

console.log('length', mySet1.length)

console.log('size', mySet1.size)



for (const val of mySet1) {
        console.log(val)
      }

   
      
      const mySet2 = new Set('Bla Bla')
      console.log(mySet2)



      const mySet3 = new Set(['Bla', 'Ala', 'Blu'])
      console.log(mySet3)

      const arr5 = [...mySet3]
      arr5.sort()
mySet3.clear()

arr5.forEach(v => mySet3.add(v))
      console.log(mySet3)
      console.log(arr5)

      
////////////////////////////


const mySet5 = new Set()

mySet5.add('2a')
mySet5.add('some text')
mySet5.add('1a')


for (const val of mySet5) {
        console.log(val)
}


const arr55 = [...mySet5]
console.log(arr55)

arr55.push('s1','s2')

console.log(arr55)

arr55.forEach( v => mySet5.add(v))
console.log(mySet5)

const mySet6 = new Set()

for (const val of mySet5) {
    mySet6.add(val[0])
}

console.log(mySet6)


const arr7 = [...mySet6]
arr7.sort()
mySet6.clear()
arr7.forEach(v => mySet6.add(v))
console.log(mySet6)






 












