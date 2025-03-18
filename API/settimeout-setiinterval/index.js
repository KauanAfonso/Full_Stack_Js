console.log("hello world")

// const timeoutId = setTimeout(() =>{
//     console.log('3 segundos se passaram desde que o programa foi iniciado')
// }, 3000) //segundos

// clearTimeout(timeoutId) //ignora o setTimeout()



let seconds = 0

//executa repetidas vezes
const intervalId = setInterval(() =>{
    seconds += 3
    console.log("Se passaram " + seconds + "segundos")
    
    //quando segundos maiores do que 10 irá encearrar o codigo
    if(seconds > 10){
        clearInterval(intervalId)
        console.log('tempo esgotado')
    }
}, 1000 * 3)