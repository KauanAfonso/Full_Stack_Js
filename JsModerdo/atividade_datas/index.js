let dayjs = require('dayjs')


data = dayjs("12-25-2001").format("DD-MM-YYYY");

console.log(data);



// dia_de_hoje = dayjs().date() 
// console.log(dia_de_hoje)


// dayjs().format()
// console.log(dayjs().year())


// const quantos_dias_aniversario = (data) =>{
//     const data_de_aniversario = dayjs(data).locale('pt-br').format();
//     console.log(data_de_aniversario)

//     ano_atual = dayjs().year()
//     mes_atual = dayjs().month()
//     dia_atual = dayjs().date()
    
// }

// quantos_dias_aniversario('28-09-2006')