let dayjs = require('dayjs')

/*

 o método .diff() não retorna um objeto dayjs, ele retorna a diferença numérica entre as duas datas (número de anos, meses, dias, etc.). Ou seja, você não pode usar .format() diretamente no valor retornado por .diff().

*/

data_aniversario = dayjs("2006-09-28")
let agora = dayjs()


let idade = agora.diff(data_aniversario, 'year');

console.log(`Você tem ${idade} anos.`)


teste = data_aniversario.year(agora.year())

if(teste.isBefore(agora)){

    teste = data_aniversario.add(idade+1, "Year")
    console.log(`Seu aniversário ja foi esse ano, então o proximo aniversário será em: ${teste.format('DD-MM-YYYY')}`)

}else{
    console.log("Seu aniversário será ainda esse ano !!!")
    console.log(`Seu proximo aniversário será em: ${teste.format('DD-MM-YYYY')}`)
}




// const idade(idade){
//     data_aniversario = dayjs(data)
// }