exports.up = function (knex) {
  return knex.schema
    .createTable('users', (tbl) => {
      tbl.increments();

      tbl.string('username').notNullable().unique();
      tbl.string('email').notNullable().unique();
      tbl.string('password').notNullable();

      tbl.jsonb('roles').nullable();
    })

    .createTable('projects', (tbl) => {
      tbl.increments();

      tbl.string('project_name', 128).notNullable().index();
      tbl.text('project_description').notNullable();
      tbl.integer('project_goal').notNullable();

      tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE');
    })

    .createTable('funders', (tbl) => {
      tbl.increments();

      tbl.string('username').notNullable();
    })

    .createTable('project_funders', (tbl) => {
      tbl.increments();

      // tbl.datetime('funded_on', { precision: 6 }).defaultTo(knex.fn.now(6));
      tbl.decimal('amount_funded').notNullable();

      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .integer('funder_id')
        .unsigned()
        .references('id')
        .inTable('funders')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_funders')
    .dropTableIfExists('funders')
    .dropTableIfExists('projects')
    .dropTableIfExists('users');
};
