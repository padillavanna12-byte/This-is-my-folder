// Variables
let studentName = "Vannana";
let age = 20;
let course = "BSCS";

// Arrays
let subjects = ["Programming", "Database", "Networking"];
let grades = [90, 85, 88];
let activities = ["Quiz", "Project", "Exam"];

// Conditional 1
if (age >= 20) {
  console.log(studentName + " is an adult.");
}

// Conditional 2
if (course === "BSCS") {
  console.log(studentName + " is taking Computer Science.");
}

// Conditional 3
if (grades[0] >= 75) {
  console.log("Programming: Passed");
}

// Loop 1 - Display subjects
console.log("Subjects:");
for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}

// Loop 2 - Display grades
console.log("Grades:");
for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
}

// Loop 3 - Display activities
console.log("Activities:");
for (let i = 0; i < activities.length; i++) {
  console.log(activities[i]);
}