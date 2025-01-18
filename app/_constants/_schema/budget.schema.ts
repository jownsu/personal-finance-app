import { z } from "zod";
import { BudgetOption, ColorOption } from "../entities";

export const budget_form_schema = z.object({
	budget_category: z.nativeEnum(BudgetOption),
	maximum_spending: z.preprocess(
        (value) => parseInt(z.string().parse(value)),
        z.number({ message: "Please enter maximum spending" }).min(0, "Please enter maximum spending")
    ),
	color_tag: z.nativeEnum(ColorOption, { message: "Please select color tag" } ),
});

export type BudgetForm = z.infer<typeof budget_form_schema>;