const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)

console.log(...towns)
console.log(...towns[0] )
console.log(...towns[2]);

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push("Juno")

console.log({towns , townsCopy})

const towsClone = [...towns]

towsClone.push('Kauan');

console.log({towns, townsCopy , towsClone})

const townsObj = {...tows}
const towsObjClone = {...townsObj}
townsObjClone.test = "test";

console.log({townsObj, townsObjClone})