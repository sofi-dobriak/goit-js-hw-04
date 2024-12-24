'use strict';

const books = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        genre: 'Fiction',
        price: 10.99,
        rating: 4.9,
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        genre: 'Dystopian',
        price: 8.99,
        rating: 4.8,
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        genre: 'Classic',
        price: 7.99,
        rating: 4.7,
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951,
        genre: 'Fiction',
        price: 6.99,
        rating: 4.6,
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813,
        genre: 'Romance',
        price: 5.99,
        rating: 4.9,
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year: 1937,
        genre: 'Fantasy',
        price: 12.99,
        rating: 4.8,
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        year: 1851,
        genre: 'Adventure',
        price: 9.99,
        rating: 4.5,
    },
    {
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        year: 1869,
        genre: 'Historical',
        price: 14.99,
        rating: 4.9,
    },
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        year: 1866,
        genre: 'Philosophical',
        price: 11.99,
        rating: 4.8,
    },
    {
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        year: 1880,
        genre: 'Philosophical',
        price: 13.99,
        rating: 4.9,
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        year: 1932,
        genre: 'Dystopian',
        price: 9.99,
        rating: 4.7,
    },
    {
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        year: 1847,
        genre: 'Romance',
        price: 7.99,
        rating: 4.8,
    },
    {
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        year: 1847,
        genre: 'Romance',
        price: 8.99,
        rating: 4.7,
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        year: 1890,
        genre: 'Gothic',
        price: 6.99,
        rating: 4.6,
    },
    {
        title: 'Frankenstein',
        author: 'Mary Shelley',
        year: 1818,
        genre: 'Science Fiction',
        price: 7.99,
        rating: 4.7,
    },
    {
        title: 'Dracula',
        author: 'Bram Stoker',
        year: 1897,
        genre: 'Horror',
        price: 6.99,
        rating: 4.5,
    },
    {
        title: 'The Odyssey',
        author: 'Homer',
        year: -800,
        genre: 'Epic',
        price: 10.99,
        rating: 4.9,
    },
    {
        title: 'The Iliad',
        author: 'Homer',
        year: -750,
        genre: 'Epic',
        price: 9.99,
        rating: 4.8,
    },
    {
        title: 'Les Misérables',
        author: 'Victor Hugo',
        year: 1862,
        genre: 'Historical',
        price: 11.99,
        rating: 4.9,
    },
    {
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        year: 1844,
        genre: 'Adventure',
        price: 12.99,
        rating: 4.9,
    },
    {
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        year: 1939,
        genre: 'Fiction',
        price: 8.99,
        rating: 4.7,
    },
    {
        title: 'Of Mice and Men',
        author: 'John Steinbeck',
        year: 1937,
        genre: 'Fiction',
        price: 7.99,
        rating: 4.6,
    },
    {
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        year: 1859,
        genre: 'Historical',
        price: 9.99,
        rating: 4.8,
    },
    {
        title: 'Great Expectations',
        author: 'Charles Dickens',
        year: 1861,
        genre: 'Fiction',
        price: 8.99,
        rating: 4.7,
    },
    {
        title: 'The Secret Garden',
        author: 'Frances Hodgson Burnett',
        year: 1911,
        genre: 'Children',
        price: 6.99,
        rating: 4.7,
    },
    {
        title: 'Little Women',
        author: 'Louisa May Alcott',
        year: 1868,
        genre: 'Fiction',
        price: 7.99,
        rating: 4.8,
    },
    {
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        year: 1877,
        genre: 'Romance',
        price: 10.99,
        rating: 4.9,
    },
    {
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        year: 1892,
        genre: 'Mystery',
        price: 9.99,
        rating: 4.8,
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        year: 1954,
        genre: 'Fantasy',
        price: 20.99,
        rating: 4.9,
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        year: 1997,
        genre: 'Fantasy',
        price: 10.99,
        rating: 4.8,
    },
];

// ===================== PART #1 =====================
console.log('===================== PART #1 =====================');

//Task 1
//Знайти всі книги жанру 'Fantasy'.

console.log('Task #1');

function getBooksDyGenre(object, userGenre) {
    const result = [];

    for (const item of object) {
        if (item.genre === userGenre) {
            result.push(item);
        }
    }

    return result;
}

// console.table(getFantasyBooks(books, 'Mystery'));

//Task 2
//Знайти всі книги, видані після 1900 року.

console.log(' ');
console.log('Task #2');

function getBooksAfterSomeYear(object, year) {
    const result = [];

    for (const item of object) {
        if (item.year > year) {
            result.push(item);
        }
    }

    return result;
}

// console.table(getBooksAfterTwoThousands(books, 1900));

//Task 3
//Знайти всі книги, автором яких є 'J.K. Rowling.

console.log(' ');
console.log('Task #3');

function getBooksByAuthor(object, author) {
    const result = [];

    for (const item of object) {
        if (item.author === author) {
            result.push(item);
        }
    }

    return result;
}

// console.table(getBooksByAuthor(books, 'J.R.R. Tolkien'));

//Task 4
//Знайти всі книги з ціною меншою ніж 10 доларів.

console.log(' ');
console.log('Task #4');

function getBooksByPrice(object, price) {
    const result = [];

    for (const item of object) {
        if (item.price < price) {
            result.push(item);
        }
    }

    return result;
}

// console.table(getBooksByPrice(books, 10));

//Task 5
//Знайти всі книги з рейтингом 4.8 і вище.

console.log(' ');
console.log('Task #5');

function getBooksByRating(object, rating) {
    const result = [];

    for (const item of object) {
        if (item.rating >= rating) {
            result.push(item);
        }
    }

    return result;
}

// console.table(getBooksByRating(books, 4.8));

//Task 6
//Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.

console.log(' ');
console.log('Task #6');

function getBooksByGenreAndPrice(object, genre, price) {
    const result = [];

    for (const item of object) {
        if (item.genre === genre && item.price < price) {
            result.push(item);
        }
    }

    return result;
}

// console.table(getBooksByGenreAndPrice(books, 'Romance', 8));

//Task 7
//Знайти всі книги, видані до 1900 року.

console.log(' ');
console.log('Task #7');

function getBooksBeforeSomeYears(object, year) {
    const result = [];

    for (const item of object) {
        if (item.year < year) {
            result.push(item);
        }
    }

    return result;
}

// console.table(getBooksBeforeSomeYears(books, 1900));

//Task 8
//Знайти всі книги, що містять слово 'and' у назві.

console.log(' ');
console.log('Task #8');

function getBooksByKeyWord(object, keyWord) {
    const result = [];

    for (const item of object) {
        if (item.title.indexOf(keyWord) !== -1) {
            result.push(item);
        }
    }
    return result;
}

// console.table(getBooksByKeyWord(books, 'and'));

//Task 9
//Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.

console.log(' ');
console.log('Task #9');

function getBooksByGenreAndRating(object, genre, rating) {
    const result = [];

    for (const item of object) {
        if (item.genre === genre && item.rating > rating) {
            result.push(item);
        }
    }

    return result;
}

// console.table(getBooksByGenreAndRating(books, 'Historical', 4.7));

// ===================== PART #2 =====================
console.log(' ');
console.log('===================== PART #2 =====================');

//Task 1
//Знайти першу книгу жанру 'Fantasy'.

console.log('Task #1');

function getFirstBookdByGenre(object, userGenre) {
    for (const item of object) {
        if (item.genre === userGenre) {
            return item;
        }
    }

    return `There is no book of this genre`;
}

// console.log(getFirstBookdByGenre(books, 'Fantasy'));

//Task 2
//Знайти першу книгу, видану після 2000 року.

console.log(' ');
console.log('Task #2');

function getFirstBookByYear(object, userYear) {
    for (const item of object) {
        if (item.year > userYear) {
            return item;
        }
    }
    return `There is no book of this year`;
}

// console.log(getFirstBookByYear(books, 2000));

//Task 4
//Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.

console.log(' ');
console.log('Task #4');

function getFirstBookByAuthor(object, userAuthor) {
    for (const item of object) {
        if (item.author === userAuthor) {
            return item;
        }
    }
    return `There is no book of this author`;
}

// console.log(getFirstBookByAuthor(books, 'J.R.R. Tolkien'));

//Task 5
//Знайти першу книгу з ціною меншою ніж 10 доларів.

console.log(' ');
console.log('Task #5');

function getFirstBookByPrice(object, userPrice) {
    for (const item of object) {
        if (item.price < userPrice) {
            return item;
        }
    }
    return `There is no book of this price`;
}

// console.log(getFirstBookByPrice(books, 10));

//Task 6
//Знайти першу книгу з рейтингом 4.8 і вище.

console.log(' ');
console.log('Task #6');

function getFirstBookByRating(object, userRating) {
    for (const item of object) {
        if (item.rating >= userRating) {
            return item;
        }
    }
    return `There is no book of this rating`;
}

// console.log(getFirstBookByRating(books, 4.8));

//Task 7
//Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.

console.log(' ');
console.log('Task #7');

function getFirstBookByGenreAndPrice(object, userGenre, userPrice) {
    for (const item of object) {
        if (item.genre === userGenre && item.price < userPrice) {
            return item;
        }
    }
    return `There is no books of this genre and price`;
}

// console.log(getFirstBookByGenreAndPrice(books, 'Romance', 8));

//Task 8
//Знайти першу книгу, видану до 1900 року.

console.log(' ');
console.log('Task #8');

function getFirstBookBeforeSomeYear(object, userYear) {
    for (const item of object) {
        if (item.year < userYear) {
            return item;
        }
    }
    return `There is no book published before this year`;
}

// console.log(getFirstBookBeforeSomeYear(books, 1900));

//Task 9
//Знайти першу книгу, видану до 1900 року.

console.log(' ');
console.log('Task #9');

function getFirstBookByKeyWord(object, keyWord) {
    for (const item of object) {
        if (item.title.indexOf(keyWord) !== -1) {
            return item;
        }
    }
    return `There is no books with this title`;
}

// console.log(getFirstBookByKeyWord(books, 'and'));

//Task 10
//Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.

console.log(' ');
console.log('Task #10');

function getFirstBookByGenreAndRating(object, userGenre, userRating) {
    for (const item of object) {
        if (item.genre === userGenre && item.rating > userRating) {
            return item;
        }
    }
    return `There is no book of this genre and rating`;
}

// console.log(getFirstBookByGenreAndRating(books, 'Historical', 4.7));

// ===================== PART #3 =====================
console.log(' ');
console.log('===================== PART #3 =====================');

//Task 1
//Чи є в масиві хоча б одна книга жанру 'Fantasy'?

console.log('Task #1');

function isIncludesBookByGenre(object, userGenre) {
    for (const item of object) {
        if (item.genre === userGenre) {
            return true;
        }
    }
    return false;
}

// console.log(isIncludesBookByGenre(books, 'Fantasy'));

//Task 2
//Чи є в масиві хоча б одна книга, видана після 2000 року?

console.log(' ');
console.log('Task #2');

function isIncludesBookBeforeSomeYear(object, userYear) {
    for (const item of object) {
        if (item.year > userYear) {
            return true;
        }
    }
    return false;
}

// console.log(isIncludesBookBeforeSomeYear(books, 1900));

//Task 3
//Чи є в масиві хоча б одна книга, автором якої є 'J.R.R. Tolkien'?

console.log(' ');
console.log('Task #3');

function isIncludesBookByAuthor(object, userAuthor) {
    for (const item of object) {
        if (item.author === userAuthor) {
            return true;
        }
    }
    return false;
}

// console.log(isIncludesBookByAuthor(books, 'J.R.R. Tolkien'));

//Task 4
//Чи є в масиві хоча б одна книга з ціною меншою ніж 10 доларів?

console.log(' ');
console.log('Task #4');

function isIncludesBookByPrice(object, userPrice) {
    for (const item of object) {
        if (item.price < userPrice) {
            return true;
        }
    }
    return false;
}

// console.log(isIncludesBookByPrice(books, 10));

//Task 5
//Чи є в масиві хоча б одна книга з рейтингом 4.8 і вище?

console.log(' ');
console.log('Task #5');

function isIncludesBookByRating(object, userRating) {
    for (const item of object) {
        if (item.rating >= userRating) {
            return true;
        }
    }
    return false;
}

// console.log(isIncludesBookByRating(books, 4.8));

//Task 6
//Чи є в масиві хоча б одна книга жанру 'Romance' з ціною меншою ніж 8 доларів?

console.log(' ');
console.log('Task #6');

function isIncludesBookByRating(object, userGenre, userPrice) {
    for (const item of object) {
        if (item.genre === userGenre && item.price < userPrice) {
            return true;
        }
    }
    return false;
}

// console.log(isIncludesBookByRating(books, 'Romance', 8));

//Task 7
//Чи є в масиві хоча б одна книга, що містить слово 'and' у назві?

console.log(' ');
console.log('Task #7');

function isIncludesBookByKeyWord(object, keyWord) {
    for (const item of object) {
        if (item.title.indexOf(keyWord) !== -1) {
            return true;
        }
    }

    return false;
}

// console.log(isIncludesBookByKeyWord(books, 'and'));

//Task 8
//Чи є в масиві хоча б одна книга жанру 'Historical' з рейтингом вище 4.7?

console.log(' ');
console.log('Task #8');

function isIncludesBookByGenreAndRating(object, userGenre, userRating) {
    for (const item of object) {
        if (item.genre === userGenre && item.rating > userRating) {
            return true;
        }
    }

    return false;
}

// console.log(isIncludesBookByGenreAndRating(books, 'Historical', 4.7));

// ===================== PART #4 =====================
console.log(' ');
console.log('===================== PART #4 =====================');

//Task 1
//Чи всі книги в масиві мають рейтинг 4.5 і вище?
//Чи всі книги в масиві мають рейтинг вище 4.0?

console.log('Task #1');

function checkBooksByRating(object, userRating) {
    for (const item of object) {
        if (item.rating < userRating) {
            return false;
        }
    }

    return true;
}

// console.log(checkBooksByRating(books, 4.5));

//Task 2
//Чи всі книги в масиві коштують менше 20 доларів?

console.log(' ');
console.log('Task #2');

function checkBooksByPrice(object, userPrice) {
    for (const item of object) {
        if (item.price > userPrice) {
            return false;
        }
    }

    return true;
}

// console.log(checkBooksByPrice(books, 20));

//Task 3
//Чи всі книги в масиві видані після 1950 року?

console.log(' ');
console.log('Task #3');

function checkBooksByAfterYear(object, userYear) {
    for (const item of object) {
        if (item.year < userYear) {
            return false;
        }
    }

    return true;
}

// console.log(checkBooksByAfterYear(books, 1950));

//Task 4
//Чи всі книги в масиві є жанру 'Fiction'?
//Чи всі книги в масиві є жанру 'Adventure'?

console.log(' ');
console.log('Task #4');

function checkBooksByGenre(object, userGenre) {
    for (const item of object) {
        if (item.genre !== userGenre) {
            return false;
        }
    }

    return true;
}

// console.log(checkBooksByGenre(books, 'Fiction'));

//Task 5
//Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?

console.log(' ');
console.log('Task #5');

function checkBooksByAuthorName(object, userAuthorName) {
    for (const item of object) {
        if (item.author[0] === userAuthorName) {
            return false;
        }
    }

    return true;
}

// console.log(checkBooksByAuthorName(books, 'J'));

//Task 6
//Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?

console.log(' ');
console.log('Task #6');

function checkBooksByGenreAndPrice(object, userGenre, userPrice) {
    for (const item of object) {
        if (item.genre !== userGenre || item.price > userPrice) {
            return false;
        }
    }

    return true;
}

// console.log(checkBooksByAuthorName(books, 'Romance', 15));

//Task 7
//Чи всі книги в масиві видані до 2000 року?

console.log(' ');
console.log('Task #7');

function checkBooksByBeforeYear(object, userYear) {
    for (const item of object) {
        if (item.year > userYear) {
            return false;
        }
    }

    return true;
}

// console.log(checkBooksByBeforeYear(books, 2000));

//Task 8
//Чи всі книги в масиві мають слово 'the' у назві?

console.log(' ');
console.log('Task #8');

function checkBooksByKeyWord(books, keyWord) {
    for (const book of books) {
        if (book.title.indexOf(keyWord) === -1) {
            return false;
        }
    }

    return true;
}

// console.log(checkBooksByKeyWord(books, 'the'));

// ===================== PART #5 =====================
console.log(' ');
console.log('===================== PART #5 =====================');

//Task 1
//Отримати масив назв всіх книжок.

console.log('Task #1');

function getBooksTitleArray(books) {
    const result = [];

    for (const book of books) {
        result.push(book.title);
    }

    return result;
}

// console.table(getBooksTitleArray(books));

//Task 2
//Отримати масив авторів всіх книжок.

console.log(' ');
console.log('Task #2');

function getBooksAuthorArray(books) {
    const result = [];

    for (const book of books) {
        //перевірка, щоб не повторювались автори
        if (!result.includes(book.author)) {
            result.push(book.author);
        }
    }

    return result;
}

// console.table(getBooksAuthorArray(books));

//Task 3
//Створити масив об'єктів, які містять лише назву та автора кожної книжки.

console.log(' ');
console.log('Task #3');

function getBooksTitleAndAuthorArray(books) {
    const result = [];

    for (const book of books) {
        result.push({ title: book.title, author: book.author });
    }

    return result;
}

// console.table(getBooksTitleAndAuthorArray(books));

//Task 4
//Створити масив цін всіх книжок з подвоєною вартістю.

console.log(' ');
console.log('Task #4');

function getBooksDoublePrice(books) {
    const result = [];

    for (const book of books) {
        result.push(book.price * 2);
    }

    return result;
}

// console.table(getBooksDoublePrice(books));

//Task 5
//Створити масив років видання всіх книжок з доданими 5 роками до кожного.

console.log(' ');
console.log('Task #5');

function getAddBookYearArray(books) {
    const result = [];

    for (const book of books) {
        result.push(book.year + 5);
    }

    return result;
}

// console.table(getAddBookYearArray(books));

//Task 6
//Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках (помножений на 10).

console.log(' ');
console.log('Task #6');

function getBooksTitleAndRatingDaubleTenArray(books) {
    const resut = [];

    for (const book of books) {
        resut.push({ title: book.title, rating: book.rating * 10 });
    }

    return resut;
}

// console.table(getBooksTitleAndRatingDaubleTenArray(books));

//Task 7
//Створити масив об'єктів, де назва книжки буде в верхньому регістрі.

console.log(' ');
console.log('Task #7');

function getBooksUpperTitleArray(books) {
    const result = [];

    for (const book of books) {
        result.push(book.title.toUpperCase());
    }

    return result;
}

// console.table(getBooksUpperTitleArray(books));

//Task 8
//Створити масив рядків, що містять інформацію про кожну книжку в форматі "назва - автор".

console.log(' ');
console.log('Task #8');

function getArrayStringTitleAuthorBook(books) {
    const result = [];

    for (const book of books) {
        result.push(`${book.title} — ${book.author}`);
    }

    return result;
}

// console.table(getArrayStringTitleAuthorBook(books));

//Task 9
//Створити масив об'єктів, де кожна книжка буде мати нове поле discountPrice, що дорівнює ціні зі знижкою 10%.

console.log(' ');
console.log('Task #9');

function getArrayBookDiscountPrice(books) {
    const result = [];

    for (const book of books) {
        const discountPrice = book.price * 0.1;

        result.push({
            title: book.title,
            author: book.author,
            year: book.year,
            genre: book.genre,
            price: book.price,
            discountPrice: Number((book.price - discountPrice).toFixed(1)),
            rating: book.rating,
        });
    }

    return result;
}

// console.table(getArrayBookDiscountPrice(books));

//Task 10
//Створити масив об'єктів, що містять назву книжки та її ціну з доданим податком 15%.

console.log(' ');
console.log('Task #10');

function getArrayBookPriceWithTax(books) {
    const result = [];

    for (const book of books) {
        const priceWithTax = book.price * 1.15;

        result.push({
            title: book.title,
            price: book.price,
            priceWithTax: Number(priceWithTax.toFixed(1)),
        });
    }

    return result;
}

// console.table(getArrayBookPriceWithTax(books));

//Task 11
//Створити масив назв книжок, які видані після 2000 року.

console.log(' ');
console.log('Task #11');

function getBookTitleArrayAfterYear(books, userYear) {
    const result = [];

    for (const book of books) {
        if (book.year > userYear) {
            result.push(book.title);
        }
    }

    return result;
}

// console.table(getBookTitleArrayAfterYear(books, 2000));

//Task 12
//Створити масив об'єктів, де кожна книжка буде мати нове поле isClassic, що дорівнює true, якщо книжка видана до 1950 року.

console.log(' ');
console.log('Task #12');

function isClassicBooks(books) {
    const result = [];

    for (const book of books) {
        result.push({
            ...book,
            isClassic: book.year < 1950,
        });
    }

    return result;
}

// console.table(isClassicBooks(books));

//Task 13
//Отримати масив жанрів всіх книжок у верхньому регістрі.

console.log(' ');
console.log('Task #13');

function getUpperGenreBooksArray(books) {
    const result = [];

    for (const book of books) {
        result.push(book.genre.toUpperCase());
    }

    return result;
}

console.table(getUpperGenreBooksArray(books));

//Task 14
//Створити масив назв книжок, де всі слова в назві починаються з великої літери.

console.log(' ');
console.log('Task #14');

/*
Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.
Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар = 0.85 євро).
Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".
Створити масив об'єктів, де кожна книжка буде мати нове поле shortTitle, що містить тільки перше слово з назви.
Створити масив об'єктів, де кожна книжка буде мати нове поле description, що містить рядок "Ця книга від автора [author] була видана у [year] році".
Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр записаний у нижньому регістрі. */

/*
Відсортувати книги за роком видання від найдавнішого до найновішого.
Відсортувати книги за ціною від найнижчої до найвищої.
Відсортувати книги за рейтингом від найнижчого до найвищого.
Відсортувати книги за назвою у алфавітному порядку (від А до Я).
Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).
Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за назвою у зворотньому алфавітному порядку.
Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою назвою за автором у зворотньому алфавітному порядку.
Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше 10 доларів, потім решту.
Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають рейтинг 4.8 і вище, потім решту.
Відсортувати книги спочатку за жанром, а потім за роком видання. */

/*
Отримати всі книги, видані після 2000 року та відсортувати їх за рейтингом від найвищого до найнижчого, повернути лише назви.
Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за роком видання від найдавнішого до найновішого та вивести перші 5 книг.
Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною від найнижчої до найвищої та вивести назви книг.
Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у зворотньому алфавітному порядку та вивести авторів унікальних книг.
Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та відсортувати їх за рейтингом від найвищого до найнижчого.
Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від найвищого до найнижчого та вивести першу книгу.
Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останню книгу.
Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за рейтингом від найвищого до найнижчого та вивести середній рейтинг.
Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх за роком видання від найдавнішого до найновішого та вивести останні 3 книги. */
