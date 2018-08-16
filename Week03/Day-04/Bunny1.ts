// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).


function bunnyEarCounter(numberOfBunnies: number): number {
    if (numberOfBunnies > 0) {
        return 2 + bunnyEarCounter(numberOfBunnies - 1);
    } else {
        return 0;
    }
}

console.log(bunnyEarCounter(10));
