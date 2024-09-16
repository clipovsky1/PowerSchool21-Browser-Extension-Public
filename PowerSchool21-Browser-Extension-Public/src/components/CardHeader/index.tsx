import DropDownMenu from "../DropDownMenu";

interface Props {
  handleEdit: () => void;
  handleDelete: () => void;
}

function CardHeader({ handleDelete, handleEdit }: Props) {
  return (
    <div>
      <DropDownMenu onEdit={handleEdit} onDelete={handleDelete}>
      </DropDownMenu>
    </div>
  );
}

export default CardHeader;
