exports.up = function (knex) {
  return knex.schema
    .createTable('users', (tbl) => {
      tbl.increments();

      tbl.string('name').notNullable();
      tbl.string('email').notNullable().unique();
      tbl.string('password').notNullable();
    })

    .createTable('projects', (tbl) => {
      tbl.increments();

      tbl.string('project_name', 128).notNullable();
      tbl.text('project_description').notNullable();
      tbl.string('project_name').notNullable();
      tbl.integer('project_goal').notNullable();

      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('uesrs')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects').dropTableIfExists('users');
};
