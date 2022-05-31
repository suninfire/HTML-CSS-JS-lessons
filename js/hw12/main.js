// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(array =>{
//         for (const item of array) {
//            const div = document.createElement('div');
//            div.classList.add('post');
//            document.body.appendChild(div);
//             const ul = document.createElement('ul');
//             div.append(ul);
//          for (const key in item){
//              const li = document.createElement('li');
//              ul.append(li);
//              li.innerText = `${key}: ${item[key]}`;
//          }
//         }
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(array =>{
//         for (const item of array) {
//            const div = document.createElement('div');
//            div.style.marginBottom = '50px';
//            document.body.appendChild(div);
//          for (const key in item){
//              const elementDiv = document.createElement('div');
//              div.append(elementDiv);
//              elementDiv.innerText = `${key}: ${item[key]}`;
//          }
//         }
//     })