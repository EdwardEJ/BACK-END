const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const server = express();

//routers
const authenticate = require('../auth/authenticate-middleware');
const usersRouter = require('../auth/auth-router');
const projectsRouter = require('../projects/projects-router');

//middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//endpoints
server.use('/api/projects', authenticate, projectsRouter);
server.use('/api/auth', usersRouter);

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/test.html'));
});

module.exports = server;
