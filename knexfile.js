module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefualt: true,
    connection: {
      filename: "./data/projects.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/migrations",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
};
