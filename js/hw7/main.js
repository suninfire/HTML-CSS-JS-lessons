// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//  function user (id,name,surname,email,phone){
//    this.id = id;
//    this.name = name;
//    this.surname = surname;
//    this.email = email;
//    this.phone = phone;
// }
// let user1 = new user('7', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
// let user2 = new user('4', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
// let user3 = new user('12', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
// let user4 = new user('5', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
// let user5 = new user('8', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
// let user6 = new user('33', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
// let user7 = new user('14', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
// let user8 = new user('21', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
// let user9 = new user('37', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
// let user10 = new user('83', 'vasya', 'pupkin', 'vp@gmail.com', '+380638229364');
//
// let usersarray = [];
// usersarray.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(usersarray);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = usersarray.filter((value) => {
//   if (value.id %2 === 0){
//     return value;
//   }
// })
// console.log(filter);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = usersarray.sort((a,b) => a.id - b.id)
// console.log(sort);

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client{
//   constructor(id, uname, surname , email, phone, order) {
//     this.id = id;
//     this.uname = uname;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//   }
// }
// let client1 = new Client(9,'natali','kamkova','kamkova@gmail.com','+380631226632',['apple','orange','grape']);
// let client2 = new Client(15,'sergi','shabl','shabl@gmail.com','+380637223632',['milk','strawberry','kiwi']);
// let client3 = new Client(31,'juliia','koshel','koshel@gmail.com','+3806374126632',['milk','orange','bread']);
// let client4 = new Client(19,'oksana','furr','furr@gmail.com','+380637776632',['juce','chocolate','tea','fork']);
// let client5 = new Client(22,'ben','jonson','jonson@gmail.com','+38063785632',['apple','carrot','onion']);
// let client6 = new Client(4,'jon','otton','otton@gmail.com','+380637936632',['watermellon']);
// let client7 = new Client(36,'taras','kvas','kvas@gmail.com','+380631226632',['onion','potato']);
// let client8 = new Client(7,'ketrin','pirs','pirs@gmail.com','+380637446632',['strawberry','bluebarry','grape','milk','icecream']);
// let client9 = new Client(11,'fiona','milka','milka@gmail.com','+380637257632',['rice','chicken','tomato']);
// let client10 = new Client(18,'filip','pupkin','pupkin@gmail.com','+38063722612',['apple','orange','carrot','salat']);
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [];
// clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
// console.log(clients);
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = clients.sort((a,b) => a.order.length - b.order.length);
// console.log(sort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model,maker,year,maxSpeed,engineVolume){
//   this.model = model;
//   this.maker = maker;
//   this.year = year;
//   this.maxSpeed = maxSpeed;
//   this.engineVolume = engineVolume;
//
  // this.drive = function (){
  //   return `їдемо зі швидкістю ${maxSpeed} km на годину`
  // }
  //
  // this.infoo = function (){
  //   for (let key in this) {
  //    console.log(`${key} - ${this[key]}`);
  //   }
  // }
  //
  // this.increaseMaxSpeed = function (newSpeed){
  //   return maxSpeed + newSpeed;
  // }
  //
  // this.changeYear = function (newValue){
  //   this.year = newValue;
  //   return this.year
  // }
  //
  // this.addDriver = function (driver){
  //   this.driver = driver;
  // }
// }
//
// let car1 = new Car('x5','BMW',2010,200,4.4);
//
// console.log(car1.drive());
// console.log(car1.infoo());
// console.log(car1.increaseMaxSpeed(20));
// console.log(car1.changeYear(2015));
// car1.addDriver({dname:'vasya',dage:30});
// console.log(car1)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// class Car {
// constructor (model,maker,year,maxSpeed,engineVolume) {
//   this.model = model;
//   this.maker = maker;
//   this.year = year;
//   this.maxSpeed = maxSpeed;
//   this.engineVolume = engineVolume;
//
  // drive(){
  //   console.log(`їдемо зі швидкістю ${maxSpeed} km на годину`)
  // }
  //
  // info(){
  //   for (const key in this) {
  //  console.log(key,this[key])
  //   }
  // }
  //
  // increaseMaxSpeed(newSpeed){
  //     return maxSpeed + newSpeed;
  //   }
  //
    // changeYear(newValue){
    //   this.year = newValue;
    //   return this.year
    // }
//
//     addDriver(driver){
//       this.driver = driver;
//     }
// }
// }
// let car1 = new Car('x5','BMW',2010,200,4.4);
//
// car1.drive();
// car1.info();
// console.log(car1.increaseMaxSpeed(60));
// car1.changeYear(2020);
// console.log(car1)
// car1.addDriver({name:'vasya',age:35});
// console.log(car1)
//
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// let Princess = function (sname,age,foodsize){
//   this.sname = sname;
//   this.age = age;
//   this.foodsize = foodsize;
// }
// let princess1 = new Princess('Sinderella1',21,36);
// let princess2 = new Princess('Sinderella2',20,35);
// let princess3 = new Princess('Sinderella3',23,38);
// let princess4 = new Princess('Sinderella4',21,36);
// let princess5 = new Princess('Sinderella5',26,37);
// let princess6 = new Princess('Sinderella6',22,39);
// let princess7 = new Princess('Sinderella7',24,36);
// let princess8 = new Princess('Sinderella8',23,40);
// let princess9 = new Princess('Sinderella9',19,37);
// let princess10 = new Princess('Sinderella10',22,36);
// let princesses = [];
// princesses.push(princess1,princess2,princess3,princess4,princess5,princess6,princess7,princess8,princess9,princess10,);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//   constructor (pname,page,tyfelka) {
//     this.pname = pname;
//     this.page = page;
//     this.tyfelka = tyfelka;
//   }
// }
// let princeCharming = new Prince('Charming',28,35);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let pr of princesses) {
//     if (pr.foodsize === princeCharming.tyfelka){
//       console.log(pr) ;
//     }
//   }
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let found = princesses.find((girl) => {
//   if (girl.foodsize === princeCharming.tyfelka){
//       console.log(girl) ;
//     }
// })