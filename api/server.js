const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()
const morgan = require('morgan')

const auth = require('../auth/authRouter.js')
const worker = require('../worker/workerRouter.js')
const authenticate = require('../auth/authMiddleware.js')

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('combined'));

server.use('/api/auth', auth)
server.use('/api/worker', authenticate, worker)

server.get('/', (req,res) => {
    res.send('Hello!')
})

// server.listen(process.env.PORT);

module.exports = server;

