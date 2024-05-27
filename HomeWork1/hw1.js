//task 2

let myLastName = 'Striletska';
console.log(`My last name is ${myLastName}`);

//task 3
// declare two variables;
//b ) write any values in the variable;
//c ) display the values of the variables on the screen;

let firstName = 'Olga';
let lastName = 'Striletska';

console.log(`My full name is ${firstName} ${lastName}`)
document.write(`My full name is ${firstName} ${lastName}`+"<br>")

let number1 = 100;
let number2 = '200';
document.write(`Numbers ${number1} ${number2}`+"<br>")

//d ) copy the value of one variable to another;
//e ) display the values of the variables on the screen.
number1 = number2
document.write(`New numbers ${number1} ${number2}`+"<br>")


//task 4
// 4. Create an object with the following 5 properties 
// : “ String ”, “ Number ”, “ Boolean ”, “ Undefined ”, “ Null ” . 
// The value of each property must correspond to the corresponding primitive data type.

const user = {
    firstName: "Olga", 
    age: 28,
    isValid: true,
    email: undefined,
    gender: null 
 };

 console.log(user);

 // task 5

 /*5. Using the confirm() function, ask the user a question about reaching the age of majority. 
 Record the result in the isAdult variable and output it to the console. */ 

 let isAdult = confirm("Have you reached the age of majority?");
        
 console.log(`Is the user an adult? ${isAdult}`);

 //task 6

 let myName = 'Olga';
 let myLast_Name = 'Striletska';
 let myStudyGroup = 'TA [Q2, 2024]';
 let yearOfBirth = '1995';
 let isMarried = false;

 console.log(typeof myName);
 console.log(`My name is ${myName}`);
 console.log(typeof myLast_Name);
 console.log(`My Last name is ${myLast_Name}`);
 console.log(typeof myStudyGroup);
 console.log(`My study group is ${myStudyGroup}`);
 console.log(typeof yearOfBirth);
 console.log(`My year of birth is ${yearOfBirth} year`);
 console.log(typeof isMarried);
 console.log(`I am married: ${isMarried}`);

 //task 7

// 7. Using the prompt() function, write a script that sequentially asks the user for a login, 
//  email, and password, and displays a message with the entered data on the screen. 
//  For example, "Dear User, your email is usermale@gmail.com, your password is qwerty ."

let login = prompt("What is your login?");
let email = prompt("What is your email?");
let password = prompt("What is your password?");
document.write(`Dear "${login}", your email is "${email}" and your password is "${password}"<br>`);

 //task 8
// 8*. Write a script that calculates the number of seconds in an hour , in a day , in a month , 
// records the results in the corresponding variables, and displays their values on the screen.

let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let dayInMonth = 30;

let secondsInAnHour = secondsInMinute * minutesInHour;
let secondsInADay = secondsInAnHour * hoursInDay;
let secondsInAMonth = secondsInADay * dayInMonth;

document.write(`Seconds in an hour ${secondsInAnHour}, secondsInADay ${secondsInADay}, secondsInAMonth ${secondsInAMonth}`)
