function step02(){
    console.log('Passo 02')
}

console.log('Passo 01')

//codigo assincrono
setTimeout(() => {
    step02()
}, 2000);

console.log('Passo 03')
console.log('passo 04')

setTimeout(() => {
    console.log('Passo 05')
},4000)