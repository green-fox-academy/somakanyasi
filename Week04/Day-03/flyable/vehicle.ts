import { Flyable } from "./flyable";

'use strict';

export class Vehicle {
  protected name: string;
  protected numberOfWings: number;
  protected numberOfPassangers: number;
  
  constructor(name: string) {
    this.name = name;
  }
}