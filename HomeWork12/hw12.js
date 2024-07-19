// ***** Task 1********************************

function firstCharacterUpper(str) {
    const regex = /^[A-Z]/;
    if (regex.test(str)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}

firstCharacterUpper('regexp');
firstCharacterUpper('RegExp');

// ***** Task 2 *********************************

function checkEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}

console.log(checkEmail("Qmail2@gmail.com "));

function checkEmail(email) {
    const regExp = /^\w+@\w+\.\S+/.test(email);
    console.log(regExp);
}
checkEmail("Qmail2@gmail.com ");


// ***** Task 3 *********************************

const regExp3 = /d(b+)(d*)/ig;
const resultArray = regExp3.exec("cdbBdbsbz")
console.log(resultArray);


// ***** Task 4 *********************************

const regExp4 = /^(\w+)\s+(\w+)/;
let text = 'Java Script';
let newText = text.replace(regExp4, '$2 $1');
console.log(newText);


// ***** Task 5 *********************************

function validateCardNumber(cardNumber) {
    const regExp5 = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber);
    return regExp5;
}

console.log(validateCardNumber("9999-9999-9999-9999"));


// ***** Task 6 *********************************


function checkEmail(email) {
    const regExp6 = /^[a-zA-Z0-9]+([._-]?\w+)*@\w+([.-]?\w+)*\.[a-zA-Z]{2,3}$/.test(email);
    return regExp6;
}
console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('checkEmail(my_ma--il@gmail.com'))


// ***** Task 7 *********************************

function checkLogin(login) {

    const isValid = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/.test(login);
    const numbers = (login.match(/\b\d+(\.\d+)?\b/g) || []).join(', ');
    return { isValid, numbers };
}


console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('1.1ret3'));
console.log(checkLogin('ee ret 3'));
console.log(checkLogin('ee1 ret3'));
console.log(checkLogin('ee1 ret 1.5'));




