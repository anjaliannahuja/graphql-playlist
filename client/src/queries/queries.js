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
    addBook(name: $name, genre: $genre, authorId: $author_id) {
      name
      book_id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
