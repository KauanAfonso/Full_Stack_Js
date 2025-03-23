function execute(){
    //faz alguma coisa
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            //Sempre vai rejeitar para cair no catch
            if(true){
                reject('a promisse foi rejeitada')
            }else{
                console.log('resolvendo a promise')
                resolve(42) 
            }
        });
    },2000)
}

/*

O then() pega o o resultado da promisse e passe a 
diante ele. Caso der erro cai no catch sem eencerrar
a aplicação, ou seja ele foi tratado.

*/

//Pegando o valor retornado da promise -> o result é o resolve da func exxecute()
execute().then((result)=>{
    console.log("A promisse foi resolvida. O resultado foi: " + result)
}).catch((err) =>{
    console.log(`A promise foi rejeitado por: ${err}`)
}).finally(()=>{
    console.log('A promisse foi finalizada')
}) //Finalizado quando a promisse for resolvida ou rejeitada