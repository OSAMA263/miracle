import { checkValidation } from "@/_constants/confirm-validations";
import { applicationSchema } from "@/validation/applicationSchema";

export async function applicationAction(
  prevState: FormData,
  formData: FormData,
) {
  const result = await checkValidation({
    data: formData,
    schema: applicationSchema,
  });

  return result;
}