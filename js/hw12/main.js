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
https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(array =>{
        for (const item of array) {
           const div = document.createElement('div');
           div.style.marginBottom = '50px';
           document.body.appendChild(div);
         for (const key in item){
             const elementDiv = document.createElement('div');
             div.append(elementDiv);
             elementDiv.innerText = `${key}: ${item[key]}`;
         }
        }
    })


// 3.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())

// 4.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
//
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар