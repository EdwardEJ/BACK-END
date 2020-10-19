const db = require('../data/db-config');

module.exports = {
  findById,
  findBy,
  add,
};

function findById(id) {
  return db('users').where({ id }).first();
}

function findBy(filter) {
  return db('users')
    .select('id', 'username', 'email', 'password')
    .where(filter);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then((ids) => {
      const id = ids[0];

      return findById(id);
    })
    .catch((err) => {
      console.log(err);
    });
}
