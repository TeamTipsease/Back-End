const db = require('../data/dbConfig'); 

function getWorkers() {
    return db('service_workers');
}

function findByWorkerId(id){
    return db('service_workers').where({ id }).first()
}

function insertWorker(worker) {
    return db('service_workers')
    .insert(worker, 'id')
    .then(id => {
        return findByWorkerId(id[0]);
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