import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import Link from "next/link";

const solutions = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: AiOutlineInfoCircle,
  },
  {
    name: "Project",
    href: "/projects",
    icon: AiOutlineProject,
  },
  {
    name: "Event",
    href: "/event",
    icon: BsCalendarEvent,
  },
];

export default function Dropdown() {
  return (
    <Popover className="md:hidden">
      <>
        <Popover.Button className="text-white">
          <div className="flex items-center p-3">
            <AiOutlineMenu />
          </div>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="fixed max-w-sm top-16 sm:right-5 right-3 w-max mt-4">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-2 bg-white py-2 w-48">
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    passHref
                  >
                    <a className="flex flex-row transition duration-150 ease-in-out hover:bg-blue hover:bg-opacity-10 items-center gap-1">
                      <div className="flex items-center text-blue rounded-md justify-center flex-shrink-0 w-10 h-10 sm:h-12 sm:w-12 ml-3">
                        <item.icon aria-hidden="true" />
                      </div>
                      <p className="text-sm text-gray-900 font-lato font-medium">
                        {item.name}
                      </p>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}
