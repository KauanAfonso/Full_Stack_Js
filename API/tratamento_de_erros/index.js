function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try {
   
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch(error){
    console.log("An error ocurred!")
    console.log(error.menssage)
}finally{
    console.log("codigo finalizado")
    
}
