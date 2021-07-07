
const ab = ['a', 'a', 'b', 'a', 'a','a', 'b', 'a', 'a', 'b', 'b' ]



for (let i=0; i<ab.length; i++){
    console.log(ab[i])
}

for (let i=0; i<ab.length; i++){
    console.log(i)
}



for (let i=0; i<ab.length; i++){
    if (ab[i] == 'a') {

    console.log(ab[i])
}}

for (let i=0; i<ab.length; i++){
    if (ab[i] == 'b') {

    console.log(ab[i])
}}


ab.forEach(e => console.log(e))

ab.forEach((value, index)  => console.log(index))

ab.forEach(e =>  {
    if (e === 'a'){
        console.log(e)
    }
})

ab.forEach((value, index)  =>{
    if (value === 'b'){
        console.log(index)
    }
})


/////////////

for (let c=0; c<3; c++){
for (let i=0; i<ab.length; i++){
    console.log(ab[i], c+1)
}
}


for (let c=0; c<3; c++){
for (let i=0; i<ab.length; i++){
    console.log(i, c+1)
}
}


for (let c=0; c<3; c++){
for (let i=0; i<ab.length; i++){
    if (ab[i] == 'a') {

    console.log(ab[i], c+1)
}}
}

for (let c=0; c<3; c++){
for (let i=0; i<ab.length; i++){
    if (ab[i] == 'b') {

    console.log(ab[i], c+1)
}}
}

//////////////


const cde = ['c','d','e']

cde.forEach((e1) => {
ab.forEach(e => console.log(e, e1))
})

cde.forEach((e1) => {
ab.forEach((value, index)  => console.log(index, e1))
})

cde.forEach((e1) => {
ab.forEach(e =>  {
    if (e === 'a'){
        console.log(e, e1)
    }
})
})


cde.forEach((e1) => {
ab.forEach((value, index)  =>{
    if (value === 'b'){
        console.log(index, e1)
    }
})
})


//////////////////////////

// function f1 (array, index) {
//     return array[index] === 'b'
// }



// document.querySelector('button').addEventListener('click', () => {
//     console.log(document.querySelector('input').value)
// })

//////////////////////////////

const arr1 = []

document.querySelector('select').addEventListener('change', sel => {
    console.log(sel.target.value)
    arr1.push(sel.target.value);
    console.log(arr1)
})

/////////////////////////////
const arr2 = []

document.querySelectorAll('[name=_3]').forEach(radio => {
    radio.addEventListener('change', event => { 
        console.log(event.target.value)
        arr2.push(event.target.value)
        console.log(arr2)
    })
})



////////////////////////////
const arr3 = []

document.querySelector('#_4').addEventListener('change', event => {
    if (event.target.checked) {
        console.log('Pažymėta')
        arr3.push('Pažymėta')
        console.log(arr3)

    }
    else {
        console.log('Nepažymėta')
        arr3.push('Nepažymėta')
        console.log(arr3)

    }


})

////////////////////////////

const arr4 =[]

document.querySelectorAll('[name=_5]').forEach(chEl => {
        chEl.addEventListener('change', () => {
            console.log('----------------------------');
            const temp = []
            document.querySelectorAll('[name=_5]').forEach(ch => {
                if (ch.checked) {
                    console.log(ch.value);
                    temp.push(ch.value)
                }

    
            });
            arr4.push(temp)
            console.log(arr4)
        });
    });

////////////////////////////

const h1 = document.querySelector('h1');


document.querySelectorAll('[name=_3]').forEach(chEl => {
    chEl.addEventListener('change', () => {
        console.log('----------------------------');
        let out = '';
        document.querySelectorAll('[name=_3]').forEach(ch => {
            if (ch.checked) {
                console.log(ch.value);
                out += ch.value + ' ';
            }
        });
        h1.innerText = out;
    });
}); 

////////////////////////////////////

const arr = []

document.querySelector('button').addEventListener('click', () => {
        console.log(document.querySelector('input').value);
        arr.push(document.querySelector('input').value)
        console.log(arr)
    })


    /////////////////////////////////

    document.querySelector('#bGo').addEventListener('click', () => {
        arr.forEach((val) => {
            console.log(val)
        })


    })

    ///////////////////////////////




// document.querySelector('#quiz3').addEventListener('click', () => {
//     console.log(document.querySelector('#quiz1').value)
// })



// document.querySelector('#quiz3').addEventListener('click', () => {

//     document.querySelector('h1').innerText=(document.querySelector('#quiz2').value)


// })

/////////////////////////////777777!!
const where = document.querySelector('body')
const text = 'Bla Bla Bla';

const textNd = document.createTextNode(text)

const element = document.createElement('h1')

element.appendChild(textNd)

where.appendChild(element)



where.appendChild(element)

const button = document.querySelector('#quiz3')

const input1 = document.querySelector('#quiz1')

const input2 = document.querySelector('#quiz2')

const button3 = document.querySelector('#quiz4')


button.addEventListener('click', (ev) => {
    const text1 = input1.value
    const text2 = input2.value

    console.log(text1)

    const textNd2 = document.createTextNode(text2)
    const element2 = document.createElement('h1')
    element2.appendChild(textNd2)
    where.appendChild(element2)

})



    button3.addEventListener('click', (ev) => {

      const text1 = input1.value
       const text2 = input2.value
    
for (let i = 0; i < 3; i++ ){

        console.log(text1)
    
        const textNd2 = document.createTextNode(text2)
        const element2 = document.createElement('h1')
        element2.appendChild(textNd2)
        where.appendChild(element2)
}
})


 let text3 = 0

 for (let i = 0; i < 100; i++ ){
text3++
}

 for (let i = 0; i < 100; i++ ) {

    const textNd3 = document.createTextNode(text3)
    const element3 = document.createElement('span')
    element3.appendChild(textNd3)
    where.appendChild(element3)

}

///////////////////////11

document.querySelector('#del').addEventListener('click', () => {
    document.querySelector('h3').forEach(h3 => h3.remove())

})

////////////////













