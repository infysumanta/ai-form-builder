import { pgTable, text, integer, serial } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { questions } from "./questions";

export const fieldOptions = pgTable("field_options", {
  id: serial("id").primaryKey(),
  text: text("text"),
  value: text("value"),
  questionId: integer("question_id"),
});

export const fieldOptionsRelations = relations(fieldOptions, ({ one }) => ({
  question: one(questions, {
    fields: [fieldOptions.questionId],
    references: [questions.id],
  }),
}));
