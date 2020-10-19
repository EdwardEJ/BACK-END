const router = require('express').Router();

const Projects = require('./projects-model');

router.post('/', (req, res) => {
  const project = req.body;
  const id = req.jwt.id;

  Projects.add(project, id)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id?', (req, res) => {
  const id = req.params.id;

  const ListofProjects = !id
    ? Projects.getAll()
    : Projects.getAll().where('user_id', '=', id);

  ListofProjects.then((project) => {
    res.status(200).json(project);
  }).catch((err) => {
    res.status(500).json({ message: err.message });
  });
});

module.exports = router;
