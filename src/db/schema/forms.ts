import { relations } from "drizzle-orm";
import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";
import { questions } from "./questions";
import { users } from "./users";
import { formSubmissions } from "./formSubmissions";

export const forms = pgTable("forms", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  userId: text("user_id"),
  published: boolean("published"),
});

export const formsRelations = relations(forms, ({ many, one }) => ({
  questions: many(questions),
  user: one(users, {
    fields: [forms.userId],
    references: [users.id],
  }),
  submissions: many(formSubmissions),
}));
