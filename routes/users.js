'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../knex');

router.post('/users', (req, res, next) => {
  const user = req.body;
  if (!user.first_name || user.first_name.trim() === '') {
    res.setHeader('Content-Type', 'text/plain');
    res.status(400);
    return res.send('First name missing');
  }
  if (!user.last_name || user.last_name.trim() === '') {
    res.setHeader('Content-Type', 'text/plain');
    res.status(400);
    return res.send('Last name missing');
  }
  if (!user.email || user.email.trim() === '') {
    res.setHeader('Content-Type', 'text/plain');
    res.status(400);
    return res.send('Email must not be blank');
  }
  if (!user.password || user.password.trim() === '') {
    res.setHeader('Content-Type', 'text/plain');
    res.status(400);
    return res.send('Password must not be blank');
  }

  knex('users')
  .where('email', user.email)
  .then((users) => {
    if (users.length) {
      res.setHeader('Content-Type', 'text/plain');
      res.status(400);
      return res.send('Email already exists');
    }
    bcrypt.hash(req.body.password, 12, (err, hashed_password) => {
      if (err) {
        return next(err);
      }

      knex('users')
      .insert({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        hashed_password
      })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        next(err);
      });
    });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
