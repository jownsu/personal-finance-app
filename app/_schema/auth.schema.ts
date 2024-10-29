/* PLUGINS */
import { z } from "zod";

export const login_schema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Required")
});

export type LoginSchema = z.infer<typeof login_schema>;

export const register_schema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email("Must be valid email address"),
    password: z.string().min(8, "Passwords must be at least 8 characters")
});

export type RegisterSchema = z.infer<typeof register_schema>;
