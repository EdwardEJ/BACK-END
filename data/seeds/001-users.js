exports.seed = function (knex) {
  const users = [
    {
      username: 'test',
      email: 'test@email.com',
      password: 'password',
      roles: ['funderaiser, funder'],
    },
  ];
  return knex('users').insert(users);
};
