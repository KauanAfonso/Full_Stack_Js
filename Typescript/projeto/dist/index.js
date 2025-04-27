/*

Basicamente esse codigo sera compilado para js e ficara na pasta ../dist
isso foi definido pelo tsconfig.json.

*/
//funcção para enviar a nave que pega o nome e o capitao
function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o"));
    return spaceship;
}
//Func para acelerar a nave
//tudo que essa func precisa saber e que ela precisa de um nome e uma velocidade
function accelarate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "...."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "...."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, " em ").concat(targetSpeed, "...."));
    }
}
//pedindo dados ao user
var spaceshipName = prompt("Insira o nome da nave a ser enviada");
var spaceshipCaptain = prompt("Insira o nome do capitão da nave");
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade para qual deseja acelerar: "));
accelarate(speed, currentShip);
