import { InferSelectModel } from "drizzle-orm";
import { fieldOptions, forms, questions } from "@/db/schema";

export type FormSelectModel = InferSelectModel<typeof forms>;
export type QuestionSelectModel = InferSelectModel<typeof questions>;
export type FieldOptionSelectModel = InferSelectModel<typeof fieldOptions>;

type NavLink = {
  title: string;
  href: string;
  disabled?: boolean;
};

type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);
