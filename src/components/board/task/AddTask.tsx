"use client";
import { SettingsContext } from "@/context/SettingsContext";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";

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
          <div className="fixed top-0 right-0 h-screen flex flex-col justify-center">
            <Dialog.Panel className="min-w-[650px] max-h-[97%] bg-white p-5 mr-3 flex-1 rounded-lg">
              <div>
                <p className="font-semibold text-xl">Add new task</p>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default AddTask;
