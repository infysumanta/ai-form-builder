import type { Config } from "drizzle-kit";

const connectionString =
  process.env.DATABASE_URL ||
  "postgres://postgres:postgres@localhost:5432/ai-form-builder";

export default {
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: connectionString,
  },
} satisfies Config;
