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

router.get('/:id', (req,res) => {
    const {id } = req.params
    Workers.findByWorkerId(id)
      .then(worker => {
        if(worker){
          res.status(200).json(worker);
        }
        else{
          res.status(404).json({message: `error retrieving the worker.`})
        }
        })
});

router.post('/:id', (req, res) => {
    console.log(req.body)
    // const ObjToPass = { 
    //     user_id : req.params.id
    // }
    req.body.user_id = req.params.id 
    console.log(req.body)
    Workers.insertWorker(req.body)
    .then(event => {
        res.status(201).json({...event, message: "worker posted"})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({...err, message: "worker failed to post"})
    })
});

router.delete('/:id', (req, res) => {
    Workers.deleteWorker(req.params.id)
    .then(event => {
        if (!event) {
            res.status(404).json({message: " No event exists by that ID!"})
        } else {
            res.status(200).json({message: "deleted"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
    Workers.updateWorker(req.body, req.params.id)
    .then(updateW => {
        if (!updateW) {
            res.status(404).json({message: "No event exists by that ID!"})
        } else {
            Workers.findByWorkerId(req.params.id)
            .then(uWorker => {
                res.status(201).json(uWorker)
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})



module.exports = router