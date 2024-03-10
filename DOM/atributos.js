const input = document.getElementById('input')

document.getElementById('value').addEventListener('click' , function(){
    input.value = input.value === '' ? "ola mundo" : ''

    console.log(input.value)
    console.log(input.getAttribute('value')) //pega o valor pre definido no html

})


document.getElementById('type').addEventListener('click' , function(){

    // input.type = input.type !== 'radio' ? 'radio' : 'text'

    input.setAttribute('type' , 'radio')
})


document.getElementById('placeholder').addEventListener('click' , function(){
    input.placeholder = "digite algo"
})

document.getElementById('disable').addEventListener('click' , function(){
    input.setAttribute('disabled' , !input.disabled)
})

document.getElementById('data').addEventListener('click' , function(){
    const data = input.dataset.something
    console.log(data)
})