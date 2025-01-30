function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

console.log(sum(2, 9))
console.log(sum(true, 14))
console.log(sum(undefined, 22))
console.log(sum(18, "0"))
console.log(sum(39, null))