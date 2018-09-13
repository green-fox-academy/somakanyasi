'use strict';

import { Comparable } from "./comparator";
import { Printable } from './printable';

export class Domino implements Comparable, Printable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
    compareTo(other: Domino): number {
        if (this.values[0] < other.values[0] || this.values[0] === other.values[0] && this.values[1] < other.values[1]) {
            return -1;
        } else if (this.values[0] > other.values[0] || this.values[0] === other.values[0] && this.values[1] > other.values[1]) {
            return 1;
        } else {
            return 0;
        }
    }
    printAllFields(): void {
        console.log(this.values);
    }
}

