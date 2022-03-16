import NextAuth from "next-auth";
import { mail } from "../../../src/services/mail";
import { Adapter } from "next-auth/adapters";
import db from "../../../src/db";

const noop: any = () => {};

const DatabaseAdapter: Adapter = {
  // not used
  getUser: noop,
  getUserByAccount: noop,
  linkAccount: noop,
  // called, but not necessary
  async updateUser(user) {
    return user as any;
  },
  async createUser({ email }) {
    return db.insert({ email }).into("users");
  },
  async getUserByEmail(email) {
    const [user] = await db.select("*").from("users").where({ email: email });

    if (!user) {
      return null;
    }
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      emailVerified: user.created_at,
    };
  },
  async createSession({ sessionToken, userId, expires }) {
    const [session] = await db
      .insert({ token: sessionToken, user_id: userId, expires_at: expires })
      .into("sessions")
      .returning("*");

    if (!session) {
      throw new Error("Failed to create session");
    }
    return {
      id: "session-id",
      sessionToken: session.token,
      userId: session.user_id,
      expires: session.expires_at,
    };
  },
  async getSessionAndUser(sessionToken) {
    const [sessionAndUser] = await db
      .select("*")
      .from("sessions")
      .join("users", "users.id", "sessions.user_id")
      .where({ token: sessionToken });

    if (!sessionAndUser) {
      return null;
    }
    return {
      user: {
        id: sessionAndUser.user_id,
        email: sessionAndUser.email,
        emailVerified: sessionAndUser.created_at,
      },
      session: {
        id: "session-id",
        sessionToken: sessionAndUser.token,
        userId: sessionAndUser.user_id,
        expires: sessionAndUser.expires_at,
      },
    };
  },
  async updateSession({ sessionToken, expires }) {
    const [session] = await db("sessions")
      .update({ expires_at: expires })
      .where({ token: sessionToken })
      .returning("*");

    if (!session) {
      return null;
    }
    return {
      id: "session-id",
      sessionToken: session.token,
      userId: session.user_id,
      expires: session.expires_at,
    };
  },
  async deleteSession(sessionToken) {
    const [session] = await db
      .delete()
      .from("sessions")
      .where({ token: sessionToken })
      .returning("*");

    if (!session) {
      return null;
    }
    return {
      id: "session-id",
      sessionToken: session.token,
      userId: session.user_id,
      expires: session.expires_at,
    };
  },
  async createVerificationToken({ identifier, expires, token }) {
    const [loginToken] = await db
      .insert({ token, email: identifier, expires_at: expires })
      .into("login_tokens")
      .onConflict("email")
      .merge()
      .returning("*");

    if (loginToken) {
      return {
        identifier: loginToken.email,
        expires: loginToken.expires_at,
        token: loginToken.token,
      };
    }
  },
  async useVerificationToken({ identifier, token }) {
    const [loginToken] = await db
      .delete()
      .from("login_tokens")
      .where({ email: identifier, token: token })
      .returning("*");

    if (!loginToken) {
      return null;
    }

    return {
      identifier: loginToken.email,
      expires: loginToken.expires_at,
      token: loginToken.token,
    };
  },
};

export default NextAuth({
  adapter: DatabaseAdapter,
  session: {
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "database",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    {
      id: "email",
      type: "email",
      name: "EMail",
      server: "",
      // Length of time email links are valid for (1 hour)
      maxAge: 1 * 60 * 60,
      options: {},
      sendVerificationRequest: ({ identifier: email, url }) =>
        mail({ template: "magic link", to: email, data: { url } }),
    },
  ],
  pages: {
    error: "/auth/error",
    signIn: "/auth/login",
    verifyRequest: "/auth/verify-request",
  },
});
