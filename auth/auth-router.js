const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const config = require('../api/config');

const Users = require('../users/users-model');
const { isValid } = require('../users/user-service');

router.post('/register', (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    // hash the password
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    // save the user to the database
    Users.add(credentials)
      .then((user) => {
        res.status(201).json({ data: user });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        'Please provide username, email, and password and the password shoud be alphanumeric',
    });
  }
});

router.post('/login', (req, res) => {
  // implement login
  const { username, email, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({ username: username, email: email })
      .then(([user]) => {
        // compare the password the hash stored in the database
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = getJwt(user);

          res
            .status(200)
            .json({ message: 'Welcome to Virtual Reality Funding', token });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        'Please provide username, email, and password and the password shoud be alphanumeric',
    });
  }
});

function getJwt(user) {
  const payload = {
    username: user.username,
    role: user.role,
    id: user.id,
  };

  const jwtOtions = {
    expiresIn: '8h',
  };

  return jwt.sign(payload, config.jwtSecret, jwtOtions);
}

module.exports = router;
