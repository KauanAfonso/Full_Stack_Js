//O async retorna uma promessa automaticamente
async function asyncSum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject("Arguments must be of type number")
    }
    return a + b
}

async function asyncSubtract(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject("Arguments must be of type numberr")
    }
    return a - b
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


