      exports.up = function(knex) {
        return knex.schema.createTable('channels', function(table) {
          table.increments();
          table.string('name').notNullable();
          table.integer('creator_id').unsigned().notNullable();
          table.foreign('creator_id').references('users.id');
          table.json('agents').notNullable();
          table.string('keys').notNullable();
          // ... other columns ...
        });
      };

      exports.down = function(knex) {
        return knex.schema.dropTable('channels');
      };