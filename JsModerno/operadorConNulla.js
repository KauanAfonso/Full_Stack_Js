// console.log("Ola Kauan")

// const a = 0 // o ZERO é considerado como false

// const b = null

// const c = "teste"


// console.log(a || b || c) //printou só o C

// console.log(a ?? b ?? c) //ira verificar se é null ou undefined, se o valor for ele devolve e para se não ele vai para o próximo

//---------------------------------------------------------------


let a = 0

let b = a || 42;

console.log({a,b})


b =  a ?? 42
console.log({a,b})
