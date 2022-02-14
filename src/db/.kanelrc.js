const { join } = require("path");

/** @type {import('kanel')} */
module.exports = {
  connection: process.env.DATABASE_URL,
  preDeleteModelFolder: true,
  schemas: [
    {
      name: "public",
      ignore: ["knex_migrations", "knex_migrations_lock"],
      modelFolder: join(__dirname, "types"),
    },
  ],
};
