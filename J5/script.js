//!__________________________________________________________Button to change task

let changeTask_1 = document.querySelector('#changeTask_1');
let changeTask_2 = document.querySelector('#changeTask_2');
let changeTask_3 = document.querySelector('#changeTask_3');
let changeTask_4 = document.querySelector('#changeTask_4');
let changeTask_all = document.querySelector('#changeTask_all');
let Task_1 = document.querySelector('.Task_1');
let Task_2 = document.querySelector('.Task_2');
let Task_3 = document.querySelector('.Task_3');
let Task_4 = document.querySelector('.Task_4');

changeTask_1.addEventListener('click', function() {
    Task_1.style.display = 'block'
    Task_2.style.display = 'none'
    Task_3.style.display = 'none'
    Task_4.style.display = 'none'
});
changeTask_2.addEventListener('click', function() {
    Task_1.style.display = 'none'
    Task_2.style.display = 'block'
    Task_3.style.display = 'none'
    Task_4.style.display = 'none'
});
changeTask_3.addEventListener('click',  function() {
    Task_1.style.display = 'none'
    Task_2.style.display = 'none'
    Task_3.style.display = 'block'
    Task_4.style.display = 'none'
});
changeTask_4.addEventListener('click',  function() {
    Task_1.style.display = 'none'
    Task_2.style.display = 'none'
    Task_3.style.display = 'none'
    Task_4.style.display = 'block'
});
changeTask_all.addEventListener('click',  function() {
    Task_1.style.display = 'block'
    Task_2.style.display = 'block'
    Task_3.style.display = 'block'
    Task_4.style.display = 'block'
});


//!__________________________________________________________TASK_1

let firstData = document.querySelector('#inputData');
let button = document.querySelector('#button');
let resultParagraph = document.querySelector('.resultTask_1');

button.addEventListener('click', function() {
    const symbol = firstData.value;
    let str = '';
    let mistake = '';
    if (symbol.length == 0) {
        resultParagraph.innerHTML = '<p style="color: rgb(173, 3, 3);">Enter DNA symbol</p>'
    } else {
        for (let i = 0; i < symbol.length; i++) {
            if (symbol[i] == 'A') {
                str += 'T'
            } else if (symbol[i] == 'T') {
                str += 'A'
            } else if (symbol[i] == 'C') {
                str += 'G'
            } else if (symbol[i] == 'G') {
                str += 'C'
            } else {
                str += '?'
                mistake = ' : Часть символов не распознано - "?"'
            };
        };
        resultParagraph.innerHTML = str + mistake
    };
});


//!__________________________________________________________TASK_2

let receivedString = document.querySelector('#inputString');
let stButton = document.querySelector('#buttonString');
let resultStrParagraph = document.querySelector('.resultTask_2');

stButton.addEventListener('click', function() {
    let arr;
    let arrTemp = [];
    arr = receivedString.value.replace(/^ +| +$|( ) +/g,"$1").split(' ');

    if (receivedString.value.length == 0) {
        resultStrParagraph.innerHTML = '<p style="color: rgb(173, 3, 3);">Enter string</p>'
    } else {
        for (let i = 0; i < arr.length; i++) {
            arrTemp.push(arr[i].length);
            resultStrParagraph.innerHTML = Math.min.apply(null, arrTemp); 
        };
    };
});


//!__________________________________________________________TASK_3

let received_Words_With_Number = document.querySelector('#input_Words_With_Number');
let button_Words_With_Number = document.querySelector('#button_Words_With_Number');
let ordered_Words = document.querySelector('.resultTask_3');

button_Words_With_Number.addEventListener('click', function() {
    let enteredString = received_Words_With_Number.value.replace(/^ +| +$|( ) +/g,"$1").split(' ');
    let arrSerial_Number = received_Words_With_Number.value.replace(/[^+\d]/g, '');
    let resultLine = [];

    if (received_Words_With_Number.value.length == 0) {
        ordered_Words.innerHTML = '<p style="color: rgb(173, 3, 3);">Enter string</p>'
    } else {
        for (let i = 0; i < arrSerial_Number.length; i++) {
            resultLine[arrSerial_Number[i]-1] = enteredString[i]
        };
        ordered_Words.innerHTML = resultLine.join(' ')
    };
});


//!__________________________________________________________TASK_4

let productName = document.querySelector('#productName');
let count = document.querySelector('#count');
let price = document.querySelector('#price');
let buttonAddGoods = document.querySelector('#buttonAddGoods');
let receiptGoodName = document.querySelector('#receiptGoodName');
let receiptGoodCount = document.querySelector('#receiptGoodCount');
let receiptGoodPrice = document.querySelector('#receiptGoodPrice');
let summPrice = document.querySelector('#summPrice');
let maxPrice = document.querySelector('#maxPrice');
let severalPrise = document.querySelector('#severalPrise');
let resultTask_receipt = document.querySelector('.resultTask_receipt');
let totalPrice = [];
let i = 0;
let sumPrice = 0;

buttonAddGoods.addEventListener('click', function() {

    if (productName.value.length == 0 || count.value.length == 0 || price.value.length == 0) {
        resultTask_receipt.innerHTML = '<p style="color: rgb(173, 3, 3);">Enter string</p>'
    } else {
        totalPrice[i] = price.value;
        sumPrice += Number(price.value);
        i++
        let bigPrice = Math.max.apply(null, totalPrice);
        let sevPrice = sumPrice / Number(totalPrice.length);

        receiptGoodName.innerHTML += '<p>' + productName.value + '</p><hr>';
        receiptGoodCount.innerHTML += '<p>' + count.value + '</p><hr>';
        receiptGoodPrice.innerHTML += '<p>' + price.value + '</p><hr>';
        summPrice.innerHTML = '<p>Сумма чека: ' + sumPrice + '</p>';
        maxPrice.innerHTML = '<p>Максимальная сумма в чеке: ' + bigPrice + '</p>';
        severalPrise.innerHTML = '<p>Средняя цена по чеку: ' + sevPrice.toFixed(2) + '</p>';
    };
});



















