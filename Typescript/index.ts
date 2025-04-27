
//O typescript tipa os dados
const spaceship = {
    name:"A101",
    speed: 300
}


//com ctrl + ele passa os parametros automaticamente 
function accelarate(spaceship: { name: string; speed: number },speed: number){
    spaceship.speed = speed
}

accelarate(spaceship,50)