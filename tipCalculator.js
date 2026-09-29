
// Tip Calculator
// Calculate tip by taking the bill amount, multiplying by 0.20 (20%), then add
// the tip amount to the total to get the final amount.

let billAmount;
let tipPercent;

let tipAmount = billAmount * tipPercent;
let totalAmount = billAmount + tipAmount;

/* console.log(`My bill was $${billAmount} so I left a $${tipAmount} tip. The total 
 amount ended up being $${totalAmount}.`);


console.log(totalAmount > 50);
*/


function calculateTip(billAmount, tipPercent) {
    let tipAmount = billAmount * tipPercent;
    let totalAmount = billAmount + tipAmount;

    return totalAmount
}

console.log(calculateTip(40, 0.20));



// const service = "poor";

//     if (service === "great") {
//         tipPercent = 0.20;
//     } else if (service === "good") {
//         tipPercent = 0.15;
//     } else {
//         tipPercent = 0;
//     }

// let tipAmount = billAmount * tipPercent;
// let totalAmount = billAmount + tipAmount;

// console.log(totalAmount);
// */

/* 
create an object for a student:
name, age, overallGrade
then....

add a new key called isPassing(boolean)
then Update the overallGrade
then delete the isPassing key
*/

// const student = {
//     name: "Anahya",
//     age: 31,
//     overallGrade: "" // set as empty string to set data type inside of objects
// }

// // when adding a new key, name.itemAdded
// student.isPassing = true
// student.overallGrade = "A"

// console.log(student)

// // because overallGrade is an empty string, we add value in
// student.overallGrade = "B"

// console.log(student)

// // remove keys like this
// delete student.isPassing

// console.log(student)

// // for nested objects, just add each key with a period (.)
