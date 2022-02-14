import { knex, Knex } from "knex";
import users, { usersInitializer } from "./types/users";
import sessions, { sessionsInitializer } from "./types/sessions";
import login_tokens, { login_tokensInitializer } from "./types/login_tokens";
import config from "./knexfile";

type WithoutAutomaticFields<T> = Omit<T, "id" | "created_at" | "updated_at">;
type WithoutTimestamps<T> = Omit<T, "created_at" | "updated_at">;

declare module "knex/types/tables" {
  interface Tables {
    users: Knex.CompositeTableType<
      users,
      WithoutAutomaticFields<usersInitializer>,
      WithoutAutomaticFields<usersInitializer>
    >;
    sessions: Knex.CompositeTableType<
      sessions,
      WithoutTimestamps<sessionsInitializer>,
      WithoutTimestamps<sessionsInitializer>
    >;
    login_tokens: Knex.CompositeTableType<
      login_tokens,
      WithoutTimestamps<login_tokensInitializer>,
      WithoutTimestamps<login_tokensInitializer>
    >;
  }
}

const db = knex(config);

export default db;
