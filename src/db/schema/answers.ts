import { pgTable, text, integer, serial } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { questions } from "./questions";
import { formSubmissions } from "./formSubmissions";
import { fieldOptions } from "./fieldOptions";

export const answers = pgTable("answers", {
  id: serial("id").primaryKey(),
  value: text("value"),
  questionId: integer("question_id"),
  formSubmissionId: integer("form_submission_id"),
  fieldOptionsId: integer("field_options_id"),
});

export const answersRelations = relations(answers, ({ one }) => ({
  question: one(questions, {
    fields: [answers.questionId],
    references: [questions.id],
  }),
  formSubmission: one(formSubmissions, {
    fields: [answers.formSubmissionId],
    references: [formSubmissions.id],
  }),
  fieldOption: one(fieldOptions, {
    fields: [answers.fieldOptionsId],
    references: [fieldOptions.id],
  }),
}));
