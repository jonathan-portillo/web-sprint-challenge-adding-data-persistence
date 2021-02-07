exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      id: 1,
      description: "get a reddit api",
      notes: "to submit our posts",
      completed: false,
      project_id: 1,
    },
    {
      id: 2,
      description: "test code",
      notes: "make sure it works",
      completed: false,
      project_id: 1,
    },
    {
      id: 3,
      description: "install dependacies",
      notes: "ensure that our project is properly set up",
      completed: false,
      project_id: 2,
    },
    {
      id: 4,
      description: "create seeds",
      notes: "to test on postman",
      completed: false,
      project_id: 2,
    },
    {
      id: 5,
      description: "refactor old code",
      notes: "make sure all code is dry",
      completed: false,
      project_id: 3,
    },
    {
      id: 6,
      description: "work on ux",
      notes: "make sure it looks good",
      completed: false,
      project_id: 3,
    },
  ]);
};
