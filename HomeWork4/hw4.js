// ***** Task 1********************************

function calcRectangleArea(width, height) {

    try {

        if (isNaN(width) || isNaN(height)) {
            throw new Error("Invalid width or height");
        } else {
            return width * height;
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

let result = calcRectangleArea(10, 20);
console.log(result);

// ***** Task 2********************************

let age = prompt("What is your age?");
function checkAge(age) {
    try {
        if (age === null || age.trim() === "") {
            throw new Error("The field is empty! Please enter your age");
        } else if (isNaN(age)) {
            throw new Error("The field with a non-numeric value");
        } else if (age < 14) {
            throw new Error("The user's age is less than 14 years ");
        } else {
            return age;
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
        return null;

    }
}

let resultAge = checkAge(age);
console.log(resultAge);

// ***** Task 3********************************

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    try {
        let mList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // const d = new Date();
        if (month < 1 || month > 12 || month === null) {
            throw new MonthException("Incorrect month number")
        } else {
            return mList[month - 1];
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
        return null;
    }
}

let resultMonth = showMonthName(10);

console.log(resultMonth);


// ***** Task 4********************************

function showUser(id) {

    if (id < 0) {
        throw new Error(`The negative ${id} is entered`)
    } else {
        return { id: id };
    }
}

function showUsers(ids) {
    let userIds = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            userIds.push(showUser(ids[i]));
        } catch (error) {

            console.error(error.message);
        }
    }
    return userIds;
}

console.log(showUsers([7, -12, 44, 22]));









