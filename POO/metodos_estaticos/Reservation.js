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
}