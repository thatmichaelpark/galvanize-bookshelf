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
    if (books.length) {
      res.send(books[0]);
    } else {
      res.sendStatus(404);
    }
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

router.delete('/users/books/:bookId', (req, res, next) => {
  knex('users_books')
  .where('book_id', req.params.bookId)
  .where('user_id', req.session.user.id)
  .first()
  .then((user_book) => {

    knex('users_books')
    .del()
    .where('book_id', req.params.bookId)
    .where('user_id', req.session.user.id)
    .then(() => {
      delete user_book.id;
      res.send(user_book);
    })

  })
  .catch((err) => {
    next(err);
  })
});

module.exports = router;
