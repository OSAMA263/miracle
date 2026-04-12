import { ZodSchema } from "zod";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function checkValidation({
  data,
  schema,
}: {
  data: FormData;
  schema: ZodSchema;
}) {
  const formData = Object.fromEntries(data);
  const validation = schema.safeParse(formData);

  await delay(400);
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      values: formData,
    };
  }
  await delay(600);
  return { success: Date.now() };
}