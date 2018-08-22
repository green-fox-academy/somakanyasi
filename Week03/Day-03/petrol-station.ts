class Station {
  private gasAmount: number;
  constructor(gasAmount: number) {
    this.gasAmount = 100000;
  }
  refill() {
    this.gasAmount -= getCapacity;
  }
}

class Car {
  private gasAmount: number;
  private capacity: number;
  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }
  getCapacity(){
    return this.capacity;
  }
}