// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let foo = (array) => {
//     let sum = 0 ;
//     let num = array.length;
//     for (let number of array) {
//         sum += number;
//     }
//     return sum / num ;
// }
// console.log(foo([4,23,6]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше ;
// let foo = (array) => {
//     let min = array[0];
//     let max = array[0];
//     for (let arr of array) {
//         if (arr < min) {
//             min = arr;
//         }
//         else if (arr > max){
//             max = arr;
//         }
//     }
//     return min,max;
// }
// console.log((foo([16,123, 25, 14, 7, 64])));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let foo = (numb) => {
//     let arrN = [];
//     for ( i = 0; i < numb; i++){
//         arrN[arrN.length] = Math.round(Math.random()*100);
//     }
//   return arrN;
// };
// console.log(foo(5));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.// // limit - аргумент, який характеризує кінцеве значення діапазону.
// let foo = (arr,limit) => {
//     let arrN = [];
//     for ( i = 0; i < arr; i ++){
//         arrN[arrN.length] = Math.round(Math.random()*limit);
//     }
//     return arrN;
// }
// console.log(foo(15,20));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let foo = (arr) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         let arr2 = arr[i];
//         console.log(arr2);
//     }
// }
// foo([2,-4,6,14,2,76,10]);

//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let sq = (a,b) => a * b;
// console.log(sq(10,20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let ringS = (r) => r * r * 3.14;
// console.log(ringS(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cS = (h,r) => 2 * 3.14 * r * h;
// console.log(cS(2,4));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = (array) => {
//     for (arra of array){
//        console.log(arra);
// }}
// arr([12,14,22,'owl',true]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let text = (t) => document.write(`<p>${t}</p>`);
// text(`hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ulli = (l) => document.write(`<ul><li>${l}</li><li>${l}</li><li>${l}</li></ul>`);
// ulli(`okten`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ulli = (t,n) => {document.write('<ul>');
//     for (i = 0; i < n; i++) {
//         document.write(`<li>${t}</li>`)
//     }
//     document.write('<ul>');
// }
// ulli(`hello`, 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let foo = (array) => {
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
// }
// foo(['owu', 25, 'okten', true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [ { id: 123, name: 'Olena', age: 25},
//               { id: 456, name: 'Oksana', age: 43} ];
// let foo = (array) => {
//     for (let arr of array) {
//         document.write(`<div>${arr.id},${arr.name},${arr.age}</div>`);
//     }
// }
// foo(users);

// - створити функцію яка повертає найменьше число з масиву
// let foo = (array) => {
//     let min = array[0];
//     for (let arr of array) {
//         if (arr < min ){
//             min = arr ;
//         }
//     }
//     return min;
// }
// console.log(foo([16,8,33,12,5,4,22,62]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let foo = (array) => {
//     let sum = 0;
//     for (let number of array) {
//         sum += number;
//     }
//     return sum;
// }
// console.log(foo([2,6,12]));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let foo = (array) => [array[0],array [1]] =  [array[1],array [0]];
// console.log(foo([{age:20, name:`Olya`},{age:40, name:`Kolya`}]));


