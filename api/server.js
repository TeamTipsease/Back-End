const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

server.use(helmet());
server.use(cors());
server.use(express.json());

module.exports = server;

