let studentName = "Vanna";
let age = 20;
let course = "BSCS";
let yearLevel = 3;
let section = "3B";
let school = "NWSSU";
let grade1 = 90;
let grade2 = 88;
let grade3 = 92;
let status = "Regular";

const schoolYear = "2026-2027";
const subject1 = "Programming";
const subject2 = "Web Development";
const subject3 = "Database";
const passingGrade = 75;
const city = "Calbayog";
const country = "Philippines";
const semester = "First Semester";
const studentType = "College Student";
const department = "Computer Studies";

console.log(`Student Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Year Level: ${yearLevel}`);
console.log(`Section: ${section}`);
console.log(`School: ${school}`);
console.log(`School Year: ${schoolYear}`);
console.log(`Semester: ${semester}`);
console.log(`Department: ${department}`);
console.log(`Student Status: ${status}`);

const greetStudent = () => `Hello, ${studentName}!`;
const getAverage = () => (grade1 + grade2 + grade3) / 3;
const isPassing = grade => grade >= passingGrade;
const addBonus = grade => grade + 5;
const showCourse = () => `Your course is ${course}.`;

console.log(greetStudent());
console.log(`Average: ${getAverage()}`);
console.log(`Passing: ${isPassing(getAverage())}`);
console.log(`Bonus Grade: ${addBonus(grade1)}`);
console.log(showCourse());

const subjects = ["Programming", "Web Development", "Database"];
const [firstSubject, secondSubject, thirdSubject] = subjects;

const grades = [90, 88, 92];
const [firstGrade, secondGrade, thirdGrade] = grades;

const hobbies = ["Coding", "Gaming", "Reading"];
const [hobby1, hobby2, hobby3] = hobbies;

console.log(firstSubject, secondSubject, thirdSubject);
console.log(firstGrade, secondGrade, thirdGrade);
console.log(hobby1, hobby2, hobby3);

const student = {
    name: "Vanna",
    course: "BSCS",
    year: 3
};

const { name, course: studentCourse, year } = student;

const contact = {
    email: "padillavanna@gmail.com",
    phone: "09918912532"
};

const { email, phone } = contact;

const address = {
    city: "Calbayog",
    country: "Philippines"
};

const { city: studentCity, country: studentCountry } = address;

console.log(name, studentCourse, year);
console.log(email, phone);
console.log(studentCity, studentCountry);

const basicSubjects = ["Programming", "Database"];
const additionalSubjects = ["Web Development", "Networking"];

const allSubjects = [...basicSubjects, ...additionalSubjects];
const moreSubjects = [...allSubjects, "Software Engineering"];

console.log(allSubjects);
console.log(moreSubjects);

const basicInfo = {
    name: "Vanna",
    course: "BSCS"
};

const schoolInfo = {
    school: "NWSSU",
    year: 3
};

const completeInfo = {
    ...basicInfo,
    ...schoolInfo
};

const updatedInfo = {
    ...completeInfo,
    section: "3B"
};

console.log(completeInfo);
console.log(updatedInfo);

const gradeList = [90, 85, 88, 92];
const increasedGrades = gradeList.map(grade => grade + 2);

const subjectList = ["Programming", "Database", "Networking"];
const upperSubjects = subjectList.map(subject => subject.toUpperCase());

console.log(increasedGrades);
console.log(upperSubjects);

const highGrades = gradeList.filter(grade => grade >= 90);

const passingGrades = gradeList.filter(grade => grade >= passingGrade);

console.log(highGrades);
console.log(passingGrades);

const studentDetails = {
    name: "Vanna",
    contact: {
        email: "padillavanna12@gmail.com"
    }
};

const emailResult = studentDetails?.contact?.email;

const studentProfile = {
    name: "Vanna",
    course: {
        name: "BSCS"
    }
};

const courseResult = studentProfile?.course?.name;

console.log(`Email: ${emailResult}`);
console.log(`Course: ${courseResult}`);