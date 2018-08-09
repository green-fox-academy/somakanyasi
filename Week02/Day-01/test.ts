let student = {
    name: "Bela",
    className: "Coffee",
    age: 20,
    pets: ["cica", "kutya"]
};

console.log(student["name"]);
console.log(student["age"]);

function printName(myObject: object) {
    console.log(myObject["name"]);
};

printName(student);



// print out Keys of an Object

function printKeys(myObject: object) {
    console.log(Object.keys(myObject));
};

printKeys(student);

// print out Values of an Object
/*
function printValues(myObject: object) {
    console.log(Object.values(myObject));
};

printValues(student);
*/

let isStudentHasPets: boolean = student.hasOwnProperty("name");
console.log(isStudentHasPets);


// to print out an element of the inner array in the object

console.log(student.pets[1]);

console.log(student.pets.indexOf("cica"));


// to store an object as an element of an array 

let myClass: object[] = [

    { name: "Bela", age: 20 },
    { name: "Anna", age: 23 }
];

console.log(myClass[1]["age"]);

// replace methode on strings

let text: string = 'Hello World World!';

let textAfterReplace: string = text.replace(
    'World' , 'Bela');

console.log(textAfterReplace);