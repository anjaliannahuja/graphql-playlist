DROP DATABASE IF EXISTS gql_ninja;

CREATE DATABASE gql_ninja;

\c gql_ninja;

CREATE TABLE authors (
  author_id BIGSERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  age integer NOT NULL
);

CREATE TABLE books (
  book_id BIGSERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  genre varchar(255),
  author_id BIGSERIAL NOT NULL references authors(author_id)
);


/*  Execute this file from the command line by typing:
 *    psql -h localhost < ./server/db/schema.sql
 *  to create the database and the tables.*/

--  
