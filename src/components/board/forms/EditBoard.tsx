"use client";
import { SettingsContext } from "@/context/SettingsContext";
import { Dialog, Transition } from "@headlessui/react";
import { Board } from "@prisma/client";
import { Fragment, useContext, useEffect } from "react";
import "@/styles/formStyles.css";
import ActionButton from "@/components/forms/ActionButton";
import { useFormState } from "react-dom";
import { editBoardAction } from "@/app/action";
import IconCover from "@/components/ui/IconCover";
import Image from "next/image";
import { classNames } from "@/utils";
import { toast } from "react-toastify";

type Props = {
  board: Board;
};

const EditBoard = ({ board }: Props) => {
  const { dialog, closeDialog } = useContext(SettingsContext);
  const [formState, wrappedEditBoardAction] = useFormState(editBoardAction, {
    title: board.title || "",
    desc: board.desc || "",
    errors: {
      title: undefined,
      desc: undefined,
      main: undefined,
    },
    success: false,
  });

  const show = dialog === "edit board" ? true : false;

  useEffect(() => {
    if (formState.success) {
      closeDialog();
    }
    if (!formState.success && formState.errors.main) {
      toast.error(formState.errors.main);
    }
  }, [formState]);

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    Edit Board
                  </Dialog.Title>
                  <button
                    className="border border-gray-300 rounded-md"
                    onClick={closeDialog}
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
                <form className="form">
                  <input
                    readOnly
                    type="hidden"
                    name="id"
                    defaultValue={board.id}
                  />
                  <div className="field">
                    <label
                      htmlFor="title"
                      className={classNames(
                        formState.errors?.title ? "label-error" : "label"
                      )}
                    >
                      Board name
                    </label>
                    <input
                      name="title"
                      defaultValue={formState.title}
                      placeholder="Enter board name"
                      aria-invalid={formState.errors?.title ? "true" : "false"}
                      aria-describedby="title-error"
                      className={classNames(
                        formState.errors?.title
                          ? "border-red-500"
                          : "border-gray-300",
                        "input"
                      )}
                    />
                    <p
                      id="title-error"
                      role="alert"
                      className="text-red-500 text-sm"
                    >
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
                      Board description
                    </label>
                    <textarea
                      name="desc"
                      defaultValue={formState.desc}
                      placeholder="Enter a short description"
                      aria-invalid={formState.errors?.desc ? "true" : "false"}
                      aria-describedby="desc-error"
                      className={classNames(
                        formState.errors?.desc
                          ? "border-red-500"
                          : "border-gray-300",
                        "input h-32"
                      )}
                    />
                    <p
                      id="desc-error"
                      role="alert"
                      className="text-red-500 text-sm"
                    >
                      {formState.errors?.desc}
                    </p>
                  </div>
                  <ActionButton
                    text="Save"
                    icon="/assets/done_round.svg"
                    bg="bg-[#3662E3]"
                    action={wrappedEditBoardAction}
                  />
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditBoard;
