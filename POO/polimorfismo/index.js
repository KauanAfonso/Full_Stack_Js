class Veihicl{
    move(){
        console.log("O veiculo está se movendo")
    }
}

class Car extends Veihicl{
    move(){
        console.log("O carro está se movendo")
    }
}

class Ship extends Veihicl{
    move(){
        console.log("O navio está navegando")
    }
}

class Aircraft extends Veihicl{
    move(speed){
        console.log("A aeronave está voando a  " , speed)
    }
}


const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

// delorean.move()
// blackPearl.move()
// epoch.move(80)


function start(vehicle) {
    console.log("Iniciando um veículo...")
    vehicle.move() // pode ser qualquer subclass de Vehicle
  }
  
  start(delorean)
  start(blackPearl)
  start(epoch)