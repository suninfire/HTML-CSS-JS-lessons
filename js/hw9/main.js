// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// const block = document.createElement('div');
// block.classList.add('wrap','collapse','alpha','beta');
// block.style.background = 'purple';
// block.style.color = 'blue';
// block.style.fontSize = '20px';
// document.body.appendChild(block);
// let block2 = block.cloneNode(true);
// document.body.appendChild(block2);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли.
// const array = ['Main','Products','About us','Contacts'];
// const menu = document.getElementsByClassName('menu')[0];
// for (let i = 0; i < array.length; i++){
//     const li = document.createElement('li');
//     const lii = menu.append(li);
//     li.innerText = array[i];
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (let coursesAndDuration of coursesAndDurationArray){
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     for (let key in coursesAndDuration){
//         div.append(`${key}: ${coursesAndDuration[key]}, `);
//     }
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде
// <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//  for (let coursesAndDuration of coursesAndDurationArray){
//      const div = document.createElement('div');
//      div.classList.add('item');
//      document.body.appendChild(div);
//
//      const h1 = document.createElement('h1');
//      h1.classList.add('heading');
//      div.append(h1);
//
//      const p = document.createElement('p');
//      p.classList.add('description')
//      div.append(p)
//
//      for (let key in coursesAndDuration){
//          if (key === 'title'){
//              h1.append(`${key}: ${coursesAndDuration[key]}, `);
//          }
//          if (key === 'monthDuration' ){
//              p.append(`${key}: ${coursesAndDuration[key]}, `);
//          }
//
//      }
//  }