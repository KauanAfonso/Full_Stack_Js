const all_spacechip = []; //armazenar todas as naves
//Função para criar uma nave
function createSpaceShip(SpaceShip) {
    console.log(`Nave ${SpaceShip.name} criada com sucesso!`);
    return SpaceShip;
}
//Function para setar um pilot para a nave espacial
function setCrew(spaceship, nameCrew) {
    if (spaceship.crew.length < spaceship.crewLimit) {
        spaceship.crew.push(nameCrew);
        console.log(`Tripulante ${nameCrew} adicionado com sucesso!`);
    }
    else {
        console.log(`Tripulação máxima atingida!`);
    }
}
//Enviar para missão casp não estiver e 
function sendToMission(spaceship) {
    let crew = spaceship.crew.length;
    let one_third = Math.round(spaceship.crewLimit / 3);
    if (!spaceship.inMission && crew >= one_third) {
        spaceship.inMission = true;
        console.log(`A nave espacial ${spaceship.name} foi enviada em uma missão !`);
        return spaceship;
    }
    else {
        console.log(`A nave ja está em missão ou falta tripulantes`);
    }
}
//salvando a espaço nave nos registros de todas as naves 
function saveSpaceship(spaceship) {
    all_spacechip.push(spaceship);
    console.log(`Nave ${spaceship.name} foi salva`);
    return all_spacechip;
}
//criando uma nave
const milenum = createSpaceShip({
    "name": "Milenuam",
    "pilot": "Mica",
    "crewLimit": 15,
    "crew": ["Cris", "João", "Hugo", "Pietro", "Maicon", "Lorenzo"],
    "inMission": false
});
//adicionando mais um a triupulação e enviando para missao
setCrew(milenum, "Kauan Afonso");
sendToMission(milenum);
//salvando a nave 
saveSpaceship(milenum);
console.log(all_spacechip);
