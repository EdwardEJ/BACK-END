exports.seed = function (knex) {
  const projects = [
    {
      id: 1,
      project_name: 'testing funding',
      project_description: 'testing description',
      project_goal: 50000,
      user_id: 1,
    },
    {
      id: 2,
      project_name: 'testing1 funding',
      project_description: 'testing1 description',
      project_goal: 50000,
      user_id: 1,
    },
  ];
  return knex('projects').insert(projects);
};
