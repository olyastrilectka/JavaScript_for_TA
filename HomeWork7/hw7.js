// let newWindow = window.open("", "javascript", "width = 200", "height = 200");
// newWindow.resizeTo("width = 100", "height = 100");

// function handleClick() {
//     console.log("Click on JS");
// }

// let title = document.querySelector("#title");
// let subtitle = document.querySelector("#subtitle");
// title.onclick = function () {
//     console.log("Click on title");
// }
// function handleClick() { console.log("Click on title"); }
// title.addEventListener("click", function (event) {
//     subtitle.style.color = "red";
// });


// let input = document.querySelector("#inp");
// let button = document.querySelector("#btn");

// button.addEventListener("click", function () {
//     console.log(input.value);
// });

// let registerForm = document.querySelector("#registerForm");

// registerForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(event.target.elements.name.value);
//     console.log(event.target.elements.password.value);
// })



// //****Task1******
// let newWindow = window.open("", "", "width = 300", "height = 300");

// setTimeout(() => newWindow.resizeTo(500, 500), 2000)


// setTimeout(() => newWindow.moveWindow(200, 200), 4000);


// setTimeout(() => newWindow.close(), 6000);

//****Task2***********
// let text = document.querySelector("#text");

// function changeCSS() {
//     text.style.color = "orange";
//     text.style.fontSize = "20px";
//     text.style.fontFamily = "Comic Sans MS";
// }


//****Task3***********

// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");
// let button3 = document.querySelector("#button3");
// let link = document.querySelector("#link");

// function changeToBlue() {

//     document.body.style.backgroundColor = "blue";
// };


// function changeToPink() {

//     document.body.style.backgroundColor = "pink";
// };


// let pressTimer;

// function startPress() {
//     pressTimer = setTimeout(changeToBrown, 500);
// }

// function changeToBrown() {

//     document.body.style.backgroundColor = "brown";
// }

// function endPress() {
//     clearTimeout(pressTimer);
//     document.body.style.backgroundColor = "white";
// }


// link.addEventListener('mouseenter', function () {
//     document.body.style.backgroundColor = "yellow";
// });

// link.addEventListener('mouseleave', function () {
//     document.body.style.backgroundColor = "white";
// });



//****Task4***********

// const dropDown = document.querySelector("#dropdown");

// function chooseAndDelete() {

//     const selectedOption = dropDown.options[dropDown.selectedIndex];

//     if (selectedOption) {
//         dropDown.remove(selectedOption.index);
//     }
// }


//****Task5***********

// let liveButton = document.querySelector("#livebutton");
// let message = document.querySelector("#message");

// liveButton.addEventListener('click', function () {
//     message.textContent = "I was pressed!";
// });

// liveButton.addEventListener('mouseenter', function () {
//     message.textContent = "Mouse on me!";
// });

// liveButton.addEventListener('mouseleave', function () {
//     message.textContent = "Mouse is not on me!";
// });


//****Task6***********

// let finalMessage = document.querySelector("#message");
// let messageHeight = document.querySelector("#message1");
// let messageWidth = document.querySelector("#message2");

// function windowResize() {

//     let height = window.innerHeight;
//     let width = window.innerWidth;

//     let messageText = `Height: ${height}, Width: ${width}`;
//     finalMessage.textContent = messageText;
// }

// window.addEventListener('resize', windowResize());


//****Task7***********

let dropDownCountries = document.querySelector("#country");
let dropDownCities = document.querySelector("#cities")
let messageCountries = document.querySelector("#message1");
let messageCities = document.querySelector("#message2");

function chooseCountry() {

    let selectedCountry = dropDownCountries.options[dropDownCountries.selectedIndex].text;
    messageCountries.textContent = selectedCountry;
}
chooseCountry();

function chooseCity() {

    let selectedCity = dropDownCities.options[dropDownCities.selectedIndex].text;
    messageCities.textContent = selectedCity;
}
chooseCity();



