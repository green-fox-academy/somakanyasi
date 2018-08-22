/*
function hello(n: number) {
    console.log('hello' + n);
    hello(n + 1);
}

hello(0);
*/



function addNumbers(n: number): number {
    if (n < 0) {
        console.log('Cannot use negative values');
    } else if (n == 1) {
        return 1;
    } else {
        return n + addNumbers(n - 1);
    }
}
let answer: number;
answer = addNumbers(10);

console.log(answer);
