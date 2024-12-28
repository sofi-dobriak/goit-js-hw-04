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

function getCountCarsByYear(cars, carYear) {
    let count = 0;

    for (const car of cars) {
        if (car.year === carYear) {
            count++;
        }
    }

    return `Кількість автомоблів ${carYear} року скаладає ${count} одиниць`;
}

// console.table(getCountCarsByYear(cars, 2022));

//Task 2
//Відсортувати машини за роком випуску (від найстарішого до найновішого).

console.log(' ');
console.log('Task #2');

function getFilterCarsArrayByYear(cars) {
    for (let i = 0; i < cars.length; i++) {
        for (let j = i + 1; j < cars.length; j++) {
            if (cars[i].year > cars[j].year) {
                [cars[i], cars[j]] = [cars[j], cars[i]];
            }
        }
    }

    return cars;
}

// console.table(getFilterCarsArrayByYear(cars));

//Task 3
//Знайти найдорожчу машину.

console.log(' ');
console.log('Task #3');

function getMostExpensiveCar(cars) {
    let mostExpensiveCar = cars[0];

    for (const car of cars) {
        if (car.price > mostExpensiveCar.price) {
            mostExpensiveCar = car;
        }
    }

    return mostExpensiveCar;
}

// console.table(getMostExpensiveCar(cars));

//Task 4
//Порахувати загальну кількість машин.

console.log(' ');
console.log('Task #4');

function getTotalCountCars(cars) {
    return `Загальна кількість машин становить ${cars.length} одиниць`;
}

// console.log(getTotalCountCars(cars));

//Task 5
//Відсортувати машини за ціною (від найдешевшої до найдорожчої).

console.log(' ');
console.log('Task #5');

function getFilterCarsArrayByPrice(cars) {
    for (let i = 0; i < cars.length; i++) {
        for (let j = 0; j < cars.length; j++) {
            if (cars[i].price < cars[j].price) {
                [cars[i], cars[j]] = [cars[j], cars[i]];
            }
        }
    }

    return cars;
}

// console.table(getFilterCarsArrayByPrice(cars));

//Task 6
//Знайти всі машини певного кольору та року випуску.

console.log(' ');
console.log('Task #6');

function getArrayCarsByColorAndYear(cars, carColor, carYear) {
    const result = [];

    for (const car of cars) {
        if (car.color.toLowerCase() === carColor.toLowerCase() && car.year === carYear) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомоболів ${carYear} року із кольором ${carColor} `;
    }

    return result;
}

// console.table(getArrayCarsByColorAndYear(cars, 'red', 2020));

//Task 7
//Порахувати середню ціну всіх машин.

console.log(' ');
console.log('Task #7');

function getAvCarsPrice(cars) {
    let sum = 0;

    for (const car of cars) {
        sum += car.price;
    }

    const averagePrice = sum / cars.length;

    return `Середня ціна всіх машин становить ${averagePrice}$`;
}

// console.log(getAvCarsPrice(cars));

//Task 8
//Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.

console.log(' ');
console.log('Task #8');

function getArrayCarsByLessPriceAndAfterYear(cars, carPrice, carYear) {
    const result = [];

    for (const car of cars) {
        if (car.price < carPrice && car.year > carYear) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів вартістю нижче ${carPrice}$ і роком випуску після ${carYear}`;
    }

    return result;
}

// console.table(getArrayCarsByLessPriceAndAfterYear(cars, 30000, 2020));

//Task 9
//Порахувати сумарну кількість всіх машин заданої марки.

console.log(' ');
console.log('Task #9');

function getTotalCountCarsByBrand(cars, carBrand) {
    let count = 0;

    for (const car of cars) {
        if (car.brand.toLowerCase() === carBrand.toLowerCase()) {
            count++;
        }
    }

    return `Кількість автомобілів марки ${carBrand} становить ${count} одиниць`;
}

// console.log(getTotalCountCarsByBrand(cars, 'skoda'));

//Task 10
//Відсортувати машини за кількістю на складі (від найбільшої до найменшої).

console.log(' ');
console.log('Task #10');

function getFilterArrayCarsByAmount(cars) {
    for (let i = 0; i < cars.length; i++) {
        for (let j = 0; j < cars.length; j++) {
            if (cars[i].amount > cars[j].amount) {
                [cars[i], cars[j]] = [cars[j], cars[i]];
            }
        }
    }

    return cars;
}

// console.table(getFilterArrayCarsByAmount(cars));

//Task 11
//Знайти всі машини, які не є спортивними та доступні для продажу.

console.log(' ');
console.log('Task #11');

function getArrayCarsByTypeAndAmount(cars, carType, carAmount) {
    const result = [];

    for (const car of cars) {
        if (
            !car.isSportCar &&
            car.type.toLowerCase() === carType.toLowerCase() &&
            car.amount >= carAmount
        ) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає доступних автомобілів типу ${carType} для продажу`;
    }

    return result;
}

// console.table(getArrayCarsByTypeAndAmount(cars, 'sedan', 1));

//Task 12
//Порахувати загальну вартість всіх машин складі.

console.log(' ');
console.log('Task #12');

function getTotalPriceAvailableCars(cars) {
    let totalPrice = 0;

    for (const car of cars) {
        //перевірка на наявність машини на складі
        if (car.amount) {
            totalPrice += car.price;
        }
    }

    return `Загальна вартість автомобілів на складі становить ${totalPrice}$`;
}

// console.log(getTotalPriceAvailableCars(cars));

//Task 13
//Знайти всі машини певного типу та кольору.

console.log(' ');
console.log('Task #13');

function getCarsByTypeAndColor(cars, carType, carColor) {
    const result = [];

    for (const car of cars) {
        if (
            car.type.toLowerCase() === carType.toLowerCase() &&
            car.color.toLowerCase() === carColor.toLowerCase()
        ) {
            result.push(car);
        }
    }

    if (!result.length) {
        return `Немає автомобілів типу ${carType} з кольором ${carColor}`;
    }

    return result;
}

// console.table(getCarsByTypeAndColor(cars, 'suv', 'red'));

//Task 14
//Відсортувати машини за брендом та моделлю в алфавітному порядку.

console.log(' ');
console.log('Task #14');

function getFilterCarsAlphabetByBrandAndModel(cars) {
    for (let i = 0; i < cars.length; i++) {
        for (let j = i + 1; j < cars.length; j++) {
            const brandComprassion = cars[i].brand
                .toLowerCase()
                .localeCompare(cars[j].brand.toLowerCase());

            const modelComprassion = cars[i].model
                .toLowerCase()
                .localeCompare(cars[j].model.toLowerCase());

            if (brandComprassion > 0 || (brandComprassion === 0 && modelComprassion > 0)) {
                [cars[i], cars[j]] = [cars[j], cars[i]];
            }
        }
    }

    return cars;
}

// console.table(getFilterCarsAlphabetByBrandAndModel(cars));

//Task 15
//Перевірити, чи є хоч одна машина певного кольору.

console.log(' ');
console.log('Task #15');

function checkCarByColor(cars, carColor) {
    for (const car of cars) {
        if (car.color.toLowerCase() === carColor.toLowerCase()) {
            return true;
        }
    }

    return false;
}

// console.log(checkCarByColor(cars, 'black'));

//Task 15
//Перевірити, чи є хоч одна машина певного року.

console.log(' ');
console.log('Task #15');

function checkCarByYear(cars, carYear) {
    for (const car of cars) {
        if (car.year === carYear) {
            return true;
        }
    }

    return false;
}

// console.log(checkCarByYear(cars, 2022));

//Task 15
//Перевірити, чи є всі авто є спроткарами.

console.log(' ');
console.log('Task #15');

function getCarsBySportType(cars) {
    for (const car of cars) {
        if (!car.isSportCar) {
            return false;
        }
    }

    return true;
}

// console.log(getCarsBySportType(cars));

//Task 15
//Перевірити, чи є всі новіші за вказаний рік.

console.log(' ');
console.log('Task #15');

function checkCarByAfterYear(cars, carYear) {
    for (const car of cars) {
        if (car.year > carYear) {
            return true;
        }
    }

    return false;
}

// console.log(checkCarByAfterYear(cars, 2024));

//Task 16
//Створити новий масив, що містить лише назви моделей усіх машин.

console.log(' ');
console.log('Task #16');

function getCarsArrayByModel(cars) {
    const result = [];

    for (const car of cars) {
        result.push(car.model);
    }

    return result;
}

// console.log(getCarsArrayByModel(cars, 2024));

//Task 16
//Створити масив, що містить розмітку кожної машини.

console.log(' ');
console.log('Task #16');

function getCarsMarkup(cars) {
    const result = [];

    for (const car of cars) {
        const markup = `
            <h2>${car.brand} ${car.model}</h2>
            <p>Year: ${car.year}</p>
            <p>Color: ${car.color}</p>
            <p>Price: ${car.price}</p>
            <p>Amount: ${car.amount}</p>
            <p>isSportCar: ${car.isSportCar}</p>
            <p>Type: ${car.type}</p>`;

        result.push(markup.trim());
    }

    return result;
}

// console.log(getCarsMarkup(cars));

//Task 17
//Знайти індекс першої машини з роком випуску 2022 року.

console.log(' ');
console.log('Task #17');

function getIndexFirsCarByYear(cars, carYear) {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].year === carYear) {
            return i;
        }
    }

    return -1;
}

// console.log(getIndexFirsCarByYear(cars, 2022));

//Task 18
//Сортувати за ціною

console.log(' ');
console.log('Task #18');

function getFilterCarsByPrice(cars) {
    for (let i = 0; i < cars.length; i++) {
        for (let j = i + 0; j < cars.length; j++) {
            if (cars[i].price > cars[j].price) {
                [cars[i], cars[j]] = [cars[j], cars[i]];
            }
        }
    }

    return cars;
}

// console.table(getFilterCarsByPrice(cars));

// ===================== PART #3 =====================

console.log(' ');
console.log('===================== PART #3 =====================');

//Task 1
//Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.

console.log('Task #1');

function getFilterCarsArrayByYearAndPrice(cars, carPrice) {
    const result = [];

    for (const car of cars) {
        if (car.price > carPrice) {
            result.push(car);
        }
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].year < result[j].year) {
                [result[i], result[j]] = [result[j], result[i]];
            }
        }
    }

    if (!result.length) {
        return `Немає автомобілів вище ціни ${carPrice}`;
    }

    return result;
}

// console.table(getFilterCarsArrayByYearAndPrice(cars, 50000));

//Task 2
//Створити новий масив, що містить лише моделі доступних для продажу машин.

console.log(' ');
console.log('Task #2');

function getArrayCarsModelAvailable(cars) {
    const result = [];

    for (const car of cars) {
        if (car.amount > 0) {
            result.push(car.model);
        }
    }

    return result;
}

// console.table(getArrayCarsModelAvailable(cars));

//Task 3
//Знайти першу машину, яка не є спортивною та має кількість на складі більше 0, потім повернути її колір.

console.log(' ');
console.log('Task #3');

function getColorFirstFindAvailableCarByType(cars) {
    for (const car of cars) {
        if (!car.isSportCar && car.amount > 0) {
            return car.color;
        }
    }

    return `Немає автомобілів відповідно до знаданих параметрів пошуку`;
}

// console.table(getColorFirstFindAvailableCarByType(cars));

//Task 4
//Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною менше 40 000.

console.log(' ');
console.log('Task #4');

function getTotalPriceFilterArrayCarsByAmountAndPrice(cars, carAmount, carPrice) {
    const result = [];
    let sum = 0;

    for (const car of cars) {
        if (car.amount > carAmount && car.price < carPrice) {
            result.push(car);
        }
    }

    for (const car of result) {
        sum += car.price;
    }

    // return result;
    return `Загальна вартість всіх машин з кількістю на складі більше ${carAmount} і ціною менше ${carPrice}$ становить ${sum}$`;
}

// console.table(getTotalPriceFilterArrayCarsByAmountAndPrice(cars, 2, 40000));

//Task 5
//Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових і повернути масив тільки зі своїми моделями.

console.log(' ');
console.log('Task #5');

function getCarsModelFilterArrayByYear(cars, carType) {
    const result = [];
    const carModels = [];

    for (const car of cars) {
        if (car.type.toLowerCase() === carType.toLowerCase()) {
            result.push(car);
        }
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].year > result[j].year) {
                [result[i], result[j]] = [result[j], result[i]];
            }
        }
    }

    if (!result.length) {
        return `Немає автомобілів згідно параметрів пошуку`;
    }

    for (const car of result) {
        carModels.push(`Model: ${car.model}`);
    }

    return carModels;
}

// console.table(getCarsModelFilterArrayByYear(cars, 'sedan'));

//Task 6
//Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди та моделі цих машин.

console.log(' ');
console.log('Task #6');

function getSportCarFilterArrayByPriceBrandModel(cars, carPrice) {
    const result = [];
    const brandModelCars = [];

    for (const car of cars) {
        if (car.isSportCar && car.price > carPrice) {
            result.push(car);
        }
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].price < result[j].price) {
                [result[i], result[j]] = [result[j], result[i]];
            }
        }
    }

    if (!result.length) {
        return `Немає автомобілів згідно параметрів пошуку`;
    }

    for (const car of result) {
        brandModelCars.push(`Brand: ${car.brand}. Model: ${car.model}`);
    }

    return brandModelCars;
}

// console.table(getSportCarFilterArrayByPriceBrandModel(cars, 60000));

//Task 7
//Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише моделі цих машин та ціну.

console.log(' ');
console.log('Task #7');

function getFilterCarsArrayByColorAndPriceAndYear(cars, carColor, carYear) {
    const result = [];
    const carModelPriceArray = [];

    for (const car of cars) {
        if (car.color.toLowerCase() === carColor.toLowerCase() && car.year > carYear) {
            result.push(car);
        }
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].price > result[j].price) {
                [result[i], result[j]] = [result[j], result[i]];
            }
        }
    }

    for (const car of result) {
        carModelPriceArray.push(`Model: ${car.model}. Price: ${car.price}`);
    }

    return carModelPriceArray;
}

// console.table(getFilterCarsArrayByColorAndPriceAndYear(cars, 'Blue', 2020));

//Task 8
//Повернути масив, що містить лише кольори доступних для продажу машин, та зробити щоб колір не повторювався дівчі.

console.log(' ');
console.log('Task #8');

function getUniqueCarColorArray(cars) {
    const result = [];

    for (const car of cars) {
        if (!result.includes(car.color) && car.amount > 0) {
            result.push(car.color);
        }
    }

    if (!result.length) {
        return `Немає автомобілів відповідних до параметрів пошуку`;
    }

    return result;
}

// console.table(getUniqueCarColorArray(cars));

//Task 9
//Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.

console.log(' ');
console.log('Task #9');

function getCarsArrayByBrandAndModel(cars, carPrice) {
    const result = [];
    let indexFound = -1;

    for (let i = 0; i < cars.length; i++) {
        if (cars[i].price <= carPrice) {
            indexFound = i;
            break;
        }
    }

    if (indexFound !== -1) {
        for (let i = indexFound + 1; i < cars.length; i++) {
            result.push({ brand: cars[i].brand, model: cars[i].model });
        }
    }

    return result;
}

// console.table(getCarsArrayByBrandAndModel(cars, 20000));

//Task 10
//Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.

console.log(' ');
console.log('Task #10');

function getFilterCarsModelArrayByPrice(cars, minPrice, maxPrice) {
    const result = [];
    const modelArray = [];

    for (const car of cars) {
        if (car.price >= minPrice && car.price <= maxPrice) {
            result.push(car);
        }
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].year < result[j].year) {
                [result[i], result[j]] = [result[j], result[i]];
            }
        }
    }

    if (!result.length) {
        return `Немає автомобілів відповідних параметрам пошуку`;
    }

    for (const car of result) {
        modelArray.push({ model: car.model });
    }

    return modelArray;
}

// console.table(getFilterCarsModelArrayByPrice(cars, 40000, 60000));

//Task 11
//Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70 000.

console.log(' ');
console.log('Task #11');

function ckeckCarByAmountAndPrice(cars, carAmount, carPrice) {
    for (const car of cars) {
        if (car.amount > carAmount && car.price > carPrice) {
            return true;
        }
    }

    return false;
}

// console.table(ckeckCarByAmountAndPrice(cars, 5, 70000));

//Task 12
//Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин.

console.log(' ');
console.log('Task #12');

function getFilterArratCarsBYyModelAndBrandAndAmount(cars, carAmount) {
    const result = [];
    const brandModelArray = [];

    for (const car of cars) {
        if (car.amount > carAmount) {
            result.push(car);
        }
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].amount < result[j].amount) {
                [result[i], result[j]] = [result[j], result[i]];
            }
        }
    }

    for (const car of result) {
        brandModelArray.push({ brand: car.brand, model: car.model });
    }

    return brandModelArray;
}

// console.table(getFilterArratCarsBYyModelAndBrandAndAmount(cars, 0));
