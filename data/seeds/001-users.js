exports.seed = function (knex) {
  const users = [
    {
      username: 'test',
      email: 'test@email.com',
      password: '$2a$08$9Oq.DlkRcTx9utTLpYBvb.PjMnhrNxiafwGtv3/UWnOjdMrf6Utu6',
      roles: ['funderaiser, funder'],
    },
  ];
  return knex('users').insert(users);
};
