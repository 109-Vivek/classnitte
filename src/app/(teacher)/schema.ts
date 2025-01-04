import { z } from "zod";

export const LoginFormSchema = z.object({
	email: z.string().email("Please enter a valid email"),
	password: z.string().min(1, "Please enter a password"),
});
