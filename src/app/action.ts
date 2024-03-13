"use server";

export async function createTaskAction(formData: FormData) {
  const name = formData.get("name");
  console.log(formData);
}
