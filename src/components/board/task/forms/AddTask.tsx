"use client";
import "@/styles/formStyles.css";
import IconCover from "@/components/ui/IconCover";
import Image from "next/image";
import IconRadioGroup from "./IconRadioGroup";
import StatusRadioGroup from "./StatusRadioGroup";
import { SettingsContext } from "@/context/SettingsContext";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect } from "react";
import { createTaskAction } from "@/app/action";
import { useFormState } from "react-dom";
import { classNames } from "@/utils";
import ActionButton from "./ActionButton";

type Props = {
  boardId: string;
};

const AddTask = ({ boardId }: Props) => {
  const [formState, wrappedCreateTaskAction] = useFormState(createTaskAction, {
    title: "",
    desc: "",
    icon: "ALARM_CLOCK",
    status: "IN_PROGRESS",
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
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeSidebar}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30"></div>
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed top-0 right-0 h-dvh w-[min(97%,650px)] flex flex-col justify-center">
            <Dialog.Panel className="relative max-h-[97%] bg-white mr-3 flex-1 rounded-lg overflow-y-auto">
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
              <form
                aria-labelledby="add-new-task"
                className="form"
                action={wrappedCreateTaskAction}
              >
                <div className="p-5">
                  <div className="field">
                    <input
                      type="text"
                      name="boardId"
                      value={boardId}
                      readOnly
                      className="hidden"
                    />
                    <label htmlFor="title" className="label">
                      Task name
                    </label>
                    <input
                      name="title"
                      defaultValue={formState.title}
                      placeholder="Enter task name"
                      className={classNames(
                        formState.errors?.title
                          ? "border-red-500"
                          : "border-gray-300",
                        "input"
                      )}
                    />
                    <p className="text-red-500 text-sm">
                      {formState.errors?.title}
                    </p>
                  </div>
                  <div className="field">
                    <label htmlFor="desc" className="label">
                      Task description
                    </label>
                    <textarea
                      name="desc"
                      defaultValue={formState.desc}
                      placeholder="Enter a short task description"
                      className={classNames(
                        formState.errors?.desc
                          ? "border-red-500"
                          : "border-gray-300",
                        "input h-44"
                      )}
                    />
                    <p className="text-red-500 text-sm">
                      {formState.errors?.desc}
                    </p>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="label">
                      Icons
                    </label>
                    <IconRadioGroup />
                  </div>
                  <div className="field">
                    <label htmlFor="" className="label">
                      Status
                    </label>
                    <StatusRadioGroup />
                  </div>
                </div>
                <div className="flex justify-end mt-5 p-3 sticky bottom-0 left-0 bg-white border-t-[1px] border-t-gray-300">
                  <ActionButton
                    text="Cretae task"
                    icon="/assets/done_round.svg"
                  />
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default AddTask;
