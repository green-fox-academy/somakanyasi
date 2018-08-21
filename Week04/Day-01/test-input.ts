'use strict';

import { Person } from "./person";
import { Student } from "./student";
import { Mentor } from "./mentor";
import { Sponsor } from "./sponsor";
import { Cohort } from "./cohort"


let people: Person[] = [];

let mark: Person = new Person("Mark", 46, "male");
people.push(mark);

let jane: Person = new Person();
people.push(jane);

let john: Student = new Student("John Doe", 20, "male", "BME");
people.push(john);

let student: Student = new Student();
people.push(student);

let gandhi: Mentor = new Mentor("Gandhi", 148, "male", "senior");
people.push(gandhi);

let mentor: Mentor = new Mentor();
people.push(mentor);

let elon: Sponsor = new Sponsor("Elon Musk", 46, "male", "SpaceX");
people.push(elon);

let sponsor: Sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i: number = 0; i < 6; i++) {
  elon.hire();
}

for (let i: number = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome: Cohort= new Cohort("AWESOME");
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();