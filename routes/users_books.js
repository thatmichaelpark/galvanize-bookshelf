'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const knex = require('../knex');

const checkAuth = function(req, res, next) {
  if (!req.session.userId) {
    return res.sendStatus(401);
  }

  next();
};

router.get('/users/books', checkAuth, (req, res, next) => {
  knex('books')
  .innerJoin('users_books', 'users_books.book_id', 'books.id')
  .where('users_books.user_id', req.session.userId)
  .then((books) => {
    res.send(books);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/users/books/:bookId', checkAuth, (req, res, next) => {
  knex('books')
  .innerJoin('users_books', 'users_books.book_id', 'books.id')
  .where('users_books.user_id', req.session.userId)
  .where('books.id', req.params.bookId)
  .first()
  .then((book) => {
    if (book) {
      res.send(book);
    }
    else {
      res.sendStatus(404);
    }
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/users/books/:bookId', checkAuth, (req, res, next) => {
  if (Number.isNaN(req.params.bookId)) {
    return next();
  }
  knex('books')
    .where('id', req.params.bookId)
    .first()
    .then((book) => {
      if (!book) {
        return next();
      }

      /* eslint-disable camelcase */
      return knex('users_books')
      .insert({ user_id: req.session.userId, book_id: req.params.bookId }, '*')
      .then((results) => {
        res.send(results[0]);
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/users/books/:bookId', checkAuth, (req, res, next) => {
  knex('users_books')
  .where('book_id', req.params.bookId)
  .where('user_id', req.session.userId)
  .first()
  .then((user_book) => {
    if (!user_book) {
      return next();
    }
    knex('users_books')
    .del()
    .where('book_id', req.params.bookId)
    .where('user_id', req.session.userId)
    .then(() => {
      delete user_book.id;
      res.send(user_book);
    });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
