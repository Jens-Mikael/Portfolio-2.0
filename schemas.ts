import { z } from "zod";

export const FormSchema = z.object({
  name: z.string({ required_error: "Please tell me what's your name." }),
  email: z.string().email({ message: "Invalid email address" }),
  text: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

export type FormValues = z.infer<typeof FormSchema>;
