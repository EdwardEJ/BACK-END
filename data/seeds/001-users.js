exports.seed = function (knex) {
  const users = [
    {
      id: 1,
      username: 'test',
      email: 'test@email.com',
      password: 'password',
      roles: ['funderaiser, funder'],
    },
  ];
  return knex('users').insert(users);
};
