'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/users/books', (req, res, next) => {
  knex('books')
  .innerJoin('users_books', 'users_books.book_id', 'books.id')
  .where('users_books.user_id', req.session.user.id)
  .then((books) => {
    res.send(books);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/users/books/:bookId', (req, res, next) => {
  knex('books')
  .innerJoin('users_books', 'users_books.book_id', 'books.id')
  .where('users_books.user_id', req.session.user.id)
  .where('books.id', req.params.bookId)
  .then((books) => {
    res.send(books);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/users/books/:bookId', (req, res, next) => {
  knex('users_books')
  .insert({user_id: req.session.user.id, book_id: req.params.bookId}, '*')
  .then((results) => {
    res.send(results[0]);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
