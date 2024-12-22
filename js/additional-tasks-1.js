'use strict';

// // ========== ОСНОВИ ==========

// console.log('========== ОСНОВИ ==========');

// //Task 1
// //Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.

// // console.log('Task #1');

// const person = {
//     name: 'Sofi',
//     age: 24,
//     profession: 'FullStack Developer',
// };

// console.log(person);

// //Task 2
// //Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// console.log(' ');
// console.log('Task #2');

// console.log(person.name);

// //Task 3
// //Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// console.log(' ');
// console.log('Task #3');

// person.age = 25;
// console.log(person.age);

// //Task 4
// //Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.

// console.log(' ');
// console.log('Task #4');

// person.workPlace = 'National Geographic';
// console.log(person);

// //Task 5
// //Видалення властивостей: Видаліть властивість професія з об'єкта person.

// console.log(' ');
// console.log('Task #5');

// delete person.profession;
// console.log(person);

// //Task 6
// //Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

// console.log(' ');
// console.log('Task #6');

// console.log('profession' in person);

// //Task 7
// //Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.

// console.log(' ');
// console.log('Task #7');

// const friend = {
//     name: 'Karyna',
//     age: 24,
//     workPlace: 'Prof Pereklad',
// };

// let myFriendAndI = {
//     person: { ...person },
//     friend: { ...friend },
// };

// console.log(myFriendAndI);

// //Task 8
// //Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

// console.log(' ');
// console.log('Task #8');

// const keys = Object.keys(person);

// for (const key of keys) {
//     console.log(`${key}: ${person[key]}`);
// }

// //Task 9
// //Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

// console.log(' ');
// console.log('Task #9');

// person.sayHi = function (name) {
//     console.log(`Hi, ${name}!`);
// };

// person.sayHi('Nata');
// console.log(person);

// //Task 10
// //Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().

// console.log(' ');
// console.log('Task #10');

// const keysArray = Object.keys(person);
// console.log(keysArray);

// // ========== ЗАДАЧІ. ЧАСТИНА #1 ==========

// console.log(' ');
// console.log('========== ЗАДАЧІ. ЧАСТИНА #1 ==========');

// //Task 1
// /*Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт. */

// console.log(' ');
// console.log('Task #1');

// function createObject(name, age) {
//     if (!isNaN(name) || typeof age !== 'number') {
//         return 'Wrong type of values';
//     }

//     return { name, age };
// }

// console.log(createObject('Maria', 55));

// //Task 2
// /*Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт. */

// console.log(' ');
// console.log('Task #2');

// function addProp(object, address) {
//     if (!address || !isNaN(address)) {
//         return 'Wrong type of values or empty address';
//     }

//     object.address = address;

//     return object;
// }

// console.log(addProp(person, 'Str Free London'));

// //Task 3
// /*Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.*/

// console.log(' ');
// console.log('Task #3');

// function updateAge(object, newAge) {
//     if (typeof newAge !== 'number' || isNaN(newAge)) {
//         return 'Wrond type of age value';
//     }

//     object.age = newAge;

//     return object;
// }

// console.log(updateAge(person, 26));

// //Task 4
// /*Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.*/

// console.log(' ');
// console.log('Task #4');

// function removePropAge(object) {
//     delete object.age;

//     return object;
// }

// console.log(removePropAge(person));

// //Task 5
// /*Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".*/

// console.log(' ');
// console.log('Task #5');

// function getNameValue(object) {
//     return object.name;
// }

// console.log(getNameValue(person));

// //Task 6
// /*Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.*/

// console.log(' ');
// console.log('Task #6');

// function checkAddressValue(object) {
//     const keys = Object.keys(object);

//     for (const key of keys) {
//         if (key === 'address') {
//             return true;
//         }
//     }

//     return false;
//     // return object.hasOwnProperty('address'); альтернативний варіант розв'язку
// }

// console.log(checkAddressValue(person));

// //Task 7
// /*Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.*/

// console.log(' ');
// console.log('Task #7');

// function combineObjects(obj1, obj2) {
//     return Object.assign({}, obj1, obj2);
// }

// console.log(person);
// console.log(friend);
// console.log(combineObjects(person, friend));

// //Task 8
// /*Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт..*/

// console.log(' ');
// console.log('Task #8');

// function createUserObject(name = 'Unknown', age = 0, address) {
//     if (isNaN(age)) {
//         age = 0;
//     }

//     if (name === '') {
//         name = 'Unknown';
//     }

//     const userObject = {
//         name,
//         age,
//         address,
//     };

//     return userObject;
// }

// console.log(createUserObject('', 'Poltava'));
// console.log(createUserObject());
// console.log(createUserObject('Sofi', 24, 'Kyiv'));

// //Task 9
// /*Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.*/

// console.log(' ');
// console.log('Task #9');

// function updateNameAndAge(object, newName, newAge) {
//     if (typeof newName !== 'string' || !isNaN(newName) || isNaN(newAge)) {
//         return 'Wrong type of data';
//     }

//     object.name = newName;
//     object.age = Number(newAge);

//     return object;
// }

// console.log(updateNameAndAge(person, 'Stefa', '18'));

// //Task 10
// /*Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.*/

// console.log(' ');
// console.log('Task #10');

// function createEmail(object, email) {
//     const keys = Object.keys(object);

//     if (object.email === undefined) {
//         object.email = email;
//     }

//     return object;
// }

// console.log(createEmail(person, 'sofi@gmail.com'));

// //Task 11
// /*Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.*/

// console.log(' ');
// console.log('Task #11');

// function changeAgeType(object) {
//     object.age = String(object.age);
//     return object;
// }

// console.log(changeAgeType(person));

// //Task 12
// /*Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.*/

// console.log(' ');
// console.log('Task #12');

// function changeExistAddressType(object, newAddress) {
//     if (object.address !== undefined) {
//         object.address = newAddress;
//     }

//     return object;
// }

// const obj12 = {
//     age: 40,
// };

// console.log(changeExistAddressType(obj12, 'Kyiv'));

// //Task 13
// /*Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"*/

// console.log(' ');
// console.log('Task #13');

// function getUserCity(object, name, city) {
//     return `User ${name} from ${city}`;
// }

// const obj13 = {};

// console.log(getUserCity(obj13, 'Maks', 'Poltava'));

// //Task 14
// /*Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.*/

// console.log(' ');
// console.log('Task #14');

// function getObject(array) {
//     const object = {};

//     for (const [key, value] of array) {
//         object[key] = value;
//     }

//     return object;
// }

// console.log(
//     getObject([
//         ['name', 'John'],
//         ['age', 25],
//         ['address', '123 Street'],
//     ])
// );

// //Task 15
// /*Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.*/

// console.log(' ');
// console.log('Task #15');

// function incrementAge(array) {
//     for (const item of array) {
//         if ('age' in item) {
//             item.age++;
//         }
//     }

//     return array;
// }

// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 22 },
// ];

// console.log(incrementAge(people));

// ========== ЗАДАЧІ. ЧАСТИНА #2 ==========

console.log(' ');
console.log('========== ЗАДАЧІ. ЧАСТИНА #2 ==========');

//Task 1
/*Створити об'єкт **contactBook**:

- **Властивості**:
  - `contacts` (масив контактів)
- **Методи**:
  - `addContact(contact)` - метод, що приймає контакт та додає його до масиву
    контактів.
  - `deleteContact(contactName)` - метод, що приймає ім'я контакта та видаляє
    його з масиву контактів.
  - `findContact(contactName)` - метод, що приймає ім'я контакта та шукає його у
    масиві контактів.*/

console.log(' ');
console.log('Task #1');

const contactBook = {
    //масив контактів
    contacts: [],

    //метод, що приймає контакт та додає його до масиву контактів.
    addContact: function (contact) {
        this.contacts.push(contact);
    },

    //метод, що приймає ім'я контакта та видаляє його з масиву контактів.
    deleteContact: function (contactName) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i] === contactName) {
                this.contacts.splice(i, 1);
                break;
            }
        }
    },

    //метод, що приймає ім'я контакта та шукає його у масиві контактів.
    findContact: function (contactName) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i] === contactName) {
                return this.contacts[i];
            }
        }
        return `There is no user with name like this`;
    },
};

contactBook.addContact('Maria');
contactBook.addContact('Lika');
contactBook.addContact('Maks');
contactBook.addContact('Vlad');
contactBook.addContact('Petro');

// console.log(contactBook.contacts);

contactBook.deleteContact('Maria');
contactBook.deleteContact('Maks');

// console.log(contactBook.contacts);
// console.log(contactBook.findContact('Maks'));

//Task 2
/*Створити об'єкт rectangle:

Властивості:
width (довжина першої сторони)
height (довжина другої сторони)
Методи:
area() - метод, що обчислює та повертає площу прямокутника.
perimeter() - метод, що обчислює та повертає периметр прямокутника.*/

console.log(' ');
console.log('Task #2');

const rectangle = {
    width: 50,
    height: 20,

    area() {
        return this.width * this.height;
    },

    perimeter() {
        return (this.width + this.height) * 2;
    },
};

// console.log(rectangle.area());
// console.log(rectangle.perimeter());

//Task 3
/*Створити об'єкт toDoList:

Властивості:
tasks (масив задач)
Методи:
addTask(task) - метод, що приймає задачу та додає її до масиву задач.
markAsDone(taskName) - метод, що приймає ім'я задачі та позначає її як виконану.
listTasks() - метод, що виводить список всіх задач.*/

console.log(' ');
console.log('Task #3');

const toDoList = {
    //масив задач
    tasks: [],

    //метод, що приймає задачу та додає її до масиву задач.
    addTask(task) {
        this.tasks.push({ name: task, done: false });
    },

    //метод, що приймає ім'я задачі та позначає її як виконану.
    markAsDone(taskName) {
        for (const task of this.tasks) {
            if (task.name === taskName) {
                task.done = true;
                return;
            }
        }
        return `Task ${taskName} is not find`;
    },

    //метод, що виводить список всіх задач.
    listTasks() {
        for (const task of this.tasks) {
            console.log(`Task: ${task.name}. Status: ${task.done}`);
        }
    },
};

toDoList.addTask('Купити корм коту');
toDoList.addTask('Провести тренування');
toDoList.addTask('Вирішити 10 задач по темі "Об\'єкти"');
toDoList.addTask('Завершити верстку платформи');
toDoList.addTask('Пройти проміжне тестування з біології');

// console.log(toDoList.tasks);

toDoList.markAsDone('Купити корм коту');
toDoList.markAsDone('Провести тренування');
toDoList.markAsDone('Пройти проміжне тестування з біології');

// toDoList.listTasks();

//Task 4
/*Створити об'єкт bankAccount:

Властивості:
balance (поточний баланс)
Методи:
deposit(amount) - метод, що приймає суму та додає її до балансу.
withdraw(amount) - метод, що приймає суму та знімає її з балансу (з перевіркою на достатність коштів).
checkBalance() - метод, що повертає поточний баланс.*/

console.log(' ');
console.log('Task #4');

const bankAccount = {
    //поточний баланс
    balance: 0,

    //метод, що приймає суму та додає її до балансу
    deposit(amount) {
        this.balance += amount;
    },

    //метод, що приймає суму та знімає її з балансу (з перевіркою на достатність коштів).
    withdraw(amount) {
        if (this.balance < amount) {
            console.log(`Not enough money`);
            return;
        }
        this.balance -= amount;
    },

    //метод, що повертає поточний баланс
    checkBalance() {
        return this.balance;
    },
};

bankAccount.deposit(500);
bankAccount.deposit(500);
bankAccount.deposit(200);

// console.log(bankAccount.checkBalance());

// bankAccount.withdraw(10000);
// console.log(bankAccount.checkBalance());

//Task 5
/*Створити об'єкт libraryCatalog:

Властивості:
books (масив книг)
Методи:
addBook(book) - метод, що приймає книгу та додає її до масиву книг.
findBookByAuthor(author) - метод, що приймає ім'я автора та повертає книги цього автора.
findBookByISBN(isbn) - метод, що приймає ISBN та повертає книгу з цим ISBN.
listBooks() - метод, що виводить список всіх книг.*/

console.log(' ');
console.log('Task #5');

const libraryCatalog = {
    //масив книг
    books: [],

    //метод, що приймає книгу та додає її до масиву книг.
    addBook(book, author, isbn) {
        this.books.push({ title: book, author: author, isbn: isbn });
    },

    //метод, що приймає ім'я автора та повертає книги цього автора
    findBookByAuthor(author) {
        for (const book of this.books) {
            if (book.author === author) {
                return book;
            }
        }

        return `The book is not defined`;
    },

    //метод, що приймає ISBN та повертає книгу з цим ISBN
    findBookByISBN(isbn) {
        for (const book of this.books) {
            if (book.isbn === isbn) {
                return book;
            }
        }

        return `There is no book with ${isbn} isbn`;
    },

    //метод, що виводить список всіх книг.
    listBooks() {
        for (const book of this.books) {
            console.log(`Title: ${book.title}. Author: ${book.author}. ISBN: ${book.isbn}`);
        }
    },
};

libraryCatalog.addBook('The Great Adventure', 'John Smith', ' 978-0-123-45678-9');
libraryCatalog.addBook('Mysteries of the Forest', 'Sarah Johnson', '978-3-16-148410-0');
libraryCatalog.addBook('Tech Innovations 2024', 'Emily Brown', '978-1-234-56789-0');
libraryCatalog.addBook('Journey to the Unknown', 'David White', '978-0-987-65432-1');
libraryCatalog.addBook('The Last Horizon', 'Olivia Green', '978-3-14-159265-3');

// libraryCatalog.listBooks();
// console.log(libraryCatalog.findBookByAuthor('Sarah Johnson'));
// console.log(libraryCatalog.findBookByISBN('978-3-14-159265-3'));

//Task 6
/*Створити об'єкт temperatureConverter:

Методи:
celsiusToFahrenheit(celsius) - метод, що приймає температуру в градусах Цельсія та повертає її в градусах Фаренгейта.
fahrenheitToCelsius(fahrenheit) - метод, що приймає температуру в градусах Фаренгейта та повертає її в градусах Цельсія.*/

console.log(' ');
console.log('Task #6');

const temperatureConverter = {
    //метод, що приймає температуру в градусах Цельсія та повертає її в градусах Фаренгейта.
    celsiusToFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    },

    //метод, що приймає температуру в градусах Фаренгейта та повертає її в градусах Цельсія.
    fahrenheitToCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    },
};

// const gradus = +prompt('Enter a graduses');
// const InFahrenheit = temperatureConverter.celsiusToFahrenheit(gradus).toFixed(1);
// const InCelsius = temperatureConverter.fahrenheitToCelsius(gradus).toFixed(1);

// console.log(`${gradus} градусів Цельсія у Фарингейті буде: ${InFahrenheit} градусів`);
// console.log(`${gradus} градусів Фарингейтів у Цельсії буде: ${InCelsius} градусів`);

//Task 7
/*Створити об'єкт shoppingCart:

Властивості:
items (масив товарів)
Методи:
addItem(item) - метод, що приймає товар та додає його до кошика.
totalCost() - метод, що підраховує та повертає загальну вартість всіх товарів у кошику.
listItems() - метод, що виводить список всіх товарів у кошику.*/

console.log(' ');
console.log('Task #7');

const shoppingCart = {
    items: [],

    //метод, що приймає товар та додає його до кошика.
    addItem(item, price) {
        return this.items.push({ name: item, price: price });
    },

    //метод, що підраховує та повертає загальну вартість всіх товарів у кошику.
    totalCost() {
        let sum = 0;

        for (const item of this.items) {
            sum += item.price;
        }

        return sum;
    },

    //метод, що виводить список всіх товарів у кошику.
    listItems() {
        for (const item of this.items) {
            console.log(`Item: ${item.name}. Price: ${item.price}`);
        }
    },
};

shoppingCart.addItem('Banana', 25);
shoppingCart.addItem('Apple', 50);
shoppingCart.addItem('Eggs', 100);

// shoppingCart.listItems();
// console.log(shoppingCart.totalCost());

//Task 8
/*Створити об'єкт socialNetworkUser:

Властивості:
username (ім'я користувача)
friends (масив друзів)
Методи:
addFriend(friendName) - метод, що приймає ім'я друга та додає його до списку друзів.
removeFriend(friendName) - метод, що приймає ім'я друга та видаляє його зі списку друзів.
listFriends() - метод, що виводить список всіх друзів.*/

console.log(' ');
console.log('Task #8');

const socialNetworkUser = {
    //ім'я користувача
    username: 'Alex',

    //масив друзів
    friends: [],

    //метод, що приймає ім'я друга та додає його до списку друзів.
    addFriend(friendName) {
        return this.friends.push(friendName);
    },

    //метод, що приймає ім'я друга та видаляє його зі списку друзів.
    removeFriend(friendName) {
        const index = this.friends.indexOf(friendName);

        if (index !== -1) {
            this.friends.splice(index, 1);
        }
    },

    //метод, що виводить список всіх друзів.
    listFriends() {
        return this.friends;
    },
};

socialNetworkUser.addFriend('Marko');
socialNetworkUser.addFriend('Lucy');
socialNetworkUser.addFriend('Anna');
socialNetworkUser.addFriend('Maria');

// console.log(socialNetworkUser.listFriends());

socialNetworkUser.removeFriend('Marko');
socialNetworkUser.removeFriend('Maria');

// console.log(socialNetworkUser.listFriends());

//Task 9
/*Створити об'єкт musicPlayer:

Властивості:
songs (масив пісень)
currentSong (індекс або ідентифікатор поточної пісні)
Методи:
addSong(song) - метод, що приймає пісню та додає її до списку пісень.
play() - метод, що відтворює поточну пісню.
pause() - метод, що ставить відтворення на паузу.
next() - метод, що перемикає на наступну пісню.
previous() - метод, що перемикає на попередню пісню.*/

console.log(' ');
console.log('Task #9');

const musicPlayer = {
    //масив пісень
    songs: ['Song 1', 'Song 2', 'Song 3'],

    //індекс або ідентифікатор поточної пісні
    currentSong: 0,
    isPlaying: false,

    //метод, що відтворює поточну пісню.
    play() {},

    //метод, що ставить відтворення на паузу.
    pause() {},

    //метод, що перемикає на наступну пісню.
    next() {},

    //метод, що перемикає на попередню пісню.
    previous() {},
};
