exports.up = function(knex) {
    return knex.schema
    .createTable('users', table => {
        table.increments();
        table.string('username', 164)
            .notNullable()
            .unique();
        table.string('password', 164)
            .notNullable();
    })
        

    .createTable('service_worker', tbl => {
        tbl.increments();
        tbl.string('name', 255)
        .notNullable()
        .unique();
        // tbl.image('thumbnail') - Don't quite know how to make an image here
        // .notNullable()
        // .unique();
        tbl.string('info', 500)
        .notNullable()
        tbl.date('work_length') 
        tbl.string('tagline', 500)
        .notNullable()
        tbl.float('tip')
        .notNullable()
        tbl.integer('worker_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('home')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('service_worker')
    .dropTableIfExists('users')
};
