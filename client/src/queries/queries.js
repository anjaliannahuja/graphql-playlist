import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      book_id
      name
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      author_id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $author_id: ID!) {
    addBook(name: $name, genre: $genre, author_id: $author_id) {
      name
      book_id
    }
  }
`;

const getBookQuery = gql`
  query($book_id: ID) {
    book(book_id: $book_id) {
      book_id
      name
      genre
      author {
        author_id
        name
        age
        books {
          name
          book_id
        }
      }
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
