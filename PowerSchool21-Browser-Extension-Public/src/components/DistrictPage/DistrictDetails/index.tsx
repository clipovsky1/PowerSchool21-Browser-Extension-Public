import { useEffect, useState } from "react";
import { District } from "../../../district";

interface Props {
  district: District;
  editMode: boolean;
  handleCancel: () => void;
  handleSave: (event: React.MouseEvent<HTMLButtonElement>, editedDistrict: District) => void;
}

const DistrictDetails: React.FC<Props> = ({
  district,
  editMode,
  handleCancel,
  handleSave
}: Props) => {
  const [currentDistrict, setCurrentDistrict] = useState<District>(district);
  useEffect(()=>{setCurrentDistrict(district);}, [district]);
   return (
    <div>
      {editMode ? (
        <EditCurrentDetails currentDistrict={currentDistrict} handleCancel={handleCancel} handleSave={handleSave} />
      ) : (
        <CurrentDetails currentDistrict={currentDistrict} />
      )}
    </div>
  );
};

export default DistrictDetails;

interface CurrentDetailsProps {
  currentDistrict: District;
}
const CurrentDetails: React.FC<CurrentDetailsProps> = ({
  currentDistrict,
}: CurrentDetailsProps) => {
  return (
    <div>
      <h2>District Details</h2>
      <p>ID: {currentDistrict.id}</p>
      <p>Name: {currentDistrict.name}</p>
      <p>PowerSchool URL: {currentDistrict.powerSchoolUrl}</p>
      <p>Company ID: {currentDistrict.companyID}</p>
      <p>Is Billable: {currentDistrict.isBillable ? "Yes" : "No"}</p>
      <p>Is Hosted: {currentDistrict.isHosted ? "Yes" : "No"}</p>
    </div>
  );
};

interface EditCurrentDetailsProps {
  currentDistrict: District;
  handleCancel:  () => void;
  handleSave: (event: React.MouseEvent<HTMLButtonElement>, editedDistrict: District) => void;
}

const EditCurrentDetails: React.FC<EditCurrentDetailsProps> = ({
  currentDistrict,
  handleCancel,
  handleSave
}: EditCurrentDetailsProps) => {
  const [editedDistrict, setEditedDistrict] = useState<District>(currentDistrict);

  const handleFieldChange = (fieldName: any, value: any) => {
    setEditedDistrict({
      ...editedDistrict,
      [fieldName]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={editedDistrict.id}
        onChange={(e) => handleFieldChange("id", e.target.value)}
      />
      <input
        type="text"
        value={editedDistrict.name}
        onChange={(e) => handleFieldChange("name", e.target.value)}
      />
      <input
        type="text"
        value={editedDistrict.powerSchoolUrl}
        onChange={(e) => handleFieldChange("powerSchoolUrl", e.target.value)}
      />
      <input
        type="text"
        value={editedDistrict.companyID}
        onChange={(e) => handleFieldChange("companyID", e.target.value)}
      />
      <select
        value={editedDistrict.isBillable.toString()}
        onChange={(e) =>
          handleFieldChange("isBillable", e.target.value === "true")
        }
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <select
        value={editedDistrict.isHosted.toString()}
        onChange={(e) =>
          handleFieldChange("isHosted", e.target.value === "true")
        }
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <button onClick={(e) => {handleSave(e, editedDistrict)}}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};
