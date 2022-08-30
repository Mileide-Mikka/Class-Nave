class spaceShip {
    static get DECELARATION_RATE(){
        return 0.17
    }

    constructor(name, crewQuantity){
        this.name = name
        this. crewQuantity = crewQuantity
        this.currentVelocity = 0 // velocidade inicial da nave
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration * (1 - spaceShip.DECELARATION_RATE)
    }
}