"use client";
import { SettingsContext } from "@/context/SettingsContext";
import type { Board } from "@prisma/client";
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
  const { closeDialog } = useContext(SettingsContext);
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

  useEffect(() => {
    if (formState.success) {
      closeDialog();
    }
    if (!formState.success && formState.errors.main) {
      toast.error(formState.errors.main);
    }
  }, [formState, closeDialog]);

  return (
    <Fragment>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-medium leading-6 text-gray-900">
          Edit Board
        </h3>
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
        <input readOnly type="hidden" name="id" defaultValue={board.id} />
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
            Board description
          </label>
          <textarea
            name="desc"
            defaultValue={formState.desc}
            placeholder="Enter a short description"
            aria-invalid={formState.errors?.desc ? "true" : "false"}
            aria-describedby="desc-error"
            className={classNames(
              formState.errors?.desc ? "border-red-500" : "border-gray-300",
              "input h-32"
            )}
          />
          <p id="desc-error" role="alert" className="text-red-500 text-sm">
            {formState.errors?.desc}
          </p>
        </div>
        <ActionButton
          text="Save"
          icon="/assets/Done_round.svg"
          bg="bg-[#3662E3]"
          action={wrappedEditBoardAction}
        />
      </form>{" "}
    </Fragment>
  );
};

export default EditBoard;
