class Reservation{
    constructor(guests,room,days){
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150
    
    static showBase(){
        console.log(`base fee is ${Reservation.baseFee} `)
    }

    static get premiumFee(){
        return Reservation.baseFee * 1.5
    }


}

Reservation.showBase()
const r1 = new Reservation(3, "201" , 5 )
console.log(r1)

console.log(`Premiumm is $${Reservation.premiumFee}` )
Reservation.baseFee = 250
console.log(`Premiumm now is $${Reservation.premiumFee}` )