
/*

Basicamente esse codigo sera compilado para js e ficara na pasta ../dist
isso foi definido pelo tsconfig.json.

*/


//funcção para enviar a nave que pega o nome e o capitao
function sendSpaceship(name:string, captain:string) {

    const spaceship = {
        name,
        captain,
        speed:20,
        inMission: true,
        crew: []

    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão`);
    return spaceship;
}

//Func para acelerar a nave
//tudo que essa func precisa saber e que ela precisa de um nome e uma velocidade
function accelarate(targetSpeed:number, spaceship: {name:string, speed:number}) {
    if(spaceship.speed > targetSpeed){
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}....`)
    }else if(spaceship.speed < targetSpeed){
        alert(`Aumentando velocidade da ${spaceship.name} para ${targetSpeed}....`)
    }else{
        alert(`Mantendo a velocidade da ${spaceship.name} em ${targetSpeed}....`)
    }

}

//pedindo dados ao user
const spaceshipName = prompt("Insira o nome da nave a ser enviada");
const spaceshipCaptain = prompt("Insira o nome do capitão da nave");

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt("Insira a velocidade para qual deseja acelerar: "))
accelarate(speed, currentShip)