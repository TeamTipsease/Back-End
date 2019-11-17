const router = require('express').Router();

const Home = require('./homeModel.js');

router.get('/', (req, res) => {
    Home.getWorker()
    .then(home => {
        res.json(home)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: `error retrieving users`})
    });
})

module.exports = router;