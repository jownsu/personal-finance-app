import { z } from "zod";
import { ColorOption } from "../entities";

export const pot_form_schema = z.object({
    id: z.number().optional(),
	name: z.string({ message: "Please enter pot name" }).min(1, "Please enter pot name"),
	target: z.preprocess(
        (value) => parseInt(z.string().parse(value)),
        z.number({ message: "Please enter target" }).min(0, "Please enter target")
    ),
	color: z.nativeEnum(ColorOption, { message: "Please select color tag" } ),
});

export type PotForm = z.infer<typeof pot_form_schema>;