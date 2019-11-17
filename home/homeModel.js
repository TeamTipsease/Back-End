const db = require('../data/dbConfig.js')

function getWorker() {
    return db('home');
}

module.exports = {
    getWorker,
}