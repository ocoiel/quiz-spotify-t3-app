import { Fragment, FC, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Button, ButtonProps } from "./Button";
import { BiLinkExternal } from "react-icons/bi";

interface IDropdown extends ButtonProps {
  title?: string;
  external?: boolean;
  icon?: ReactNode;
}

export const Dropdown: FC<IDropdown> = ({
  title,
  icon,
  ...props
}: IDropdown) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* href="#" -> just for test */}
      <Menu.Button as={Button} href="#" className={props.className} icon={icon}>
        {title}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-2 z-40 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-zinc-800 bg-background p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{props.children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export const DropdownItem = ({ external, ...props }: IDropdown) => {
  return (
    <Menu.Item>
      <a
        className={`block cursor-pointer justify-between rounded-lg px-3 py-2 text-sm text-stone-200 duration-200 hover:bg-grey-dark ${props.className}`}
        onClick={props.onClick}
      >
        <div className="flex items-center">
          {props.icon && <div className="mr-3">{props.icon}</div>}
          {props.children}
          {external && (
            <div className="ml-2">
              <BiLinkExternal size={12} className="text-gray-400" />
            </div>
          )}
        </div>
      </a>
    </Menu.Item>
  );
};
