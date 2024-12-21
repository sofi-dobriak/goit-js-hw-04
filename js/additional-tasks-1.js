'use strict';

// ========== ОСНОВИ ==========

console.log('========== ОСНОВИ ==========');

//Task 1
//Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.

// console.log('Task #1');

const person = {
    name: 'Sofi',
    age: 24,
    profession: 'FullStack Developer',
};

console.log(person);

//Task 2
//Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

console.log(' ');
console.log('Task #2');

console.log(person.name);

//Task 3
//Зміна властивостей: Змініть вік в об'єкті person на нове значення.

console.log(' ');
console.log('Task #3');

person.age = 25;
console.log(person.age);

//Task 4
//Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.

console.log(' ');
console.log('Task #4');

person.workPlace = 'National Geographic';
console.log(person);

//Task 5
//Видалення властивостей: Видаліть властивість професія з об'єкта person.

console.log(' ');
console.log('Task #5');

delete person.profession;
console.log(person);

//Task 6
//Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

console.log(' ');
console.log('Task #6');

console.log('profession' in person);

//Task 7
//Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.

console.log(' ');
console.log('Task #7');

const friend = {
    name: 'Karyna',
    age: 24,
    workPlace: 'Prof Pereklad',
};

let myFriendAndI = {
    person: { ...person },
    friend: { ...friend },
};

console.log(myFriendAndI);

//Task 8
//Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

console.log(' ');
console.log('Task #8');

const keys = Object.keys(person);

for (const key of keys) {
    console.log(`${key}: ${person[key]}`);
}

//Task 9
//Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

console.log(' ');
console.log('Task #9');

person.sayHi = function (name) {
    console.log(`Hi, ${name}!`);
};

person.sayHi('Nata');
console.log(person);

//Task 10
//Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().

console.log(' ');
console.log('Task #10');

const keysArray = Object.keys(person);
console.log(keysArray);

// ========== ЗАДАЧІ. ЧАСТИНА #1 ==========

console.log(' ');
console.log('========== ЗАДАЧІ. ЧАСТИНА #1 ==========');

//Task 1
/*Напиши функцію, яка створює об'єкт з ім'ям і віком.
Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
Поверни цей об'єкт. */

console.log(' ');
console.log('Task #1');

function createObject(name, age) {
    if (!isNaN(name) || typeof age !== 'number') {
        return 'Wrong type of values';
    }

    return { name, age };
}

console.log(createObject('Maria', 55));

//Task 2
/*Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
Поверни оновлений об'єкт. */

console.log(' ');
console.log('Task #2');

function addProp(object, address) {
    if (!address || !isNaN(address)) {
        return 'Wrong type of values or empty address';
    }

    object.address = address;

    return object;
}

console.log(addProp(person, 'Str Free London'));

//Task 3
/*Напиши функцію, яка приймає об'єкт і новий вік.
Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
Поверни оновлений об'єкт.*/

console.log(' ');
console.log('Task #3');

function updateAge(object, newAge) {
    if (typeof newAge !== 'number' || isNaN(newAge)) {
        return 'Wrond type of age value';
    }

    object.age = newAge;

    return object;
}

console.log(updateAge(person, 26));

//Task 4
/*Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
Поверни оновлений об'єкт.*/

console.log(' ');
console.log('Task #4');

function removePropAge(object) {
    delete object.age;

    return object;
}

console.log(removePropAge(person));

//Task 5
/*Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".*/

console.log(' ');
console.log('Task #5');

function getNameValue(object) {
    return object.name;
}

console.log(getNameValue(person));

//Task 6
/*Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.*/

console.log(' ');
console.log('Task #6');

function checkAddressValue(object) {
    const keys = Object.keys(object);

    for (const key of keys) {
        if (key === 'address') {
            return true;
        }
    }

    return false;
    // return object.hasOwnProperty('address'); альтернативний варіант розв'язку
}

console.log(checkAddressValue(person));

//Task 7
/*Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
Поверни результат.*/

console.log(' ');
console.log('Task #7');

function combineObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

console.log(person);
console.log(friend);
console.log(combineObjects(person, friend));

//Task 8
/*Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
Поверни об'єкт..*/

console.log(' ');
console.log('Task #8');

function createUserObject(name = 'Unknown', age = 0, address) {
    if (isNaN(age)) {
        age = 0;
    }

    if (name === '') {
        name = 'Unknown';
    }

    const userObject = {
        name,
        age,
        address,
    };

    return userObject;
}

console.log(createUserObject('', 'Poltava'));
console.log(createUserObject());
console.log(createUserObject('Sofi', 24, 'Kyiv'));

//Task 9
/*Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.*/

console.log(' ');
console.log('Task #9');

function updateNameAndAge(object, newName, newAge) {
    if (typeof newName !== 'string' || !isNaN(newName) || isNaN(newAge)) {
        return 'Wrong type of data';
    }

    object.name = newName;
    object.age = Number(newAge);

    return object;
}

console.log(updateNameAndAge(person, 'Stefa', '18'));

//Task 10
/*Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
Якщо в об'єкті вже є "email", нічого не роби.
Поверни оновлений об'єкт.*/

console.log(' ');
console.log('Task #10');

function createEmail(object, email) {
    const keys = Object.keys(object);

    for (const key of keys) {
        if (object.email === undefined) {
            object.email = email;
        }
    }

    return object;
}

console.log(createEmail(person, 'sofi@gmail.com'));

//Task 11
/*Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
Поверни оновлений об'єкт.*/

console.log(' ');
console.log('Task #11');

function changeAgeType(object) {
    object.age = String(object.age);
    return object;
}

console.log(changeAgeType(person));

//Task 12
/*Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
Якщо її немає, поверни об'єкт без змін.*/

console.log(' ');
console.log('Task #12');

function changeExistAddressType(object, newAddress) {
    const keys = Object.keys(object);

    if (object.address !== undefined) {
        object.address = newAddress;
    }

    return object;
}

const obj12 = {
    age: 40,
};

console.log(changeExistAddressType(obj12, 'Kyiv'));

//Task 13
/*Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"*/

console.log(' ');
console.log('Task #13');

function getUserCity(object, name, city) {
    object = {
        name,
        city,
    };

    return `User ${name} from ${city}`;
}

const obj13 = {};

console.log(getUserCity(obj13, 'Maks', 'Poltava'));

//Task 14
/*Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.*/

console.log(' ');
console.log('Task #14');

function getObject(array) {
    const object = {};

    for (const [key, value] of array) {
        object[key] = value;
    }

    return object;
}

console.log(
    getObject([
        ['name', 'John'],
        ['age', 25],
        ['address', '123 Street'],
    ])
);

//Task 15
/*Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.*/

console.log(' ');
console.log('Task #15');

function incrementAge(array) {
    for (const item of array) {
        if ('age' in item) {
            item.age++;
        }
    }

    return array;
}

const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 },
];

console.log(incrementAge(people));
