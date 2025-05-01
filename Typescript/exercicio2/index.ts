
let planets = [];

type planet_options = {
    name: string;
    coordenadas: [number, number, number, number];
    situacao: "habitado" | "inabitado" | "inabitavel" | "Inexplorado";
    satelites: string[];
};

function save_planet(planet: planet_options){
    planets.push(planet);
};


function find_planet(planet: planet_options){

    let planet_found = planets.find((p) => {
        return p.name === planet.name
    })

    return planet_found;
}


function update_planet_situation(planet: planet_options, situacao:"habitado" | "inabitado" | "inabitavel" | "Inexplorado"){
    
    let current_planet = find_planet(planet);

    current_planet.situacao = situacao;

    console.log("Situação do planeta atualizado com sucesso !");
    return current_planet;

}

function add_satelite(planet: planet_options, satelite: string){
    let current_planet = find_planet(planet);
    current_planet.satelites.push(satelite)
    
    console.log("Satelite adicionado com sucesso !")
    return current_planet
}


function remove_satelite(planet: planet_options, satelite: string){
    let current_planet = find_planet(planet);
    //cria um novo array sem o elemento satalite
    current_planet.satelites = current_planet.satelites.filter((s) => s !== satelite);

    
    console.log("Satelite removido com sucesso !")
    return current_planet
}


function show_planets(){
    console.log(planets)
    return planets
}


let terra: planet_options = {
    name: "Terra",
    coordenadas: [1, 2, 3, 4],
    situacao: "habitado",
    satelites: ["Lua"]
  };
  
  save_planet(terra);
  update_planet_situation(terra, "inabitado");
  add_satelite(terra, "Estação Espacial");
  remove_satelite(terra, "Lua");
  show_planets();
