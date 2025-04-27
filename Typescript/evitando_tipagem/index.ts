
//parametros opcionais
function sendSpacehip(spaceship: { pilot: string; copilot?: string}) {
    
}

sendSpacehip({ pilot: "Kauan" }) //copilot é opcional
sendSpacehip({ pilot: "Afonso", copilot: "cris" }) //copilot é opcional


let input: unknown // tipo desconhecido, ou seja ele não é tipado.
// input = 1 //number
// input = "Kauan" //string
// input = true //boolean

let input2: any //tipo qualquer, ou seja ele é tipado, mas não tem tipo definido