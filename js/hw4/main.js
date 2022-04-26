// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function Square (a, b){
// let result = a * b;
//     return result;
// }
// let S = Square(+prompt('a'), +prompt('b'));
// document.write(S);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let p = 3.144159
// function ringS (r){
//     return (r * 2) * p;
// }
//
// let ring = ringS(5);
// document.write(ring);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let p = 3.144159
// function C (h,r){
//     return 2 * p * h * r ;
// }
// let CS = C(20,10);
// document.write(CS);


// - створити функцію яка приймає масив та виводить кожен його елемент

//  let Array = [12,14,22,'owl',true];
// function Arr (Array){
//     for (i = 0; i <Array.length; i++){
//         console.log(Array[i]);
//     }
// }
// Arr(Array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text (t){
//     document.write(`<p>${t}</p>`);
// }
// text('hello word');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulli (l){
//     document.write('<ul>')
//     document.write(`<li>${l}</li>`);
//     document.write(`<li>${l}</li>`);
//     document.write(`<li>${l}</li>`);
//     document.write('</ul>');
// }
// ulli('okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function sometext (l,arg){
//     document.write('<ul>');
//     for (i=0; i<arg; i++){
//     document.write(`<li>${l}</li>`);}
//     document.write('</ul>');
// }
// sometext('okten web', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let elements = ['owu', 25, 'okten', true];
// function arr (elements){
//     for (i = 0; i < elements.length; i++){
//         document.write(`<li>${elements[i]}</li>`);
//     }
// }
// arr(elements);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' + 'Для кожного об'єкту окремий блок.

// let users = [
//     { id: 123, name: 'Olena', age: 25},
//     { id: 456, name: 'Oksana', age: 43}
// ];
// function UU (users) {
//     for (let user of users){
//         document.write(`<div>${user.id} ${user.age} ${user.name} </div>`);
//     }
// }
// UU(users);



// - створити функцію яка повертає найменьше число з масиву

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

