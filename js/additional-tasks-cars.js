'use strict';

const cars = [
    {
        brand: 'Toyota',
        model: 'Camry',
        year: 2019,
        color: 'Silver',
        price: 25000,
        amount: 3,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Honda',
        model: 'Accord',
        year: 2020,
        color: 'White',
        price: 28000,
        amount: 5,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2021,
        color: 'Red',
        price: 50000,
        amount: 2,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'Chevrolet',
        model: 'Camaro',
        year: 2018,
        color: 'Black',
        price: 45000,
        amount: 1,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'BMW',
        model: 'M5',
        year: 2022,
        color: 'Blue',
        price: 70000,
        amount: 2,
        isSportCar: true,
        type: 'Sedan',
    },
    {
        brand: 'Mercedes-Benz',
        model: 'E-Class',
        year: 2020,
        color: 'Silver',
        price: 60000,
        amount: 3,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Audi',
        model: 'A4',
        year: 2021,
        color: 'Gray',
        price: 45000,
        amount: 0,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Lamborghini',
        model: 'Huracan',
        year: 2023,
        color: 'Yellow',
        price: 300000,
        amount: 1,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'Ferrari',
        model: '488 GTB',
        year: 2022,
        color: 'Red',
        price: 350000,
        amount: 1,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'Porsche',
        model: '911',
        year: 2021,
        color: 'White',
        price: 120000,
        amount: 2,
        isSportCar: true,
        type: 'Coupe',
    },
    {
        brand: 'Toyota',
        model: 'Golf',
        year: 2020,
        color: 'Black',
        price: 20000,
        amount: 6,
        isSportCar: false,
        type: 'Hatchback',
    },
    {
        brand: 'Subaru',
        model: 'Forester',
        year: 2021,
        color: 'Green',
        price: 30000,
        amount: 3,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Jeep',
        model: 'Wrangler',
        year: 2022,
        color: 'Orange',
        price: 35000,
        amount: 0,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Mazda',
        model: 'CX-5',
        year: 2020,
        color: 'Red',
        price: 28000,
        amount: 5,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Kia',
        model: 'Soul',
        year: 2021,
        color: 'Yellow',
        price: 20000,
        amount: 4,
        isSportCar: false,
        type: 'Hatchback',
    },
    {
        brand: 'Toyota',
        model: 'Tucson',
        year: 2022,
        color: 'White',
        price: 30000,
        amount: 3,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Nissan',
        model: 'Sentra',
        year: 2019,
        color: 'Silver',
        price: 22000,
        amount: 3,
        isSportCar: false,
        type: 'Sedan',
    },
    {
        brand: 'Volvo',
        model: 'XC60',
        year: 2020,
        color: 'Blue',
        price: 40000,
        amount: 2,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Lexus',
        model: 'RX',
        year: 2021,
        color: 'Black',
        price: 50000,
        amount: 2,
        isSportCar: false,
        type: 'SUV',
    },
    {
        brand: 'Land Rover',
        model: 'Range Rover Evoque',
        year: 2022,
        color: 'Gray',
        price: 60000,
        amount: 0,
        isSportCar: false,
        type: 'SUV',
    },
];

// ===================== PART #1 =====================
console.log('===================== PART #1 =====================');

//Task 1
//Знайти усі спорткари

console.log('Task #1');

function getSportCarsArray(cars) {
    const result = [];

    for (const car of cars) {
        if (car.isSportCar) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів типу спорткар`;
    }

    return result;
}

// console.table(getSportCarsArray(cars));

//Task 2
//Знайти авто 2022 року
//Знайти всі авто, випущені в 2020 році

console.log(' ');
console.log('Task #2');

function getCarsArrayByYear(cars, carYear) {
    const result = [];

    for (const car of cars) {
        if (car.year === carYear) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів ${carYear} року випуску`;
    }

    return result;
}

// console.table(getCarsArrayByYear(cars, 2020));

//Task 3
//Знайти авто певної марки

console.log(' ');
console.log('Task #3');

function getCarsArrayByBrand(cars, carBrand) {
    const result = [];

    for (const car of cars) {
        if (car.brand.toLowerCase() === carBrand.toLowerCase()) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів марки ${carBrand}`;
    }

    return result;
}

// console.table(getCarsArrayByBrand(cars, 'Ford'));

//Task 4
//Знайти авто дорожче заданої ціни
//Знайти всі авто, що мають ціну більше ніж 50000

console.log(' ');
console.log('Task #4');

function getArrayCardBiggerPrice(cars, carPrice) {
    const result = [];

    for (const car of cars) {
        if (car.price >= carPrice) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів дорожче за ${carPrice}$`;
    }

    return result;
}

// console.table(getArrayCardBiggerPrice(cars, @50000));

//Task 5
//Знайти авто заданого типу
//Знайти всі авто типу 'SUV'
//Знайти всі авто, які є седанами

console.log(' ');
console.log('Task #5');

function getArrayCarsByType(cars, carType) {
    const result = [];

    for (const car of cars) {
        if (car.type.toLowerCase() === carType.toLowerCase()) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів типу ${carType}`;
    }

    return result;
}

// console.table(getArrayCarsByType(cars, 'SUV'));

//Task 6
//Знайти авто з кількістю більше ніж задане значення
//Знайти всі авто, що мають кількість більше 2

console.log(' ');
console.log('Task #6');

function getArrayCarByBiggerAmount(cars, carAmount) {
    const result = [];

    for (const car of cars) {
        if (car.amount >= carAmount) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів в кількості більше, ніж ${carAmount} одиниць`;
    }

    return result;
}

// console.table(getArrayCarByBiggerAmount(cars, 2));

//Task 7
//Знайти авто, випущені після 2018 року
//Знайти всі авто, випущені після 2021 року

console.log(' ');
console.log('Task #7');

function getCarsByAfterYear(cars, carYear) {
    const result = [];

    for (const car of cars) {
        if (car.year > carYear) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів які були випущені після ${carYear} року`;
    }

    return result;
}

// console.table(getCarsByAfterYear(cars, 2021));

//Task 8
//Знайти авто, випущені до 2015 року
//Знайти всі авто, випущені до 2017 року

console.log(' ');
console.log('Task #8');

function getCarsByABeforeYear(cars, carYear) {
    const result = [];

    for (const car of cars) {
        if (car.year < carYear) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів які були випущені до ${carYear} року`;
    }

    return result;
}

// console.table(getCarsByABeforeYear(cars, 2017));

//Task 9
//Знайти авто, ціна яких в межах від 20000 до 40000

console.log(' ');
console.log('Task #9');

function getCarsInPriceRange(cars, minPrice, maxPrice) {
    const result = [];

    for (const car of cars) {
        if (car.price >= minPrice && car.price <= maxPrice) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів у діапазоні вартістю від ${minPrice} до ${maxPrice}`;
    }

    return result;
}

// console.table(getCarsInPriceRange(cars, 20000, 40000));

//Task 10
//Знайти всі авто, які не є спортивними

console.log(' ');
console.log('Task #10');

function getNotSportCarArray(cars) {
    const result = [];

    for (const car of cars) {
        if (!car.isSportCar) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Усі автомобілі є спортивними`;
    }

    return result;
}

// console.table(getNotSportCarArray(cars));

//Task 10
//Знайти всі авто чорного кольору
//Знайти всі авто червоного кольору
//Знайти всі авто білого кольору

console.log(' ');
console.log('Task #10');

function getArrarCarsByColor(cars, carColor) {
    const result = [];

    for (const car of cars) {
        if (car.color.toLowerCase() === carColor.toLowerCase()) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів кольору ${carColor}`;
    }

    return result;
}

// console.table(getArrarCarsByColor(cars, 'white'));

//Task 11
//Знайти всі авто марки 'BMW'
//Знайти всі авто марки 'Lexus'
//Знайти всі авто марки 'Tesla'
//Знайти всі авто марки 'Audi'
//Знайти всі авто марки 'Mercedes'

console.log(' ');
console.log('Task #11');

function getArrayCarsByBrand(cars, carBrand) {
    const result = [];

    for (const car of cars) {
        if (car.brand.toLowerCase() === carBrand.toLowerCase()) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів марки ${carBrand}`;
    }

    return result;
}

// console.table(getArrayCarsByBrand(cars, 'Mercedes'));

//Task 12
//Знайти всі авто, які не є седанами

console.log(' ');
console.log('Task #12');

function getCarsArrayWithoutIndicatedType(cars, carType) {
    const result = [];

    for (const car of cars) {
        if (car.type.toLowerCase() !== carType.toLowerCase()) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `В наявності тільки автомобілі типу ${carType}`;
    }

    return result;
}

// console.table(getCarsArrayWithoutIndicatedType(cars, 'sedan'));

//Task 13
//Знайти всі авто, що мають ціну менше ніж 30000

console.log(' ');
console.log('Task #13');

function getCarsArrayBySmallerPrice(cars, carPrice) {
    const result = [];

    for (const car of cars) {
        if (car.price <= carPrice) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів ціною менше ${carPrice}$`;
    }

    return result;
}

// console.table(getCarsArrayBySmallerPrice(cars, 30000));

//Task 14
//Знайти всі авто, що мають кількість менше 5

console.log(' ');
console.log('Task #14');

function getCarsArrayBySmallerAmount(cars, carAmount) {
    const result = [];

    for (const car of cars) {
        if (car.amount <= carAmount) {
            result.push(car);
        }
    }

    if (!result.length) {
        retur`Немає автомобілів кількістю менше ${carAmount} одиниць`;
    }

    return result;
}

// console.table(getCarsArrayBySmallerAmount(cars, 5));

// ===================== PART #2 =====================

console.log(' ');
console.log('===================== PART #2 =====================');

//Task 1
//Порахувати кількість авто заданого року

console.log('Task #1');

/*

Відсортувати машини за роком випуску (від найстарішого до найновішого).
Знайти найдорожчу машину.
Порахувати загальну кількість машин.
Відсортувати машини за ціною (від найдешевшої до найдорожчої).
Знайти всі машини певного кольору та року випуску.
Порахувати середню ціну всіх машин.
Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.
Порахувати сумарну кількість всіх машин заданої марки.
Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
Знайти всі машини, які не є спортивними та доступні для продажу.
Порахувати загальну вартість всіх машин складі.
Знайти всі машини певного типу та кольору.
Відсортувати машини за брендом та моделлю в алфавітному порядку.
Перевірити, чи є хоч одна машина певного кольору.
Перевірити, чи є хоч одна машина певного року.
Перевірити, чи є всі авто є спроткарами.
Перевірити, чи є всі новіші за вказаний рік.
Створити новий масив, що містить лише назви моделей усіх машин.
Створити масив, що містить розмітку кожної машини.
Знайти індекс першої машини з роком випуску 2022 року.
Сортувати за ціною */

/*
Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.
Створити новий масив, що містить лише моделі доступних для продажу машин.
Знайти першу машину, яка не є спортивною та має кількість на на складі більше 0, потім повернути її колір.
Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною менше 40 000.
Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових і повернути масив тільки зі своїми моделями.
Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди та моделі цих машин.
Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише моделі цих машин та ціну.
Повернути масив, що містить лише кольори доступних для прродажу машин, та зробити щоб колір не повторювався дівчі.
Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.
Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.
Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70 000.
Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин. */
