import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString =
  process.env.DATABASE_URL ||
  "postgres://postgres:postgres@localhost:5432/ai-form-builder";

const migrationClient = postgres(connectionString, { max: 1 });
const db = drizzle(migrationClient);

(async () => {
  try {
    await migrate(db, {
      migrationsFolder: "./src/db/migrations",
    });
    console.log("Migration successful");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
