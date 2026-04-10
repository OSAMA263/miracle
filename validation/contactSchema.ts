import { z } from "zod";

export const contactSchema = z.object({
  name: z.string("Name is required"),
  phone: z.string().min(11, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  message: z.string("Message is required"),
});
