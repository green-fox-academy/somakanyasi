// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`


let numList: number [] = [3, 4, 5, 6, 7];


// with the built in method

let newList = numList.reverse();
console.log('The reversed new list is: ' + newList);


// with a loop

let loopedReversedList: number [] = [];

for (let i: number = numList.length -1; i >= 0; i--){
    loopedReversedList.push(numList[i]);
}

console.log(loopedReversedList);
