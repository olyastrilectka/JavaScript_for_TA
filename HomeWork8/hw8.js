//*********************Task1****************

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , z] = arr;
console.log(x);
console.log(y);
console.log(`[${z}]`);

//*********************Task2********************

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let { names, ages } = data;
let [, name2, , name4] = names;
let [, age2, , age4] = ages;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);


//*********************Task3********************
function mul(...arguments) {
    let result = 1;
    let foundNumber = false;

    for (let argument of arguments) {
        if (typeof argument === 'number') {
            result *= argument;
            foundNumber = true;
        }
    }

    return foundNumber ? result : 0;

}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));


//*********************Task4********************

let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => {
            return this.data + "";
        });
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback) => {
            this.result = callback();
        };
    }
};
client.calc(123);
console.log(client.result);
console.log(typeof client.result);


//*********************Task5********************


const keys = [1, 2, 3, 4];
const values = ["div", "span", "b", "i"];
const map = mapBuilder(keys, values);

function mapBuilder(keysArray, valuesArray) {
    const map = new Map();

    for (let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArray[i]);
    }

    return map;
}
console.log(map);
console.log(map.size);
console.log(map.get(2));






