'use strict';

import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

let dominoes = initializeDominoes();

dominoes.sort(function (a: Domino , b: Domino): number {
    return a.compareTo(b);
  });

console.log(dominoes);

console.log(dominoes.values);






/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
/*

function printsInOrder(dominoes: Domino[]) {
    let dominoesInOrder: any[][] = [dominoes[0].values];
    for (let i: number = 0; i < dominoes.length; i++) {
        for (let j: number = 1; j < dominoes.length; j++) {
            if (dominoes[j].values[0] === dominoesInOrder[i][1]) {
                dominoesInOrder.push(dominoes[j].values);
            }
        }
    }
    return dominoesInOrder;
}


console.log(printsInOrder(dominoes));
*/