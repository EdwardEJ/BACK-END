const db = require('../data/db-config');

module.exports = {
  getAll,
  add,
};

function getAll() {
  return db('projects');
}

function add(project, id) {
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