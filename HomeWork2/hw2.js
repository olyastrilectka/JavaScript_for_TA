// //Task 1.1

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res1_1 = `${x}${y}`;
console.log(res1_1);
console.log(typeof res1_1);

//Task 1.2
let res2 = String(x === 1) + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

//Task 1.3
let res3 = x + y === 3;
console.log(res3); // true
console.log(typeof res3); // " boolean "

let res3_1 = (x + y) > 0;
console.log(res3_1); // true
console.log(typeof res3_1); // " boolean "

let res3_2 = !!(x + y); // true
console.log(res3_2);
console.log(typeof res3_2);

// //Task 1.4
let res4 = (x + y);
console.log(res4); // "number"
console.log(typeof res4);

let res4_1 = (x + y);
console.log(res4_1); // "number"
console.log(typeof res4_1);


//Task 2
// 2 .The user enters a number(use prompt()).It is necessary to check whether the entered number is correct
// a ) even m is positive;
// b ) a multiple of 7.
// Display the result of the check in the console.

let number = prompt("Please enter a value");

number = Number(number);

if (isNaN(number)) {
    console.log("Entered value is not a valid number.");
    document.write("Entered value is not a valid number.");
} else if (number > 0 && number % 2 === 0) {

    let result = number * 7;
    document.write(`Entered value is positive and even: ${result}`);
    console.log(`Entered value is positive and even: ${result}`);
} else if (number > 0 && number % 2 !== 0) {
    document.write(`Entered value is positive, but not an even number: ${number}`);
    console.log(`Entered value is positive, but not an even number: ${number}`);
}
else {
    document.write(`Entered value is negative or zero: ${number}`);
    console.log(`Entered value is negative or zero: ${number}`);
};

//Task 3

// 3 .Create an empty array;
// 1) Write any number in the first element of the array;
// 2) Write any line in the second element of the array;
// 3) Write any logical value in the third element of the array;
// 4) Write the value null in the fourth element of the array;
// 5) Enter the number of elements stored in the array on the screen;
// 6) Ask the user to enter any value and write this value in the fifth element of the array;
// 7) Display the fifth array element on the screen.
// 8) Delete the 1st element of the array and display the array on the screen.

let myArray = [1, "Test me", false, null];
console.log(myArray.length);

let userValue = prompt("Please enter a value");
userValue = Number(userValue);
myArray.push(userValue);
// console.log(myArray[4]);
// document.write(`Entered value is: ${myArray[4]}`);

myArray.shift();
console.log(myArray);
document.write(myArray);

//Task 4
let cities = [" Rome ", " Lviv ", " Warsaw "];
let result = cities.join(" * ");
console.log(String(result));
document.write(String(result));

//Task 5

let isAdult = prompt("Please enter your age");

isAdult = Number(isAdult);
let userAge = (isAdult >= 18 ? "You have reached the age of majority" : "You are still too young");
document.write((userAge));
console.log(userAge);

//Task 6

let a = prompt("Please enter the length of the first side of the triangle");
let b = prompt("Please enter the length of the second side of the triangle");
let c = prompt("Please enter the length of the third side of the triangle");

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log("Incorrect data")

} else {
    let s = (a + b + c) / 2;

    let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c))).toFixed(3);

    console.log(area);
    document.write(area);

    function isTriangle(a, b, c) {
        return (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a);

    }

    if (isTriangle(a, b, c)) { console.log(`triangle is rectangular ${area}`) }

    else { console.log(`triangle is not rectangular ${area}`) }
}
//Task 7

let now = new Date();
let h = now.getHours();
if (h >= 23 && h < 5) {
    (console.log("Good Night"));
} else if (h >= 5 && h < 12) {
    (console.log("Good Morning"));
} else if (h >= 12 && h < 18) {
    (console.log("Good Day"));
}
else if (h >= 18 && h <= 23) {
    (console.log("Good Evening"));
}

