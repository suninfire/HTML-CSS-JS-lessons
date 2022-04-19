// 1. Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = 1;
// let a = 0;
// let a = -3;
// if (a !== 0) {
//     console.log('Вірно');
// }
// else {
//     console.log('Не вірно');
// }

// 2. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('напиши число від 0 до 59');
//
// if (time >= 0 && time < 14){
//      console.log('перша');
// }
// else if (time >= 15 && time <=29){
//     console.log('друга');
// }
// else if (time >= 30 && time <=44){
//     console.log('третя');
// }
// else if (time >= 45 && time <=59){
//     console.log('четверта');
// }
// else {
//     console.log('???')
// }

// 3. У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('напиши число від 1 до 31');
//
//  if (day >= 1 && day <= 10) {
//      document.write('1st');
//  }
//      else if (day >= 11 && day <= 20) {
//      document.write('2d');
//  }
//      else if (day >= 21 && day <= 31) {
//              document.write('3th');
//      }
//      else {
//          document.write('???');
//  }


// 4. Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('ведіть порядковий номер дня тижня');
// switch (day){
//     case 1 :
//         document.write('Monday');
//         break;
//     case 2 :
//         document.write('Tuesday');
//         break;
//     case 3 :
//         document.write('Wednesday');
//         break;
//     case 4 :
//         document.write('Thursday');
//         break;
//     case 5 :
//         document.write('Friday');
//         break;
//     case 6 :
//         document.write('Saturday');
//         break;
//     case 7 :
//         document.write('Sunday');
//         break;
//     default:document.write('default');
// }

// 5. Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('first number');
// let b = +prompt('second number');
//
// if (a > b) {
//     document.write(a);
// }
//     else if (a < b) {
//         document.write(b);
//     }
//     else if (a === b) {
//     document.write(a||b);
// }
//     else {
//     document.write('write only number');
// }

