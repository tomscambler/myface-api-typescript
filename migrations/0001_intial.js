exports.up = function(knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id').notNullable();
            table.string('name', 255).notNullable();
            table.string('username', 255).notNullable();
            table.string('email', 255).notNullable();
            table.string('profileImageUrl', 512).notNullable();
            table.string('coverImageUrl', 512).notNullable();
        })
        .createTable('posts', function (table) {
            table.increments('id').notNullable();
            table.string('message', 512).notNullable();
            table.string('imageUrl', 512).notNullable();
            table.dateTime('createdAt').notNullable();
            table.integer('userId').notNullable();
            table.foreign('userId').references('users.id')
        })
        .createTable('interactions',function (table) {
            table.increments('id').notNullable();
            table.string('interactionType', 8).notNullable();
            table.dateTime('date').notNullable();
            table.integer('userId').notNullable();
            table.integer('postId').notNullable();
            table.foreign('userId').references('users.id');
            table.foreign('postId').references('posts.id');
            table.unique(['userId', 'postId', 'interactionType']);
        });
}

exports.down = function(knex) {
    return knex.schema
        .dropTable('interactions')
        .dropTable('posts')
        .dropTable('users');
}