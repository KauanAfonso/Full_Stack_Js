let tipo = "gasolina";
preco = 0;
let etanol = 5.79
let gasolina = 6.66
let mediaDeComubstivel = 10;
let distancia = 100.00;
let distanciaMedia =  distancia / mediaDeComubstivel

if(tipo == "etanol"){
   preco = distanciaMedia * etanol
   console.log(preco.toFixed(2))
}else{
    preco = distanciaMedia * gasolina;
    console.log(preco.toFixed(2))
}




let precoProduto = 200;
let formaPagamento = "Credito";
let valorFinalDoProduto = 0;
let parcelas = 5;

if(formaPagamento == "Debito"){
    valorFinalDoProduto =  precoProduto - ((precoProduto /100) *10);
    console.log("O valor final do produto com desconto de 10% é: " + valorFinalDoProduto)
}else if(formaPagamento == 'Pix'){
    valorFinalDoProduto =  precoProduto - ((precoProduto /100 )*15) ;
    console.log("O valor final do produto com desconto de 15% é: " + valorFinalDoProduto)
}else if(formaPagamento == "Credito"){
    if(parcelas<= 2){
        console.log("O valor do produto é de : " + precoProduto)
    }else{
        valorFinalDoProduto = ((precoProduto /100 )*10) + precoProduto;
        console.log("O valor final do produto com juros de 10% é: " + valorFinalDoProduto)
    }
}
