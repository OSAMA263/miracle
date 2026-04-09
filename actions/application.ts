import { applicationSchema } from "@/validation/applicationSchema";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function applicationAction(
  prevState: FormData,
  formData: FormData,
) {
  const data = Object.fromEntries(formData);
  const validation = applicationSchema.safeParse(data);

  await delay(400);
  // if the validation failed display the errors to the user
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      values: data,
    };
  }
  await delay(600);

  // if the data is correct and no errors show an success alret
  console.log(data);
}
