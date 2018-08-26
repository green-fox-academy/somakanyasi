class Counter {
    private integer: number;
    private originalNum: number;

    constructor(integer: number = 0) {
        this.integer = integer;
        this.originalNum = integer;
    }

    add(increaseValue?: number) {
        if (increaseValue) {
            this.integer += increaseValue;
            return this.integer;
        } else {
            this.integer ++;
            return this.integer;
        }
    }

    get(){
        return this.integer.toString();
    }

    reset(){
        return this.originalNum;
    }
}


let testNumber: Counter = new Counter(10);
console.log(testNumber);
testNumber.add();
console.log(testNumber);
testNumber.add(4);
console.log(testNumber);
console.log(testNumber.get());
console.log(testNumber.reset());



