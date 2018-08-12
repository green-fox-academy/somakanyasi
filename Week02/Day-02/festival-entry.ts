'use strict';



const queue: any[] = [
    { name: 'Amanda', alcohol: 10, guns: 1 },
    { name: 'Mark', alcohol: 0, guns: 0 },
    { name: 'Dolores', alcohol: 0, guns: 1 },
    { name: 'Wade', alcohol: 1, guns: 1 },
    { name: 'Anna', alcohol: 10, guns: 0 },
    { name: 'Rob', alcohol: 2, guns: 0 },
    { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival


const watchlist: string[] = [];
let entryList: string [] = [];
let securityAlcoholLoot: number = 0;

function securityCheck (list: number [][]){
    for (let i: number = 0; i < list.length; i++){
        if (list[i]['guns'] === 0 && list [i]['alcohol'] === 0){
            entryList.push(list[i]['name']);
        } else if (list[i]['guns'] !== 0 && list[i]['alcohol'] !== 0){
            securityAlcoholLoot += list[i]['alcohol'];
            list[i]['alcohol'] = 0;
            watchlist.push(list[i]['name']);
        } else if (list[i]['guns'] !== 0 && list[i]['alcohol'] === 0){
            watchlist.push(list[i]['name']);
        } else if (list[i]['alcohol'] !== 0){
            securityAlcoholLoot += list[i]['alcohol'];
            list[i]['alcohol'] = 0;
            entryList.push(list[i]['name'])
        }
    }
    return [entryList, watchlist, securityAlcoholLoot];
}

securityCheck(queue);

console.log(`They can enter: ${entryList}
They are on the watchlist: ${watchlist}
The catch  of tonight: ${securityAlcoholLoot}`);
