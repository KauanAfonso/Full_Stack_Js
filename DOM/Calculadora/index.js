let root = document.querySelector(":root")
let input = document.getElementById('input');
let resultado = document.getElementById('result')
let main = document.querySelector('main')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const caracters = document.querySelectorAll(".charKey").forEach(function(elemento){
    elemento.addEventListener('click' , function(){
        const data = elemento.dataset.value;
        input.value += data;
    })
   
})

document.getElementById('clear').addEventListener('click' , function(){
    input.value = ""
})



document.getElementById('equal').addEventListener('click' , calcular);




function calcular(){
    const calculo = eval(document.getElementById('input').value)
    resultado.value = calculo;
    input.value = ""
   
}


input.addEventListener('keydown' , function(ev){
    ev.preventDefault()
    
    if(allowedKeys.includes(ev.key)){
        input.value +=ev.key
        return

    }
    if(ev.key === "Enter"){
        calcular()
    }if(ev.key === "Backspace"){

       input.value = input.value.slice(0,-1)
    
    }
})



document.getElementById('copyToClipboard').addEventListener('click' , function(ev){
    const button = ev.currentTarget
    if(button.innerText === "Copy" ){
        button.innerText = "Copied!"
        button.classList.add("success")

        window.navigator.clipboard.writeText(resultado.value)
    }else{
        button.innerText = 'Copy'
        button.classList.remove(success)
    }
})

document.getElementById("themeSwitcher").addEventListener('click' , function(){
    if(main.l.theme == "dark"){
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.style.border = "solid 2px black"
        main.dataset.theme = "light"
    }else{
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
    }
        
})