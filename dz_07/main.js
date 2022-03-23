class Transport {
    constructor(speed,type,consumption,) {
        this.speed = speed
        this.type = type
        this.consumption = consumption
    }

    startEngine (){
        console.log(`${this.type} завелась`)
    }
}
const transport = new Transport(50 , 'transport', 'benzin')
console.log(transport)
transport.startEngine()

class Car extends Transport{
    constructor(speed,type,consumption,brand, carType,) {
        super(speed,type,consumption,);
        this.brand = brand
        this.carType = carType
    }
    startEngine() {
        console.log(`${this.brand} завелась`)
    }
}
const bmw = new Car(100 , 'car' , 'benzin 95 ' ,'bmw','cupe')
const mersedes = new Car(250 , 'car' , 'dizel ' ,'mersedes ','sidan')
bmw.startEngine()
mersedes.startEngine()

console.log(bmw)
console.log(mersedes)




