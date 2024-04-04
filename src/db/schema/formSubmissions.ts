import { pgTable, integer, serial } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { forms } from "./forms";
import { answers } from "./answers";

export const formSubmissions = pgTable("form_submissions", {
  id: serial("id").primaryKey(),
  formId: integer("form_id"),
});

export const formSubmissionsRelations = relations(
  formSubmissions,
  ({ one, many }) => ({
    form: one(forms, {
      fields: [formSubmissions.formId],
      references: [forms.id],
    }),
    answers: many(answers),
  }),
);
