// Task 1

let array = [2, 3, 4, 5];

function multiplyWithWhile() {
    let result = 1;
    let i = 0;
    while (i < array.length) {
        result *= array[i];
        i++;
    }
    return result;

}

let result = multiplyWithWhile();

console.log(result);
document.write(result + "<br>");


function multiplyWithFor() {

    let result = 1
    for (let i = 0; i < array.length; i++) {
        result *= array[i];
    }

    return result;
}
let result1 = multiplyWithFor();

console.log(result1);
document.write(result1 + "<br>");

// Task 2

for (let i = 0; i <= 15; i++) {

    if (i % 2 === 0) {
        document.write(`${i} is even` + "<br>");
    } else {
        document.write(`${i} is odd` + "<br>");
    }

}

// Task 3

function randArray() {
    return Array.from(
        { length: 5 },
        function () {
            return Math.floor(Math.random() * 1000)
        });
}

console.log(randArray());
document.write(randArray() + "<br>");


// Task 4

let a = parseFloat(prompt("Please enter the first number"));
let b = parseFloat(prompt("Please enter the second number"));

function raiseToDegree(a, b) {
    return Math.pow(a, b);

}

console.log(raiseToDegree(a, b)) + "<br>";
document.write(raiseToDegree(a, b) + "<br>");


// Task 5

function findMin() {
    return Math.min(...arguments);
}

let minValue = findMin(1, -1, 0, 2, 15);

console.log(minValue);
document.write(minValue + "<br>");


// Task 6

function findUnique(arr) {
    return [...new Set(arr)];

};
const arr = [1, 2, 3, 65, 56, 56];
const uniqueValues = findUnique(arr);

if (arr.length === uniqueValues.length) {
    console.log(true);
    document.write(true + "<br>");
} else {
    console.log(false);
    document.write(false + "<br>");
}


// Task 7

function findLast(array, x = 1) {
    return array.slice(-x);
};

document.write(findLast([1, 2, 3, 4, 5, 10, 100, -56, -55566], 2) + "<br>");
console.log(findLast([1, 2, 3, 4, 5, 10, 100, -56, -55566], 2));


// Task 8

const mySentence = "i love java script";

function capitalize(mySentence) {
    const words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");

}
document.write(capitalize(mySentence));






