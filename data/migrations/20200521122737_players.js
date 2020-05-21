
exports.up = function (knex) {
    return knex.schema.createTable("players", tbl => {
      tbl.increments();
  
      tbl.string("name", 255).notNullable();
      tbl.string("team", 255).notNullable();
      tbl.string("position", 255).notNullable();
    });
  };
  
  exports.down = function (knex) {
    // undo the operation in up
    return knex.schema.dropTableIfExists("players");
  };
  