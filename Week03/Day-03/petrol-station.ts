export class Station {
  public name: string;
  public gasAmount: number;

  constructor(name: string, gasAmount: number = 10000) {
    this.name = name;
    this.gasAmount = gasAmount;
  }

  refill(car: Car) {
    this.gasAmount -= (car.capacity - car.gasAmount);
    car.gasAmount = car.capacity;
  }
}

export class Car {
  public type: string;
  public gasAmount: number;
  public capacity: number;

  constructor(type: string, capacity: number) {
    this.type = type;
    this.gasAmount = 0;
    this.capacity = capacity;
  }

  drive (kilometer: number) {
    this.gasAmount -= (kilometer / 100) * 7;
  }
}

///------///

let molStation: Station = new Station('MOL');
let omwStation: Station = new Station('OMW', 5000);
let bmw: Car = new Car('BMW', 100);
let subaru: Car = new Car('Subaru', 85);

//console.log(molStation, omwStation, bmw, subaru);
molStation.refill(bmw);
omwStation.refill(subaru);
console.log(molStation, omwStation, bmw, subaru);
bmw.drive(440);
subaru.drive(395);
console.log(molStation, omwStation, bmw, subaru);
molStation.refill(subaru);
omwStation.refill(bmw);
console.log(molStation, omwStation, bmw, subaru);