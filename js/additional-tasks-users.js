const users = [
    {
        firstName: 'Alice',
        lastName: 'Johnson',
        age: 28,
        email: 'alice@gmail.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Bob',
        lastName: 'Smith',
        age: 42,
        email: 'bob@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Eva',
        lastName: 'Williams',
        age: 35,
        email: 'eva@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'David',
        lastName: 'Brown',
        age: 22,
        email: 'david@gmail.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Sophia',
        lastName: 'Davis',
        age: 29,
        email: 'sophia@gmail.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'Michael',
        lastName: 'Miller',
        age: 50,
        email: 'michael@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Olivia',
        lastName: 'Wilson',
        age: 19,
        email: 'olivia@gmail.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Daniel',
        lastName: 'Thompson',
        age: 31,
        email: 'daniel@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Ava',
        lastName: 'Harris',
        age: 27,
        email: 'ava@gmail.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'James',
        lastName: 'Jackson',
        age: 38,
        email: 'james@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Emma',
        lastName: 'Taylor',
        age: 23,
        email: 'emma@example.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'William',
        lastName: 'Anderson',
        age: 45,
        email: 'william@gmail.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Mia',
        lastName: 'Martin',
        age: 29,
        email: 'mia@poshta.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Joseph',
        lastName: 'Clark',
        age: 33,
        email: 'joseph@poshta.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Charlotte',
        lastName: 'Rodriguez',
        age: 26,
        email: 'charlotte@poshta.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'John',
        lastName: 'Lopez',
        age: 31,
        email: 'john@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Amelia',
        lastName: 'Lee',
        age: 20,
        email: 'amelia@example.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'Benjamin',
        lastName: 'Gonzalez',
        age: 40,
        email: 'benjamin@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Chloe',
        lastName: 'Hernandez',
        age: 24,
        email: 'chloe@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Daniel',
        lastName: 'Young',
        age: 37,
        email: 'daniel@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Olivia',
        lastName: 'Miller',
        age: 38,
        email: 'olivia@example.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'James',
        lastName: 'Jones',
        age: 29,
        email: 'james@poshta.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Sophia',
        lastName: 'Davis',
        age: 31,
        email: 'sophia@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'William',
        lastName: 'Wilson',
        age: 52,
        email: 'william@poshta.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Ava',
        lastName: 'Taylor',
        age: 19,
        email: 'ava@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Michael',
        lastName: 'Clark',
        age: 40,
        email: 'michael@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Emma',
        lastName: 'Lee',
        age: 27,
        email: 'emma@poshta.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'Daniel',
        lastName: 'Martinez',
        age: 35,
        email: 'daniel@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Isabella',
        lastName: 'Hernandez',
        age: 42,
        email: 'isabella@poshta.com',
        isActive: false,
        gender: 'Female',
    },
    {
        firstName: 'Liam',
        lastName: 'Garcia',
        age: 26,
        email: 'liam@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Mia',
        lastName: 'Rodriguez',
        age: 30,
        email: 'mia@poshta.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Noah',
        lastName: 'Lopez',
        age: 24,
        email: 'noah@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Charlotte',
        lastName: 'Perez',
        age: 29,
        email: 'charlotte@example.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Ethan',
        lastName: 'Turner',
        age: 37,
        email: 'ethan@example.com',
        isActive: true,
        gender: 'Male',
    },
    {
        firstName: 'Amelia',
        lastName: 'White',
        age: 23,
        email: 'amelia@poshta.com',
        isActive: true,
        gender: 'Female',
    },
    {
        firstName: 'Alexander',
        lastName: 'Jackson',
        age: 41,
        email: 'alexander@example.com',
        isActive: false,
        gender: 'Male',
    },
    {
        firstName: 'Sofia',
        lastName: 'Brown',
        age: 33,
        email: 'sofia@example.com',
        isActive: true,
        gender: 'Female',
    },
];

//Task 1
//Знайти користувачів віком від 25 до 40 років.

console.log('Task #1');

function findUsersByAge(users, minAge, maxAge) {
    const result = [];

    for (const user of users) {
        if (user.age > minAge && user.age < maxAge) {
            result.push(user);
        }
    }

    return result;
}

// console.table(findUsersByAge(users, 25, 40));

//Task 2
//Знайти всіх користувачів із активним статусом.

console.log(' ');
console.log('Task #2');

function getActiveUsers(users) {
    const result = [];

    for (const user of users) {
        if (user.isActive) {
            result.push(user);
        }
    }

    return result;
}

// console.table(getActiveUsers(users));

//Task 3
//Порахувати кількість користувачів молодше 30 років.

console.log(' ');
console.log('Task #3');

function getCountYoungUsers(users) {
    let count = 0;

    for (const user of users) {
        if (user.age < 30) {
            count++;
        }
    }

    return `Кількість користувачів молодше 30 років становить: ${count} осіб`;
}

// console.table(getCountYoungUsers(users));

//Task 3
//Відсортувати користувачів віком від старшого до молодшого.

console.log(' ');
console.log('Task #3');

function getFilterUsersArrayByOldAge(users) {
    for (let i = 0; i < users.length; i++) {
        for (let j = i + 1; j < users.length; j++) {
            if (users[i].age < users[j].age) {
                [users[i], users[j]] = [users[j], users[i]];
            }
        }
    }

    return users;
}

// console.table(getFilterUsersArrayByOldAge(users));

//Task 4
//Знайти користувачів з електронною поштою на домені gmail.com.
//Знайти всіх користувачів електронної пошти на домені yahoo.com.

console.log(' ');
console.log('Task #4');

function getUsersByDomen(users, userDomen) {
    const result = [];
    userDomen = userDomen.toLowerCase();

    for (const user of users) {
        const emailDomen = user.email.split('@')[1].toLowerCase();

        if (emailDomen === userDomen) {
            result.push(user);
        } else {
            return `Не існує пошти із доменом ${userDomen}`;
        }
    }

    return result;
}

// console.table(getUsersByDomen(users, 'yahoo.com'));

//Task 5
//Знайти всіх жінок серед користувачів.

console.log(' ');
console.log('Task #5');

function getCountUsersByGender(users, userGender) {
    let count = 0;
    userGender = userGender.toLowerCase();

    for (const user of users) {
        if (user.gender.toLowerCase() === userGender) {
            count++;
        }
    }

    return `Кількість користувачів ${userGender} статі: ${count} осіб.`;
}

// console.table(getCountUsersByGender(users, 'Female'));

//Task 6
//Порахувати кількість неактивних користувачів.

console.log(' ');
console.log('Task #6');

function getUnactiveUsers(users) {
    let count = 0;

    for (const user of users) {
        if (!user.isActive) {
            count++;
        }
    }

    return `Кількість неактивних користувачів становить: ${count} осіб`;
}

// console.table(getUnactiveUsers(users));

//Task 7
//Відсортувати користувачів на прізвище в алфавітному порядку.

console.log(' ');
console.log('Task #7');

function getFilterUserArrayByAlphabet(users) {
    for (let i = 0; i < users.length; i++) {
        for (let j = i + 1; j < users.length; j++) {
            if (users[i].lastName.toLowerCase() > users[j].lastName.toLowerCase()) {
                [users[i], users[j]] = [users[j], users[i]];
            }
        }
    }

    return users;
}

// console.table(getFilterUserArrayByAlphabet(users));

//Task 8
//Знайти користувача з найбільшим віком.

console.log(' ');
console.log('Task #8');

function getOlderUser(users) {
    let agerUser = users[0];

    for (const user of users) {
        if (user.age > agerUser.age) {
            agerUser = user;
        }
    }

    return agerUser;
}

// console.table(getOlderUser(users));

//Task 9
//Перевірити, чи є хоча б один користувач із прізвищем "Johnson".

console.log(' ');
console.log('Task #9');

function ckeckUsersByLastName(users, lastName) {
    for (const user of users) {
        if (user.lastName.toLowerCase() === lastName.toLowerCase()) {
            return true;
        }
    }

    return false;
}

// console.table(ckeckUsersByLastName(users, 'Johnson'));

//Task 10
//Створити новий масив, який містить лише імена користувачів.

console.log(' ');
console.log('Task #10');

function getUserNameArray(users) {
    const result = [];

    for (const user of users) {
        result.push(user.firstName);
    }

    return result;
}

// console.table(getUserNameArray(users));

//Task 11
//Створити масив з інформацією про користувачів у форматі JSON.

console.log(' ');
console.log('Task #11');

function getUsersArrayJSON(users) {
    return JSON.stringify(users, null, 2);
}

// console.table(getUsersArrayJSON(users));

//Task 12
//Знайти індекс першого користувача під назвою "Jane".

console.log(' ');
console.log('Task #12');

function getUserIndexByName(users, userName) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].firstName.toLowerCase() === userName.toLowerCase()) {
            return i;
        }
    }

    return -1;
}

// console.table(getUserIndexByName(users, 'Jane'));

//Task 13
//Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.

console.log(' ');
console.log('Task #13');

function getUserByGenderAndAgeDiapason(users, userGender, minAge, maxAge) {
    const result = [];
    userGender = userGender.toLowerCase();

    for (const user of users) {
        if (user.gender.toLowerCase() === userGender && user.age >= minAge && user.age <= maxAge) {
            result.push(user);
        }
    }

    return result;
}

// console.table(getUserByGenderAndAgeDiapason(users, 'Male', 30, 50));

//Task 14
//Порахувати загальну кількість користувачів.

console.log(' ');
console.log('Task #14');

function getTotalCountUsers(users) {
    return `Загальна кількість користувачів становить ${users.length} осіб`;
}

// console.table(getTotalCountUsers(users));

//Task 15
//Знайти всіх користувачів з активним статусом та віком старше 25 років.

console.log(' ');
console.log('Task #15');

function getActiveUsersByAge(users, userAge) {
    const result = [];

    for (const user of users) {
        if (user.isActive && user.age >= userAge) {
            result.push(user);
        }
    }

    return result;
}

// console.table(getActiveUsersByAge(users, 25));

//Task 16
//Знайти користувачів із прізвищем, що починається на букву "S".

console.log(' ');
console.log('Task #16');

function getUsersByFirstLetterLastName(users, firstLetter) {
    const result = [];

    for (const user of users) {
        if (user.lastName[0].toLowerCase() === firstLetter.toLowerCase()) {
            result.push(user);
        }
    }

    return result;
}

// console.table(getUsersByFirstLetterLastName(users, 'A'));

//Task 17
//Відсортувати користувачів за віком (від молодшого до старшого).

console.log(' ');
console.log('Task #17');

function getFilterArrayUserByYoungAge(users) {
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (users[i].age < users[j].age) {
                [users[i], users[j]] = [users[j], users[i]];
            }
        }
    }

    return users;
}

// console.table(getFilterArrayUserByYoungAge(users));

//Task 18
//Знайти користувача з найменшим віком.

console.log(' ');
console.log('Task #18');

function getYoungerUser(users) {
    let smallerAgeuser = users[0];

    for (const user of users) {
        if (user.age < smallerAgeuser.age) {
            smallerAgeuser = user;
        }
    }

    return smallerAgeuser;
}

// console.table(getYoungerUser(users));

//Task 19
//Перевірити, чи є хоча б один користувач з ім'ям John.

console.log(' ');
console.log('Task #19');

function ckeckFirstNameUser(users, userFirstName) {
    for (const user of users) {
        if (user.firstName.toLowerCase() === userFirstName.toLowerCase()) {
            return true;
        }
    }

    return false;
}

// console.table(ckeckFirstNameUser(users, 'John'));

//Task 20
//Створити новий масив, що містить лише прізвища користувачів.

console.log(' ');
console.log('Task #20');

function getLastNameUsersArray(users) {
    const result = [];

    for (const user of users) {
        result.push(user.lastName);
    }

    return result;
}

// console.table(getLastNameUsersArray(users));

//Task 21
//Створити масив з інформацією про користувачів як рядкових описів.

console.log(' ');
console.log('Task #21');

function getStringUserDescription(users) {
    const result = [];

    for (const user of users) {
        const description = `FirstName: ${user.firstName}. LastName: ${user.lastName}. Age: ${user.age}. Email: ${user.email}. Status: ${user.isActive}. Gender: ${user.gender}.`;

        result.push(description);
    }

    return result;
}

// console.log(getStringUserDescription(users));

//Task 22
//Знайти індекс користувача з активним статусом і віком більшим або рівним 40 років.

console.log(' ');
console.log('Task #22');

function getActiveUserIndexByYearDiapason(users, userAge) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive && users[i].age >= userAge) {
            return i;
        }
    }

    return -1;
}

console.log(getActiveUserIndexByYearDiapason(users, 40));
