class Pessoa{
    constructor(nome, altura, peso){
        this.nome = nome
        this.altura = altura
        this.peso = peso
    }
    //o async ele vai esperar resolver uma promisse
     async retornar_promise(){
        if(typeof this.altura !== "number" && typeof this.peso !== "number"){
            return Promise.reject("Promisse recusada, números inválidos")
        }
        return "Promisse Aceita, numeros corretos"
         
    }

    calcular_imc(){
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    verificar_imc() {
        const imc = this.calcular_imc();
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            return "Sobrepeso";
        } else if (imc >= 30 && imc < 34.9) {
            return "Obesidade grau 1";
        } else if (imc >= 35 && imc < 39.9) {
            return "Obesidade grau 2";
        } else {
            return "Obesidade grau 3 (mórbida)";
        }
    }

    async retornar_resultado(){
    try{
        let promise = await this.retornar_promise()
        this.calcular_imc()
        let imc = this.verificar_imc()
        console.log(imc)
        console.log(`Resultado da promise: ${promise}`)
    }catch(err){
        console.log(err)
    }

    }
}

let kauan = new Pessoa('kauan', 1.81, 80)
kauan.retornar_promise()
kauan.retornar_resultado()