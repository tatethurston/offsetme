/** @type import('knex').Knex.Config */
module.exports = {
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    // https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-in-node-js
    ssl: process.env.NODE_ENV === "production" && {
      rejectUnauthorized: false,
    },
  },
  pool: { min: 2, max: 18 },
};
