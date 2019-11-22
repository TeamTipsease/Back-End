const db = require('../data/dbConfig')

module.exports = {
    find,
    insert,
    findById,
    filtering,
    deleteUser
}

function find(){
    return db('users')
}

function findById(id){
    return db('users').where({ id }).first()
}

async function insert(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function filtering(usingThis) {
    return db('users').where(usingThis).first()
}

function deleteUser(id) {
    return db('users')
    .where({ id })
    .del();
}