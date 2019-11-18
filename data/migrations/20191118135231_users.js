
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments()
      tbl.varchar('username', 50).notNullable();
      tbl.varchar('password', 50).notNullable();
      tbl.boolean('isServiceWorker').defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
