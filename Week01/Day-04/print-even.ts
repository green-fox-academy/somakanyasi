'use strict'

// Create a program that prints all the even numbers between 0 and 500

for (let i: number = 0; i < 500; i++) {
    if (i % 2 == 0) {
        console.log(i)
    } else {
        continue
    }
}