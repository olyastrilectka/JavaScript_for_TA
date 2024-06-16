// //***Task 1********************************



// const element1 = document.getElementById('test');
// element1.textContent = 'Last';
// console.log(element1);


// const test = document.querySelector("#test");
// test.innerHTML = "Last"
// console.log(test);


// //***Task 2********************************

// const catImage = document.querySelector(".image");

// catImage.src = "cat.jpg";
// console.log(catImage);

// function showWindow() {
//     alert(catImage.src);
// }
// window.showWindow();

// function catImageNewWindow() {
//     window.open(catImage.src, "cat", "width=200,height=200,left=700,top=200");
// }
// console.log(catImageNewWindow());


// //***Task 3********************************


// const paragraphs = document.querySelectorAll('#text p');

// for (let i = 0; i < paragraphs.length; i++) {
//     console.log(`Selector text ${i}: ${paragraphs[i].textContent}`);
// }


// //***Task 4********************************

// const items = document.querySelectorAll('#list li');

// let output = '';
// output += items[0].textContent + ', ';
// output += items[4].textContent + ', ';
// output += items[1].textContent + ', ';
// output += items[3].textContent + ', ';
// output += items[2].textContent;

// console.log(output);


// //***Task 5********************************

// const header = document.querySelector('h1');
// header.style.backgroundColor = "lightgreen";

// const allParagraphs = document.querySelectorAll('p');
// allParagraphs[0].style.fontWeight = "bold";
// allParagraphs[1].style.color = "red";
// allParagraphs[2].style.textDecoration = 'underline';
// allParagraphs[3].style.fontStyle = 'italic';

// const itemsLi = document.querySelectorAll('#myList li');

// itemsLi.forEach(function (item) {
//     item.style.display = 'inline';
// });

// const invisibleSpan = document.querySelector('span');
// invisibleSpan.style.display = 'none';



// //***Task 6********************************

// let text1 = prompt('Please enter message1');
// let text2 = prompt('Please enter message2');

// const input1 = document.querySelector('#input1');
// const input2 = document.querySelector('#input2');

// input1.value = text1;
// input2.value = text2;
// console.log(`Message1 = ${text1} and Message2 =  ${text2}`);

// [input1.value, input2.value] = [text2, text1];
// console.log(`Swapped values: Message1 = ${input1.value} and Message2 = ${input2.value}`);



// //***Task 7********************************


// const main = document.createElement('main');
// main.className = 'mainClass check item';

// const div = document.createElement('div');
// div.id = 'myDiv';

// const p = document.createElement('p');
// p.textContent = 'First paragraph';

// div.appendChild(p);

// main.appendChild(div);

// document.body.appendChild(main);




