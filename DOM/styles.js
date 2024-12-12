
function userLightTheme(){
document.body.style.color = '#212529'
document.body.style.backgroundColor = '#f1f5f9'
}

function userDarkTheme(){
    document.body.style.color = 'white'
    document.body.style.backgroundColor = '#212529'
}

function switchThme(){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}


document.getElementById('lightBtn').addEventListener('click' , userLightTheme)
document.getElementById('darkBtn').addEventListener('click' , userDarkTheme)

document.getElementById('switchBtn').addEventListener('click' , switchThme)