import { error } from "@sveltejs/kit";

export const actions = {
  default: async ({ locals, request }) => {
    const formData = await request.formData();
    const file = formData.get("file")! as File;
    const result = await locals.R2.put(file.name, file);
    console.log(result);
    if (!result) {
      error(500, { message: "Failed to upload file." });
    }
  },
};
