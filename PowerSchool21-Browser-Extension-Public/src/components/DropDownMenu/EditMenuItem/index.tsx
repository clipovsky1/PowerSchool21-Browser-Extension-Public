
interface EditMenuItemProps {
  handleEdit: () => void;
  closeDropdown: () => void;
}

const EditMenuItem: React.FC<EditMenuItemProps> = ({ handleEdit, closeDropdown }) => {

  return (
    <button
      type="button"
      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
      role="menuitem"
      id="menu-item-edit"
      onClick={handleEdit}
    >
      Edit
    </button>
  );
};

export default EditMenuItem;
