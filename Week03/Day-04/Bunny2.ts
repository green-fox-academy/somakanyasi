'use strict';

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

'use strict'

function bunnyEarCounterVol2(bunniesInLine: number): any {
    if (bunniesInLine < 0) {
        let errorMessage: string = 'You can not have negative amount of bunnies in the line. That is no possible!';
        return errorMessage;
    } else {
        if (bunniesInLine > 0) {
            if (bunniesInLine % 2 == 1) {
                return 2 + bunnyEarCounterVol2(bunniesInLine - 1);
            } else {
                return 3 + bunnyEarCounterVol2(bunniesInLine - 1);
            }
        } else {
            return 0;
        }
    }
}

console.log(bunnyEarCounterVol2(7));