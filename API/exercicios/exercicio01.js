class Pessoa{
    constructor(nome, altura, peso){
        this.nome = nome
        this.altura = altura
        this.peso = peso
    }

    retornar_promise(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{

                if(typeof this.altura == "number" && typeof this.peso == "number"){
                    resolve("Promise aceita")
                }else{
                    console.log("Promisse recusada, números inválidos")
                }
            }, 2000)

        })
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

    retornar_resultado(){
        let promise = this.retornar_promise()
        promise.then((result)=>{
            this.calcular_imc()
            let imc = this.verificar_imc()
            console.log(imc)
            console.log(`Resultado da promise: ${result}`)
        }).catch((err) =>{
            console.log(`Deu algum erro: ${err}`)
        }).finally(()=>{
            console.log('Finalizado...')
        })
    }
}


let kauan = new Pessoa('kauan', 1.81, 80)
kauan.retornar_promise()
kauan.retornar_resultado()