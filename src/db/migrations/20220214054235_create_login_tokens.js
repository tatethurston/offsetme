const updatedAtTrigger = require("./lib/updated-at-trigger");

const TABLE = "login_tokens";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.raw(
    `CREATE TABLE ${TABLE} (
       token varchar PRIMARY KEY,
       email varchar NOT NULL,
       expires_at timestamptz NOT NULL,
       created_at timestamptz NOT NULL DEFAULT NOW(),
       updated_at timestamptz NOT NULL DEFAULT NOW(), 

       UNIQUE(email)
    );

    ${updatedAtTrigger(TABLE)}`
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.raw(`DROP TABLE IF EXISTS ${TABLE};`);
};
