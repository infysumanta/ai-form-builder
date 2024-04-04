import { pgTable, text, integer, serial, pgEnum } from "drizzle-orm/pg-core";
import { forms } from "./forms";
import { relations } from "drizzle-orm";
import { fieldOptions } from "./fieldOptions";
import { answers } from "./answers";

export const formElements = pgEnum("field_type", [
  "RadioGroup",
  "Select",
  "Input",
  "Textarea",
  "Switch",
]);

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  text: text("text"),
  fieldType: formElements("field_type"),
  formId: integer("form_id"),
});

export const questionsRelations = relations(questions, ({ one, many }) => ({
  form: one(forms, {
    fields: [questions.formId],
    references: [forms.id],
  }),
  fieldOptions: many(fieldOptions),
  answers: many(answers),
}));
