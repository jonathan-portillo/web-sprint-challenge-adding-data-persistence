exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 128).notNullable();
      tbl.string("description", 500);
      tbl.boolean("completed").defaultTo(false).notNullable();
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("id");
      tbl.string("description", 500).notNullable();
      tbl.string("notes", 500);
      tbl.boolean("completed").defaultTo(false).notNullable();
      tbl
        .integer("project_id")
        .references("id")
        .inTable("projects")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("resources", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 128).notNullable().unique();
      tbl.string("description", 500);
      tbl
        .integer("project_id")
        .references("id")
        .inTable("projects")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
