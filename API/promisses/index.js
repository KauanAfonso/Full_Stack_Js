//Estado de pendente - esperando algo
//Estado de resolvida - resolved - foi resolvida
//Estado rejeitada - rejected
// let p = new Promise((resolve, reject) =>{
//     console.log('A Promise está sendo executada.')
//     setTimeout(() =>{
//         //rejeitando uma promise
//         if(true){
//             reject(false)
//         }
//         console.log('resolvendo a promisse')
//         resolve(true)//incerrar e resolver a promise
//     }, 1000 * 2) 
// })

// console.log(p)

// setTimeout(()=>{
//     console.log(p) //recebendo o resultado da promise
// },1000 * 3)






function execute(){
    //faz alguma coisa
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
           console.log('resolvendo a promise')
           resolve('Resultado') 
        });
    },1000)
}

p = execute()
console.log(p)

setTimeout(() =>{
    console.log(p)
},2000)