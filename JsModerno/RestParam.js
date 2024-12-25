function sum(...numbers){
    return numbers.reduce((acumm,num) => acumm + num , 0)
}

console.log(sum(1,2,5,845))