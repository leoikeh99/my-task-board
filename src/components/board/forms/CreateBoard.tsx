"use client";
import { createBoardAction } from "@/app/action";
import ActionButton from "@/components/forms/ActionButton";
import { classNames } from "@/utils";
import { useFormState } from "react-dom";
import "@/styles/formStyles.css";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CreateBoard = () => {
  const [formState, wrappedCreateBoardAction] = useFormState(
    createBoardAction,
    {
      title: "",
      desc: "",
      errors: {
        title: undefined,
        desc: undefined,
        main: undefined,
      },
      success: false,
    }
  );

  useEffect(() => {
    if (!formState.success && formState.errors.main) {
      toast.error(formState.errors.main);
    }
  }, [formState]);

  return (
    <div>
      <h1 className="text-[1.5rem] md:text-[2rem] mb-5">Create a Board</h1>
      <form className="form">
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
          text="Create Board"
          icon="/assets/Done_round.svg"
          bg="bg-[#3662E3]"
          action={wrappedCreateBoardAction}
        />
      </form>
    </div>
  );
};

export default CreateBoard;
