// use while loop to count down from 20 by 3s

let number = 20

while (number >= 0) {
    console.log(number)
    number = number - 3;
}

// given [95, 42, 88, 30, 71] use for...of with continue to log only passing
// grades (70+)

let studentList = [
    {name: "Anahya", grade: 95},
    {name: "Danielle", grade: 42},
    {name: "Marshon", grade: 88},
    {name: "Brandon", grade: 30},
    {name: "Moo", grade: 71}
]

for (student of studentList) {
    if (student.grade <= 69) {
        continue
} 

console.log(`${student.name}, you have a ${student.grade} in the class!`)
}

// given an array of names, use break to stop at the first name that starts with
// "m" and log it

for (let student of studentList) {
    if (student.name.startsWith("M")) {
    console.log(student.name);
    break;
}
}