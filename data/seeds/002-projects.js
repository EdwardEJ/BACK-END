exports.seed = function (knex) {
  const projects = [
    {
      id: 1,
      project_name: 'testing funding',
      project_description: 'testing description',
      project_goal: 50000,
      user_id: ['funderaiser, funder'],
    },
    {
      id: 2,
      project_name: 'testing1 funding',
      project_description: 'testing1 description',
      project_goal: 50000,
      user_id: ['funderaiser, funder'],
    },
  ];
  return knex('projects').insert(projects);
};
