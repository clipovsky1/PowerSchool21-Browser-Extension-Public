import React, { useEffect, useRef, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import EditMenuItem from "./EditMenuItem";
import DeleteMenuItem from "./DeleteMenuItem";

interface DropdownProps {
  onEdit: () => void;
  onDelete: () => void;
}

const DropDownMenu: React.FC<DropdownProps> = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        onClick={toggleDropdown}
      >
        <EllipsisVerticalIcon className="h-6 w-6 text-gray-400" />
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <EditMenuItem handleEdit={onEdit} closeDropdown={closeDropdown}/>
          <DeleteMenuItem handleDelete={onDelete} />
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
