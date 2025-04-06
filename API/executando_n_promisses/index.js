function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}


//De continuidade no codigo somente se as duas funções darem tudo certo
const sumResult = asyncSum(50,23)
const subtrackResult = asyncSubtract(50, null)

//array de promisse para verificar logo todas as promises
Promise.all([sumResult,subtrackResult]).then(results =>{
    console.log(results)
}).catch(err => {
    console.log(err)
})


function calculate_square(number){
    return new Promise((resolve, reject)=>{
        resolve(number * number)
    })
}


numbers = [10,5,99,5,6,12]

//outra forma de resolver com promise all
Promise.all(numbers.map(n => calculate_square(n))).then(squares => console.log(squares))