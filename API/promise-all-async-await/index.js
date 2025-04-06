
//--------------------------------PRIMERIA FORMA---------------------------

//func para atrasar a promise
function waitFor(seconds){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve()
        }, seconds * 1000)
    })
}


const numbers = [4,40,2,4,977]

//quadrado de um numero
const squares = numbers.map(async (number) =>{
    await waitFor(2)
    return number * number
})

console.log(squares)

//resolvendo as funções
Promise.all(squares).then(results => console.log(results))

//--------------------------------PRIMERIA FORMA---------------------------




//--------------------------------SEGUNDA FORMA---------------------------

//a assincrona consegue executar todas as funções ao msm tempo

//com await     
async function execute() {
    const squares = await Promise.all( numbers.map(async (number) =>{
        await waitFor(2)
        return number * number
    }))

    console.group(squares)
}


execute()