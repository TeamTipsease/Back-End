
exports.up = function(knex) {
  return knex.schema.createTable('service_workers', tbl => {
      tbl.increments();
      tbl.integer('user_id')
        .unsigned().notNullable()
        .references('users.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      tbl.varchar('name', 50).notNullable();
      tbl.integer('month_at_job').notNullable();
      tbl.varchar('info', 255).notNullable();
      tbl.varchar('tagline', 100).notNullable();
      tip.integer('tip')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('serviceworkers')
};
