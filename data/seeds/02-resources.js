exports.seed = function (knex) {
  return knex("resources").insert([
    {
      id: 1,
      name: "computer",
      description: "main resources duh!",
      project_id: 1,
    },
    {
      id: 2,
      name: "github",
      description: "lets us use repositories",
      project_id: 1,
    },
    {
      id: 3,
      name: "sqlite",
      description: "lets us work on databases",
      project_id: 2,
    },
    { id: 4, name: "postman", description: "create requests", project_id: 2 },
    {
      id: 5,
      name: "vercel",
      description: "lets us host our portfolio",
      project_id: 3,
    },
    {
      id: 6,
      name: "previous projects",
      description: "to display on our portfolio",
      project_id: 3,
    },
  ]);
};
