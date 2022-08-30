// GERENCIAMENTO DA APLICAÇÃO
class App{
    constructor(){
        this.spaceship = null
    }

    start(){
        this.enrollSpaceShip()
        let chosenOption
        do {
            chosenOption = this.showInitialMenu()
            this.redirectFeature(chosenOption)
        } while(chosenOption != "3")
        this.printAndExit()
    }

    enrollSpaceShip(){
        let shipName = prompt("Qual nome da nave?")
        let crewQuantity = prompt("Quantos tripulantes há na nave?")
        let shipType = this.askForSpaceShipType();
        if(shipType == "1"){
            let weaponsQuantity = prompt("Quantas armas há na nave?")
            this.spaceship = new battleSpaceShip(shipName, crewQuantity, weaponsQuantity)
        } else {
            let sitsQuantity = prompt("Quantos acentos há na nave?")
            this.spaceship = new transportSpaceShip(shipName, crewQuantity, sitsQuantity)
        }
    }

    askForSpaceShipType(){
        let chosenOption
        while(!["1", "2"].includes(chosenOption)){
            chosenOption = prompt("Qual o tipo da nave?\n1- Batalha\n2- Transporte")
        }
        return chosenOption
    }

    showInitialMenu(){
        const promptMessage = "Olá eu sou a AVII, o que devo fazer?\n" +
                                "1- Acelerar a nave\n" +
                                "2- Trocar de nave\n" +
                                "3- Imprimir status da nave e Sair"
        let chosenOption = prompt(promptMessage)
        while(!["1", "2", "3"].includes(chosenOption)){
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }

    redirectFeature(chosenOption){
        switch(chosenOption){
            case "1":
                this.accelerateShip()
                break
            case "2":
                this.enrollSpaceShip()
                break
        }
    }

    accelerateShip(){
        let acceleration = Number(prompt("Informe a velocidade que devo acelera:"))
        this.spaceship.speedUp(acceleration)

    }

    printAndExit(){
        let finalMessage = "Nome: " + this.spaceship.name + "\n" +
                            "Quantidade de tripulantes: " + this.spaceship.crewQuantity + "\n" +
                            "Velocidade atual: " + this.spaceship.currentVelocity + "\n"
            alert(finalMessage);
    }
}

