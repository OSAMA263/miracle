import { checkValidation } from "@/_constants/confirm-validations";
import { contactSchema } from "@/validation/contactSchema";

export async function contactAction(
  prevState: FormData,
  formData: FormData,
) {
  const result = await checkValidation({
    data: formData,
    schema: contactSchema,
  });

  return result;
}