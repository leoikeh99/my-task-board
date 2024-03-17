"use client";
import "@/styles/formStyles.css";
import IconCover from "@/components/ui/IconCover";
import Image from "next/image";
import IconRadioGroup from "./IconRadioGroup";
import StatusRadioGroup from "./StatusRadioGroup";
import { SettingsContext } from "@/context/SettingsContext";
import { useContext, useEffect } from "react";
import { createTaskAction } from "@/app/action";
import { useFormState } from "react-dom";
import { classNames } from "@/utils";
import ActionButton from "@/components/forms/ActionButton";

type Props = {
  boardId: string;
};

const AddTask = ({ boardId }: Props) => {
  const [formState, wrappedCreateTaskAction] = useFormState(createTaskAction, {
    title: "",
    desc: "",
    icon: "ALARM_CLOCK",
    status: "TODO",
    errors: {
      title: undefined,
      desc: undefined,
      main: undefined,
    },
    success: false,
  });
  const { sidebar, closeSidebar } = useContext(SettingsContext);

  const show = sidebar && sidebar.type === "add task" ? true : false;

  useEffect(() => {
    if (formState.success) {
      closeSidebar();
    }
  }, [formState]);
  return (
    <div>
      <div className="flex justify-between items-center p-3 sticky top-0 left-0 w-full bg-white border-b-[1px] border-b-gray-300">
        <p className="font-semibold text-xl">Add new task</p>
        <button
          className="border border-gray-300 rounded-md"
          onClick={closeSidebar}
        >
          <IconCover size="sm" bg="transparent">
            <Image
              src="/assets/close_ring_duotone-1.svg"
              alt=""
              width={25}
              height={25}
            />
          </IconCover>
        </button>
      </div>
      <form aria-labelledby="add-new-task" action={wrappedCreateTaskAction}>
        <div className="p-5 pb-0 grid gap-2">
          <div className="field">
            <input
              type="text"
              name="boardId"
              value={boardId}
              readOnly
              className="hidden"
            />
            <label
              htmlFor="title"
              className={classNames(
                formState.errors?.title ? "label-error" : "label"
              )}
            >
              Task name
            </label>
            <input
              name="title"
              defaultValue={formState.title}
              placeholder="Enter task name"
              aria-invalid={formState.errors?.title ? "true" : "false"}
              aria-describedby="title-error"
              className={classNames(
                formState.errors?.title ? "border-red-500" : "border-gray-300",
                "input"
              )}
            />
            <p id="title-error" role="alert" className="text-red-500 text-sm">
              {formState.errors?.title}
            </p>
          </div>
          <div className="field">
            <label
              htmlFor="desc"
              className={classNames(
                formState.errors?.desc ? "label-error" : "label"
              )}
            >
              Task description
            </label>
            <textarea
              name="desc"
              defaultValue={formState.desc}
              placeholder="Enter a short task description"
              aria-invalid={formState.errors?.desc ? "true" : "false"}
              aria-describedby="desc-error"
              className={classNames(
                formState.errors?.desc ? "border-red-500" : "border-gray-300",
                "input h-44"
              )}
            />
            <p id="desc-error" role="alert" className="text-red-500 text-sm">
              {formState.errors?.desc}
            </p>
          </div>
          <div className="field">
            <label htmlFor="icon" className="label">
              Icons
            </label>
            <IconRadioGroup defaultValue={formState.icon} />
          </div>
          <div className="field">
            <label htmlFor="status" className="label">
              Status
            </label>
            <StatusRadioGroup defaultValue={formState.status} />
          </div>
        </div>
        <div className="flex justify-end mt-5 p-3 sticky bottom-0 left-0 bg-white border-t-[1px] border-t-gray-300">
          <ActionButton text="Cretae task" icon="/assets/done_round.svg" />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
