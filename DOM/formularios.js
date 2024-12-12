
console.log('oi')

const form = document.getElementById('orderForm')

form.addEventListener('submit' , function(ev){
    ev.preventDefault()


    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea').value

    let salada = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salada += " - " + item.value + "\n"
    })

    console.log({name,address,breadType,main,observations,salada})

    alert(
        "Pedido Realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço de entrega: " + address +
        "\nTipo de pão: " + breadType +
        "\nRecheio: \n - " + main + "\n" + salada +
        "Observações: " + observations
      )


      div = document.getElementById('div')

      div.append(name, " ", address, breadType, main, observations)

})