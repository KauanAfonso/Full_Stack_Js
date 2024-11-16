// const average = (...numbers) =>{
//     const sum = numbers.reduce((acum,num) => acum + num, 0)
//     return sum / numbers.length

// }

// console.log(`MEdia aritimetica simples: ${average(5,68,8,5)}`)

// const weightedAvarage = (...entries) =>{
//     const sum = entries.reduce((acumm, {number , weight}) => acumm + (number * (wheight ?? 1)), 0)
//     const weightSum = entries.reduce((acum,entry) => acum + (entry.weight ?? 1), 0 )
//     return sum/ wheightSum 
// }


// console.log(weightedAvarage({numero: 9, peso: 3}, {numero: 7, peso: 1}, {numero: 10, peso: 1}))

// const median = (...numbers) =>{
//     const order = {...numbers}.sort((a,b) => a - b)
//     return midle = Math.floor(order.length / 2) //pega o maior inteiro
//     if(order.length % 2 !== 0){
//         return orderredNumbers[midle]
//     }else{
//         const fistMedian = orderredNumbers[midle -1]
//         const secondMedian = orderredNumbers[midle]
//         return average(fistMedian,secondMedian)
//     }

// }


// console.log(median(8,6,2,4,5,1,5,3,2,77,7))


const mode = (...numbers) => {
    //
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])

    quantities.sort((a,b) => b[1] - a[1] )
    return quantities[0][0]
}


console.log(mode(7,8,999,999,999,57,7))