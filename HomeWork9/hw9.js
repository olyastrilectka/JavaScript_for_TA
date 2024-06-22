// **** Task1 ********************************

const getPromise = (message, delay) =>
    new Promise((resolve, reject) => {
        if (message === "") {

            reject(new Error("Ваше повідомлення пусте"));
            return;
        }
        setTimeout(() => {
            resolve(message);
        }, delay);

    });

getPromise("test promise", 2000).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


// **** Task2 ********************************

const calcArrProduct = (arr) =>
    new Promise((resolve, reject) => {
        if (arr.some(item => typeof item !== 'number')) {
            reject(new Error("Error! Array contains non-numeric values."));
            return;
        }
        resolve(arr);

    });

calcArrProduct([1, 2, 3, 4]).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

calcArrProduct([1, false, 3, 4]).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});


// **** Task3 ********************************

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
    for (let i = 0; i < 10; i++) {
        delay(i, 1000 * i)
            .then(result => {
                console.log(result);
            });
    }
}
console.log(showNumbers());


// **** Task4 ********************************

const delay2 = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
    for (let i = 0; i < 10; i++) {
        await delay(i, 1000 * i)
        console.log(i);

    }
}
console.log(showNumbers());