const router = require('express').Router();

const Projects = require('./projects-model');

router.post('/', (req, res) => {
  const project = req.body;
  const id = req.jwt.id;

  Projects.insert(project, id)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/user/:id', (req, res) => {
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

router.get('/', (req, res) => {
  Projects.getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Projects.findById(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.findById(id)
    .then((project) => {
      if (project) {
        Projects.updateProject(id, changes).then((updatedProject) => {
          res.json({ updatedProject });
        });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find project with given id' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to update board' });
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Projects.remove(id)
    .then((project) => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).json({ message: 'Project does not exist' });
    });
});

module.exports = router;
