exports.seed = function (knex) {
  return knex("projects").insert([
    {
      id: 1,
      name: "subreddit predictor",
      description: "predict subreddits",
      completed: false,
    },
    {
      id: 2,
      name: "build an api",
      description: "work on an api",
      description: "we want to get some practice building apis",
      completed: false,
    },
    {
      id: 3,
      name: "work on porfolio",
      description: "we need a portfolio",
      description: "we want a job!",
      completed: false,
    },
  ]);
};
