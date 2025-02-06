class Hotel{
    constructor( nome ,enderco, total_quartos, taxa){
        this.nome = nome
        this.enderco = enderco
        this.total_quartos = total_quartos
        this.taxa = taxa
    }


    agendar_diaria(dias){
        return dias * this.taxa
    }


}


let hotel = new Hotel("hotel", "Rua 2", 55, 5.55)
console.log(hotel.agendar_diaria(7))