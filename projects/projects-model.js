const db = require('../data/db-config');

module.exports = {
  getAll,
  insert,
  remove,
  findById,
  updateProject,
};

function getAll() {
  return db('projects');
}

function insert(project, id) {
  project.user_id = id;
  return db('projects')
    .insert(project, 'id')
    .then((ids) => {
      const id = ids[0];

      return findById(id);
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateProject(id, changes) {
  return db('projects').where({ id }).update(changes);
}

function findById(id) {
  return db('projects').where({ id }).first();
}

function remove(id) {
  return db('projects').where({ id }).del();
}
