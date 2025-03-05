import { z } from "zod";
import { BudgetCategory, Color } from "@/app/_constants/entities";

export const budget_form_schema = z.object({
    id: z.number().optional(),
	budget_category: z.nativeEnum(BudgetCategory),
	maximum_spending: z.preprocess(
        (value) => (typeof value === "string" ? parseInt(value) : value),
        z.number({ message: "Please enter maximum spending" }).min(0, "Please enter maximum spending")
    ),
	color_tag: z.nativeEnum(Color, { message: "Please select color tag" } ),
});

export type BudgetForm = z.infer<typeof budget_form_schema>;