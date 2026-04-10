import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(11, "Invalid phone number")
    .regex(/^\d+$/, "Must be numbers only"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});
