let studentName = "Vanna";
let age = 20;
let course = "BSCS";

let subjects = ["Web Development", "Java", "Database"];
let grades = [95, 88, 92];
let activities = ["Assignment", "Midterm", "Final Exam"];

if (age >= 18) {
    console.log(studentName + " is already an adult.");
}

if (course === "BSCS") {
    console.log(studentName + " is a Computer Science student.");
}

if (grades[0] >= 75) {
    console.log("Web Development: Passed");
}

console.log("My Subjects:");
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

console.log("My Grades:");
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
}

console.log("My Activities:");
for (let i = 0; i < activities.length; i++) {
    console.log(activities[i]);
}