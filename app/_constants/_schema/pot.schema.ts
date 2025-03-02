import { z } from "zod";
import { Color } from "@/app/_constants/entities";

export const pot_form_schema = z.object({
    id: z.number().optional(),
	name: z.string({ message: "Please enter pot name" }).min(1, "Please enter pot name"),
	target: z.preprocess(
        (value) => parseInt(z.string().parse(value)),
        z.number({ message: "Please enter target" }).min(0, "Please enter target")
    ),
	color: z.nativeEnum(Color, { message: "Please select color tag" } ),
});

export type PotForm = z.infer<typeof pot_form_schema>;

export const add_withdraw_pot_schema = z.object({
    id: z.number().optional(),
	amount: z.preprocess(
        (value) => parseInt(z.string().parse(value)),
        z.number({ message: "Please enter amount" }).min(0, "Please enter amount")
    ),
});

export type AddWithdrawPotSchema = z.infer<typeof add_withdraw_pot_schema>;