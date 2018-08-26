class Students {
    learn(){
        console.log('Do not bother! I\'m learning.');
    }
    question(askingTheTeacher){
        console.log('What is the meaning of házsárt?');
        askingTheTeacher.answer();
    }
}
class Teachers {
    teach(toTeach){
        toTeach.learn();
    }
    answer(){
        console.log('Ne kérdezz hülyeségeket fiam! Ez egy 1-es lesz.');
        
    }
}

let luckyStudent: Students = new Students;
let evenLuckierTeacher: Teachers = new Teachers;

luckyStudent.question(evenLuckierTeacher);
evenLuckierTeacher.teach(luckyStudent)