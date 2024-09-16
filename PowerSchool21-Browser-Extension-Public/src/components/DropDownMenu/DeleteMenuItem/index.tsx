import React from "react";

interface DeleteMenuItemProps {
  handleDelete: () => void;
}

const DeleteMenuItem: React.FC<DeleteMenuItemProps> = ({ handleDelete }) => {
  return (
    <button
      type="button"
      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
      role="menuitem"
      id="menu-item-delete"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteMenuItem;
