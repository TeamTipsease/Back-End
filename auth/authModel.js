const db = require('../data/dbConfig')

module.exports = {
    get,
    insert,
    findById,
    filtering
}
function findById(id){
    return db('auth').where({ id }).first()
}

function get(){
    return db('auth')
}


async function insert(user) {
    const [id] = await db('auth').insert(user);

    return findById(id);
}

function filtering(usingThis) {
    return db('auth').where(usingThis).first()
}