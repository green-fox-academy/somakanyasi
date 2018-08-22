class Animal{
    public nameOfTheAnimalmal: string;
    public hunger: number;
    public thirst: number;
    constructor(nameOfTheAnimal: string, hunger: number, thirst: number){
        this.nameOfTheAnimalmal = nameOfTheAnimal;
        this.thirst = 50;
        this.hunger = 50;
    }
    eat(): number{
        this.hunger -= 1;
        console.log('The' + this.nameOfTheAnimalmal + '\'s hunger is now: ' + this.hunger);
        return this.hunger;
    }
    drink(): number{
        this.thirst -= 1;
        console.log('The ' + this.nameOfTheAnimalmal + '\'s thirst is now: ' + this.thirst);        
        return this.thirst;
    }
    play(){
        this.hunger ++;
        this.thirst ++;
        return console.log('The hunger: ' + this.hunger + ', and the thirst: ' + this.thirst +  ' of the ' + this.nameOfTheAnimalmal + ' has increased by 1.');
        
    }
}

let Armadillo: Animal = new Animal('Armadillo', 50, 50);
let Mockingjay: Animal = new Animal('Mockingjay', 30, 40);
let SandLizard: Animal = new Animal('SandLizard', 20, 10)


Mockingjay.play();
Armadillo.drink();
SandLizard.eat();
