const express = require("express");

const Workers = require('./workerModel');

const router = express.Router();

router.get('/', (req, res) => {
    Workers.getWorkers()
    .then(worker => {
        res.json(worker);
    })
    .catch(err => res.send(err));
});

router.get('/users', (req, res) => {
    Workers.getUsers()
    .then(user => {
        res.json(user);
    })
    .catch(err => res.send(err));
});

module.exports = router