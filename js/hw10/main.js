// - Создать произвольный елемент с id = text.Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text"
// let div = document.createElement('div');
// div.id = 'text';
// div.innerText = 'HELLO';
// document.body.appendChild(div);
//
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'CLICK'
//
// button.onclick = function (){
//     let text = document.getElementById('text');
//     text.style.display = 'none';
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const label = document.createElement('label');
// label.innerText = 'how old are you?';
//
// const input = document.createElement('input');
// input.id = 'age'
// input.type = 'text';
//
// const button = document.createElement('button');
// button.innerText = 'ok';
//
// document.body.append(label,input,button);
//
// button.onclick = function (){
//     let age = document.getElementById('age');
//     if (age.value < 18){
//         alert('come back when you turn 18!');
//     } else {
//         alert('welcome!');
//     }
//     age.value = '';
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки) Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const form1 = document.createElement('form');
// form1.name = 'form_1';
//
// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// input1.name = 'input_1';
// input1.type = 'text';
// input2.name = 'input_2';
// input2.type = 'text';
//
// const form2 = document.createElement('form');
// form2.name = 'form_2';
//
// const input3 = document.createElement('input');
// const input4 = document.createElement('input');
// input3.name = 'input_3';
// input3.type = 'text';
// input4.name = 'input_4';
// input4.type = 'text';
//
// const button = document.createElement('button');
// button.name = 'button';
// button.innerText = 'click'
//
// form1.append(input1,input2);
// form2.append(input3,input4);
// document.body.append(form1,form2,button);
//
// button.onclick = function (){
//     const i1 = form_1.input_1.value;
//     const i2 = form_1.input_2.value;
//     const i3 = form_2.input_3.value;
//     const i4 = form_2.input_4.value;
//     console.log(i1,i2,i3,i4);
//     form_1.input_1.value = '';
//     form_1.input_2.value = '';
//     form_2.input_3.value = '';
//     form_2.input_4.value = '';
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,третій вмиіст ячеєк. При натисканні кнопки, вся ця інформація зчитується і формується табличка,з відповідним вмістом.
// const input1 = document.createElement('input');
// input1.name = 'numberOfLines';
// input1.placeholder = `${input1.name}`;
// const input2 = document.createElement('input');
// input2.name = 'numberOfCells';
// input2.placeholder = `${input2.name}`;
// const input3 = document.createElement('input');
// input3.name = 'textOfCells';
// input3.placeholder = `${input3.name}`;
// const button = document.createElement('button');
// button.name = 'button';
// button.innerText = 'ckick';
// document.body.append(input1,input2,input3,button);
//
//
// button.onclick = function (){
//     const table = document.createElement('table');
//     document.body.appendChild(table);
//     for (i = 0; i < input1.value; i++){
//         const tr = document.createElement('tr');
//         table.append(tr);
//         for (e = 0; e < input2.value; e++){
//             const td = document.createElement('td');
//             td.style.fontSize = '40px';
//             td.innerText = `${input3.value}`;
//             td.style.border = '1px solid black';
//             tr.append(td);
//         }
//     }
// input1.value = '';
// input2.value = '';
// input3.value = '';
// }