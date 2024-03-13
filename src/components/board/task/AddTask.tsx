"use client";
import IconCover from "@/components/ui/IconCover";
import { SettingsContext } from "@/context/SettingsContext";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useContext } from "react";
import "@/styles/formStyles.css";
import { createTaskAction } from "@/app/action";
import { icons, statusInfo } from "@/constants";

const AddTask = () => {
  const { sidebar, closeSidebar } = useContext(SettingsContext);

  const show = sidebar && sidebar.type === "add task" ? true : false;
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
            <Dialog.Panel className="max-h-[97%] bg-white p-5 mr-3 flex-1 rounded-lg overflow-y-auto">
              <div className="flex justify-between items-center mb-5">
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
                action={createTaskAction}
              >
                <div className="field">
                  <label htmlFor="name" className="label">
                    Task name
                  </label>
                  <input name="name" placeholder="John Doe" className="input" />
                </div>
                <div className="field">
                  <label htmlFor="desc" className="label">
                    Task name
                  </label>
                  <textarea
                    name="desc"
                    placeholder="John Doe"
                    className="input h-44"
                  />
                </div>
                <div className="field">
                  <label htmlFor="" className="label">
                    Icons
                  </label>
                  <div className="icon-radio-group">
                    {Object.entries(icons).map(([key, value], index) => (
                      <div key={key}>
                        <input
                          type="radio"
                          id={key}
                          name="icon"
                          value={key}
                          defaultChecked={index === 0}
                        />
                        <label htmlFor={key}>
                          <Image
                            src={value}
                            alt={`${key} icon`}
                            width={25}
                            height={25}
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">
                    Status
                  </label>
                  <div className="status-radio-group">
                    {Object.entries(statusInfo).map(
                      ([key, value], index) =>
                        value.iconBg &&
                        value.icon && (
                          <div key={key}>
                            <input
                              type="radio"
                              id={key}
                              name="status"
                              value={key}
                              defaultChecked={index === 0}
                            />
                            <label htmlFor={key}>
                              <IconCover bg={value.iconBg}>
                                <Image
                                  src={value.icon}
                                  alt={`${key} icon`}
                                  width={25}
                                  height={25}
                                />
                              </IconCover>
                              {value.name}
                              <span className="bg-[#3662E3] rounded-full h-[20px] w-[20px] flex items-center justify-center ml-auto">
                                <Image
                                  src="/assets/done_round.svg"
                                  alt=""
                                  width={13}
                                  height={13}
                                />
                              </span>
                            </label>
                          </div>
                        )
                    )}
                  </div>
                </div>
                <div className="flex justify-end mt-5">
                  <button className="button bg-[#3662E3]">
                    Create task
                    <Image
                      src="/assets/done_round.svg"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </button>
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
