class Sharpie {
    private color: string;
    private width: number;
    private inkAmount: number;
    
    constructor(color: string, width: number){
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }
    use(){
        this.inkAmount -= 1;
        console.log('The amount of ink after use is: ' + this.inkAmount);
        return this.inkAmount;
    }
}

let newSharpie: Sharpie = new Sharpie('green', 25);

newSharpie.use();