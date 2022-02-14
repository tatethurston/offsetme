const updatedAtTrigger = require("./lib/updated-at-trigger");

const TABLE = "sessions";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.raw(
    `CREATE TABLE ${TABLE} (
       id varchar PRIMARY KEY,
       user_id bigserial NOT NULL,
       expires_at timestamptz NOT NULL,
       created_at timestamptz NOT NULL DEFAULT NOW(),
       updated_at timestamptz NOT NULL DEFAULT NOW(),

       UNIQUE(user_id),
       CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
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
