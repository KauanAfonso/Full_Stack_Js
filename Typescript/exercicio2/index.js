var planets = [];
function save_planet(planet) {
    planets.push(planet);
}
;
function find_planet(planet) {
    var planet_found = planets.find(function (p) {
        return p.name === planet.name;
    });
    return planet_found;
}
function update_planet_situation(planet, situacao) {
    var current_planet = find_planet(planet);
    current_planet.situacao = situacao;
    console.log("Situação do planeta atualizado com sucesso !");
    return current_planet;
}
function add_satelite(planet, satelite) {
    var current_planet = find_planet(planet);
    current_planet.satelites.push(satelite);
    console.log("Satelite adicionado com sucesso !");
    return current_planet;
}
function remove_satelite(planet, satelite) {
    var current_planet = find_planet(planet);
    //cria um novo array sem o elemento satalite
    current_planet.satelites = current_planet.satelites.filter(function (s) { return s !== satelite; });
    console.log("Satelite removido com sucesso !");
    return current_planet;
}
function show_planets() {
    console.log(planets);
    return planets;
}
var terra = {
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
