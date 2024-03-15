"use server";
import prisma from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type CreateTaskFormState = {
  title: string;
  desc: string;
  icon: $Enums.Icon;
  status: $Enums.Status;
  errors: {
    title: string | undefined;
    desc: string | undefined;
    main: string | undefined;
  };
};

export async function createTaskAction(
  previousState: CreateTaskFormState,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  const icon = formData.get("icon") as $Enums.Icon;
  const status = formData.get("status") as $Enums.Status;
  const boardId = formData.get("boardId") as string;

  const data = z.object({
    title: z.string().min(1, { message: "Task name is required" }),
    desc: z.string().min(1, { message: "Task description is required" }),
  });

  const validate = data.safeParse({
    title,
    desc,
    icon,
    status,
  });

  if (!validate.success) {
    const [titleErrors, descErrors] = [
      validate.error.flatten().fieldErrors.title,
      validate.error.flatten().fieldErrors.desc,
    ];
    return {
      ...previousState,
      title,
      desc,
      icon,
      status,
      errors: {
        title: titleErrors ? titleErrors[0] : undefined,
        desc: descErrors ? descErrors[0] : undefined,
        main: undefined,
      },
      success: false,
    };
  }

  try {
    const createTask = await prisma.task.create({
      data: {
        title,
        desc,
        icon,
        status,
        boardId,
      },
    });

    revalidatePath("/");
    return {
      ...previousState,
      title: createTask.title,
      desc: createTask.desc,
      icon: createTask.icon,
      status: createTask.status,
      errors: {
        title: undefined,
        desc: undefined,
        main: undefined,
      },
      success: true,
    };
  } catch (error) {
    return {
      ...previousState,
      errors: {
        title: undefined,
        desc: undefined,
        main: "Something went wrong, try again.",
      },
      success: false,
    };
  }
}
