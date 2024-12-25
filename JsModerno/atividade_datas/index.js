let dayjs = require('dayjs')

/*

 o método .diff() não retorna um objeto dayjs, ele retorna a diferença numérica entre as duas datas (número de anos, meses, dias, etc.). Ou seja, você não pode usar .format() diretamente no valor retornado por .diff().

*/


const formatar_data = (data) =>{
    // Verifica se a data está no formato esperado (DD-MM-YYYY)
    const partes = data.split('-');
    console.log(partes)

    if (partes.length !== 3) {
        console.log('Data inválida!');
        return;
    }

    // Desestrutura as partes da data
    const [dia, mes, ano] = partes;

    // Formata a data para o formato YYYY-MM-DD
    const dataFormatada = `${ano}-${mes}-${dia}`;

    return dataFormatada;
}


const exer_datas = (data) =>{
 
    data_formatada = formatar_data(data)

    let data_aniversario = dayjs(data_formatada)

    let agora = dayjs()

    let idade = agora.diff(data_aniversario, 'year');

    console.log(`Você tem ${idade} anos.`)


    proximo_aniversario = data_aniversario.year(agora.year())

    if(proximo_aniversario.isBefore(agora)){

        proximo_aniversario = data_aniversario.add(idade+1, "Year")
        console.log(`Seu aniversário ja foi esse ano, então o proximo aniversário será em: ${proximo_aniversario.format('DD-MM-YYYY')}`)

    }else{
        console.log("Seu aniversário será ainda esse ano !!!")
        console.log(`Seu proximo aniversário será em: ${proximo_aniversario.format('DD-MM-YYYY')}`)
    }


    console.log(proximo_aniversario.diff(agora, 'd'))

}

exer_datas('28-09-2006')