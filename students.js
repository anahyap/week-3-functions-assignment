// create student list with name, age, grades (array), enrolled (boolean)
let students = [
    { name: "Anahya", age: 31, grades: [95, 92, 87], enrolled: true },
    { name: "Danielle", age: 28, grades: [84, 78, 82], enrolled: true },
    { name: "Marshon", age: 30, grades: [88, 89, 91], enrolled: false },
    { name: "Brandon", age: 30, grades: [43, 57, 68], enrolled: false },
    { name: "Moo", age: 26, grades: [71, 70, 78], enrolled: true }
];


// add student by all parameters
function addStudent(name, age, grades, enrolled) {
    const newStudent = { name, age, grades, enrolled };

    students.push(newStudent);

    return newStudent;
}

//test
console.log(addStudent("Derrick", 33, [90, 76, 88], true));


// remove student by their name
function removeStudentByName(name) {

    let i = 0;

    while (i < students.length) {

        if (students[i].name === name) {
            let removedStudent = students.splice(i, 1);

            return removedStudent[0];
        }

        i++;
    }

    console.log("Student not found");
    return null;
}

// test
console.log(removeStudentByName("Brandon"));

// find a student by just name
function findStudent(name) {

    for (let i = 0; i < students.length; i++) {

        if (students[i].name === name) {
            return students[i];
        }
    }

    console.log("Student not found");
    return null;
}

// test
console.log(findStudent("Anahya"));


// get average using grades array
function calculateAverage(grades) {

    let total = 0;

    for (let grade of grades) {
        total = total + grade;
    }

    return total / grades.length;
}

// test
console.log(calculateAverage(students[0].grades));


// listing enrolled students
function listEnrolledStudents() {

    let enrolledStudents = [];

    for (let i = 0; i < students.length; i++) {

        if (students[i].enrolled === true) {
            enrolledStudents.push(students[i]);
        }
    }

    return enrolledStudents;
}

// test
console.log(listEnrolledStudents());

// class average
function classAverage() {

    if (students.length === 0) {
        console.log("Empty roster");
        return null;
    }

    let total = 0;

    for (let student of students) {
        total += calculateAverage(student.grades);
    }

    return total / students.length;
}

// test
console.log(classAverage());
