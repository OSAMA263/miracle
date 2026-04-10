import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z.string().min(4, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(11, "Invalid phone number").regex(/^\d+$/, "Must be numbers only"),
  gender: z
    .string("Please select a gender")
    .min(1, "Please select a gender"),
  role: z.string().min(1, "You must select an option"),
  cv: z
    .instanceof(File, { message: "Please upload a file" })
    .refine((file) => file.type === "application/pdf", {
      message: "CV must be PDF file",
    }),
});
