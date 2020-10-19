const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const usersRouter = require('../auth/auth-router');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth/register', usersRouter);

server.get('/', (req, res) => {
  res.status(200).json({ API: 'running' });
});

module.exports = server;
