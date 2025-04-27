
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
(Voce pode criar um script adicionando no package.json)

*/


const setPilot = (newPilot: string, spaceship: { name?: string; pilot: string; speed?: number; inMission?: boolean; }) => {
    spaceship.pilot = newPilot;
  }
  
  const accelerate = (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
    spaceship.speed = targetSpeed;
  }
  
  const sendToMission = (spaceship: { name?: string; pilot?: string; speed?: number; inMission: any; }) => {
    spaceship.inMission = true;
  }


const spaceship = {
    name: '',
    pilot: "",
    speed:0,
    inMission:false
}


const pilot = "Han solo"
spaceship.name = "Milnenum Falcon"

setPilot(pilot, spaceship)
accelerate(50,spaceship)
sendToMission(spaceship)


console.log(spaceship)