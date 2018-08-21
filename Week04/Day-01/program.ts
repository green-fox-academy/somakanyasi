'use strict';

import { Person } from "./person";
import { Student } from "./student"



let person1: Person = new Person();
let person2: Person = new Person('Soma', 27, 'male');


let student1: Student = new Student('Mark', 20, 'male', 'KH');


student1.introduce();