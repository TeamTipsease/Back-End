const db = require('../data/dbConfig'); 

function getWorkers() {
    return db('service_workers');
}

function getUsers() {
    return db('users');
}

function getWorkerById(id) {
    return db('service_workers')
    .where({ id })
    .first();
}

function getUserById(id) {
    return db('users')
    .where({ id })
    .first();
}

module.exports = {
    getWorkers,
    getUsers,
    getWorkerById,
    getUserById,

}