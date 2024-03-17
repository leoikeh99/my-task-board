"use server";
import prisma from "@/lib/prisma";
import { wordCountValidator } from "@/utils";
import { $Enums } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type TaskFormState = {
  title: string;
  desc: string;
  icon: $Enums.Icon;
  status: $Enums.Status;
  errors: {
    title: string | undefined;
    desc: string | undefined;
    main: string | undefined;
  };
  success: boolean;
};

type DeleteTaskState = {
  errors: {
    main: string | undefined;
  };
  success: boolean;
};

export async function createTaskAction(
  previousState: TaskFormState,
  formData: FormData
) {
  const boardId = formData.get("boardId") as string;

  const data = {
    title: formData.get("title") as string,
    desc: formData.get("desc") as string,
    icon: formData.get("icon") as $Enums.Icon,
    status: formData.get("status") as $Enums.Status,
  };

  const schema = z.object({
    title: z
      .string()
      .min(1, { message: "Task name is required" })
      .max(30, {
        message: "Maximum 30 characters allowed",
      })
      .refine(wordCountValidator(1, 5), {
        message: "Task name should be 5 words or less",
      }),
    desc: z
      .string()
      .max(100, { message: "Maximum 100 characters allowed" })
      .refine(wordCountValidator(0, 25), {
        message: "Task description should be 25 words or less",
      })
      .optional(),
  });

  const validate = schema.safeParse(data);

  if (!validate.success) {
    const [titleErrors, descErrors] = [
      validate.error.flatten().fieldErrors.title,
      validate.error.flatten().fieldErrors.desc,
    ];
    return {
      ...data,
      errors: {
        ...previousState.errors,
        title: titleErrors ? titleErrors[0] : undefined,
        desc: descErrors ? descErrors[0] : undefined,
      },
      success: false,
    };
  }

  try {
    await prisma.task.create({
      data: {
        ...data,
        desc: data.desc ? data.desc : null,
        boardId,
      },
    });

    revalidatePath("/");
    return {
      ...data,
      errors: previousState.errors,
      success: true,
    };
  } catch (error) {
    return {
      ...data,
      errors: {
        ...previousState.errors,
        main: "Something went wrong, try again.",
      },
      success: false,
    };
  }
}

export async function editTaskAction(
  previousState: TaskFormState,
  formData: FormData
) {
  const taskId = formData.get("taskId") as string;

  const data = {
    title: formData.get("title") as string,
    desc: formData.get("desc") as string,
    icon: formData.get("icon") as $Enums.Icon,
    status: formData.get("status") as $Enums.Status,
  };

  const schema = z.object({
    title: z
      .string()
      .min(1, { message: "Task name is required" })
      .max(30, {
        message: "Maximum 30 characters allowed",
      })
      .refine(wordCountValidator(1, 5), {
        message: "Task name should be 5 words or less",
      }),
    desc: z
      .string()
      .max(100, { message: "Maximum 100 characters allowed" })
      .refine(wordCountValidator(0, 25), {
        message: "Task description should be 25 words or less",
      })
      .optional(),
  });

  const validate = schema.safeParse(data);

  if (!validate.success) {
    const [titleErrors, descErrors] = [
      validate.error.flatten().fieldErrors.title,
      validate.error.flatten().fieldErrors.desc,
    ];
    return {
      ...data,
      errors: {
        ...previousState.errors,
        title: titleErrors ? titleErrors[0] : undefined,
        desc: descErrors ? descErrors[0] : undefined,
      },
      success: false,
    };
  }

  try {
    await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        ...data,
        desc: data.desc ? data.desc : null,
      },
    });

    revalidatePath("/");
    return {
      ...data,
      errors: previousState.errors,
      success: true,
    };
  } catch (error) {
    return {
      ...data,
      errors: {
        ...previousState.errors,
        main: "Something went wrong, try again.",
      },
      success: false,
    };
  }
}

export async function deleteTaskAction(
  previousState: DeleteTaskState,
  formData: FormData
) {
  const taskId = formData.get("taskId") as string;

  try {
    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
    revalidatePath("/");
    return { errors: previousState.errors, success: true };
  } catch (error) {
    return {
      errors: { main: "Something went wrong, try again." },
      success: false,
    };
  }
}
