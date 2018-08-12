'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 10000 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 20000 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 30000 }
];


// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]


let searchedAccount: number = 23456311;

function getNameAndBalance(myAccounts: any[][], accNum: number) {
  let selectedClient: any[][] = [];
  for (let i: number = 0; i < myAccounts.length; i++) {
    if (myAccounts[i]["accountNumber"] === accNum) {
      selectedClient.push(myAccounts[i]['clientName'], myAccounts[i]['balance']);
    }

  }
  return selectedClient;
}

console.log(getNameAndBalance(accounts, searchedAccount));


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]



let theSender: number = 43546731;
let theReceiver: number = 23456311;
let amountOfMoney: any = 500;

//let newBalance: any [][] = accounts[0]['balance'] - amountOfMoney;
//console.log(newBalance);

/*
function getAccountID(myAccounts: any[][], accNumSender: number, accNumReceiver) {
  let selectedClient: any[][] = [];
  for (let i: number = 0; i < myAccounts.length; i++) {
    if (myAccounts[i]["accountNumber"] !== accNumSender || myAccounts[i]["accountNumber"] !== accNumSender) {
      console.log('404 account not found');
    }
  
  }
  return selectedClient;
}

console.log(getNameAndBalance(accounts, searchedAccount));
*/


function transferAmount(myAccounts: any, sender: number, receiver: number, cashAmount: number) {
    for (let i: number = 0; i < myAccounts.length; i++) {
      if (sender === myAccounts[i]['accountNumber']) {
        myAccounts[i]['balance'] -= cashAmount;
      }
    }
    for (let j: number = 0; j < myAccounts.length; j++) {
      if (receiver === myAccounts[j]['accountNumber']) {
        myAccounts[j]['balance'] += cashAmount;
      }
    }
  return myAccounts;
}

console.log(transferAmount(accounts, theSender, theReceiver, amountOfMoney));

