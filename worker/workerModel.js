const db = require('../data/dbConfig'); 

function getWorkers() {
    return db('service_workers');
}

function findByWorkerId(user_id){
    return db('service_workers').where({ user_id }).first()
}

function insertWorker(worker) {
    return db('service_workers')
    .insert(worker, 'id')
    .then(user_id => {
        return findByWorkerId(user_id[0]);
    });
 }

function deleteWorker(user_id) {
    return db('service_workers')
    .where({ user_id })
    .del();
}

function updateWorker(update, user_id) {
    return db('service_workers')
    .where({ user_id })
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