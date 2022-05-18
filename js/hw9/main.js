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

// // - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// for (const item of simpsons) {
//     const divka = document.createElement('div');
//     divka.classList.add('member');
//     document.body.appendChild(divka);
//     for (key in item){
//         const divka = document.createElement('div');
//         divka.classList.add('member');
//         document.body.appendChild(divka);
//         divka.append(`${key} : ${item[key]}`)
//     }
// }

// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
// for (const item of simpsons) {
//     const divka = document.createElement('div');
//     divka.classList.add('member');
//     document.body.appendChild(divka);
//     const name = document.createElement('div');
//     const surname = document.createElement('div');
//     const age = document.createElement('div');
//     const info = document.createElement('div');
//     const photo = document.createElement('img');
//     name.innerText = item.name;
//     surname.innerText = item.surname;
//     age.innerText = item.age;
//     info.innerText = item.info;
//     photo.src = item.photo;
//     divka.append(name, surname, age, info, photo);
// }

// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png


for (const element of coursesArray) {
    const divka = document.createElement('div');
    divka.style.border = '2px solid black';
    divka.style.padding = '10px';

    document.body.appendChild(divka);

    const title = document.createElement('h1');
    title.style.border = '1px solid black';
    title.style.padding = '10px';
    title.append(element.title);

    const monthDuration = document.createElement('h3');
    monthDuration.style.border = '1px solid black';
    monthDuration.style.padding = '10px';
    monthDuration.style.margin = '0px';
    monthDuration.append(element. monthDuration + ' months');

    const hourDuration = document.createElement('h3');
    hourDuration.style.border = '1px solid black';
    hourDuration.style.padding = '10px';
    hourDuration.append(element.hourDuration + ' hours');

    const hDiv = document.createElement('div');
    hDiv.style.display = 'flex';
    hDiv.style.columnGap = '20px';
    hDiv.append(monthDuration, hourDuration)

    const modules = document.createElement('ul');
    for (let item of element.modules){
        const modulesLi = document.createElement('li')
        modulesLi.append(item);
        modules.append(modulesLi);
    }

    const modulesDiv = document.createElement('div');
    modulesDiv.style.border = '1px solid black';
   modulesDiv.style.padding = '10px';
    modulesDiv.append(modules);

    divka.append(title,hDiv,modulesDiv);
}