const pgPromise = require('pg-promise');
const pgp = pgPromise({});
require('dotenv').config();

//connect to postgres local db with credentials
const client = pgp('postgres://localhost/gql_ninja');

client.connect(err => {
  if (err) {
    console.error('error: ', err);
  } else {
    console.log('CONNECTED to local postgres db');
  }
});

const insertBook = (bookName, genre, authorId) => {
  client
    .query('INSERT INTO books (name, genre, author_id) values ($1, $2, $3)', [
      bookName,
      genre,
      authorId
    ])
    .then(() => console.log('New book inserted'))
    .catch(err => console.log('ERROR:' + err));
};

const insertAuthor = (authorName, age) => {
  client
    .query('INSERT INTO authors (name, age) values ($1, $2)', [authorName, age])
    .then(() => console.log('New author inserted'))
    .catch(err => console.log('ERROR:' + err));
};

const getAllBooks = () => {
  return client.manyOrNone('SELECT * FROM books');
};

const getAllAuthors = () => {
  return client.manyOrNone('SELECT * FROM authors');
};

const findAuthorById = authorId => {
  return client.one('SELECT * FROM authors WHERE author_id = $1', [authorId]);
};

const findBookById = bookId => {
  return client.one('SELECT * FROM books WHERE book_id = $1', [bookId]);
};

const findBooksByAuthor = authorId => {
  return client.manyOrNone('SELECT * FROM books WHERE author_id = $1', [
    authorId
  ]);
};

module.exports.insertAuthor = insertAuthor;
module.exports.insertBook = insertBook;
module.exports.findAuthorById = findAuthorById;
module.exports.findBooksByAuthor = findBooksByAuthor;
module.exports.findBookById = findBookById;
module.exports.getAllAuthors = getAllAuthors;
module.exports.getAllBooks = getAllBooks;
