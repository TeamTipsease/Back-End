const db = require('../data/dbConfig'); 

function getWorkers() {
    return db('service_workers');
}

async function findByWorkerId(id){
    const result = await db.raw(`SELECT * FROM service_workers WHERE id = ${id}`)
    console.log(result)
    return result[0]
}

function insertWorker(worker) {
    return db('service_workers')
    .insert(worker)
    .then(id => {
        console.log(id)
        return findByWorkerId(id[0]);
        // return id;
    });
 }

function deleteWorker(id) {
    return db('service_workers')
    .where({ id })
    .del();
}

function updateWorker(update, id) {
    return db('service_workers')
    .where({ id })
    .update(update)
    .then((ids) => ids);
 }


module.exports = {
    getWorkers,
    findByWorkerId,
    insertWorker,
    deleteWorker,
    updateWorker
}