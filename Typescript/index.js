// //O typescript tipa os dados
// const spaceship = {
//     name:"A101",
//     speed: 300
// }
// //com ctrl + ele passa os parametros automaticamente 
// function accelarate(spaceship: { name: string; speed: number },speed: number){
//     spaceship.speed = speed
// }
// accelarate(spaceship,50)
/*


Iniciar o typescript como dependencia de desenvolvimento

1-npm init -y
2-npm install typescript --save-dev

Compilar para codigo Javascript para rodar nos navegadores

1-npx tsc .\index.ts

*/
var setPilot = function (newPilot, spaceship) {
    spaceship.pilot = newPilot;
};
var accelerate = function (targetSpeed, spaceship) {
    spaceship.speed = targetSpeed;
};
var sendToMission = function (spaceship) {
    spaceship.inMission = true;
};
var spaceship = {
    name: '',
    pilot: "",
    speed: 0,
    inMission: false
};
var pilot = "Han solo";
spaceship.name = "Milnenum Falcon";
setPilot(pilot, spaceship);
accelerate(50, spaceship);
sendToMission(spaceship);
console.log(spaceship);
