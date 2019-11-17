const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

const auth = require('../auth/authRouter.js')
const home = require('../home/homeRouter.js')
const worker = require('../worker/workerRouter.js')

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('./api/auth/', auth)
server.use('./api/home/', home)
// server.use('./api/worker', worker)

server.get('/', (req,res) => {
    res.send('Hello!')
})

module.exports = server;

