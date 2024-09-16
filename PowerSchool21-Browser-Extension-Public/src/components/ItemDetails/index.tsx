import { useEffect, useState } from "react";
import { District } from "../../district";
import DetailsHeader from "../CardHeader";

interface Props {
  selectedDistrict: District;
  handleDelete: () => void;
  handleUpdate: (tempDistrict: District) => void;
  setEditMode: (editMode: boolean) => void;
  editMode: boolean;
}

function ItemDetails({ selectedDistrict, handleDelete, handleUpdate, editMode, setEditMode }: Props) {
  const [tempDistrict, setTempDistrict] = useState<District>(selectedDistrict);

  useEffect(
    ()=>{
      setTempDistrict(selectedDistrict);
    },
    [selectedDistrict]
  );

  const handleSave = () => {
    handleUpdate(tempDistrict);
    setEditMode(false);
  };

  const handleChange = (key: keyof District, value: string | boolean) => {
    setTempDistrict((prevDistrict) => ({
      ...prevDistrict,
      [key]: value,
    }));
  };

  return (
    <div>
      <DetailsHeader handleDelete={handleDelete} handleEdit={setEditMode} />
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {editMode ? (
            <input
              type="text"
              value={tempDistrict.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          ) : (
            tempDistrict.name
          )}
        </h1>
        <p className="text-gray-700 mb-2">
          Company ID:{" "}
          {editMode ? (
            <input
              type="text"
              value={tempDistrict.companyID}
              onChange={(e) => handleChange("companyID", e.target.value)}
            />
          ) : (
            tempDistrict.companyID
          )}
        </p>
        <p className="text-gray-700 mb-2">
          PowerSchool URL:{" "}
          {editMode ? (
            <input
              type="text"
              value={tempDistrict.powerSchoolUrl}
              onChange={(e) => handleChange("powerSchoolUrl", e.target.value)}
            />
          ) : (
            tempDistrict.powerSchoolUrl
          )}
        </p>
        <div className="flex items-center mb-2">
          <p className="text-gray-700 mr-2">
            <strong>Billable:</strong>
          </p>
          {editMode ? (
            <input
              type="checkbox"
              checked={tempDistrict.isBillable}
              onChange={(e) => handleChange("isBillable", e.target.checked)}
            />
          ) : (
            <p className="text-gray-900">{tempDistrict.isBillable ? "Yes" : "No"}</p>
          )}
        </div>
        <div className="flex items-center">
          <p className="text-gray-700 mr-2">
            <strong>Hosted:</strong>
          </p>
          {editMode ? (
            <input
              type="checkbox"
              checked={tempDistrict.isHosted}
              onChange={(e) => handleChange("isHosted", e.target.checked)}
            />
          ) : (
            <p className="text-gray-900">{tempDistrict.isHosted ? "Yes" : "No"}</p>
          )}
        </div>
        {editMode && (
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetails;
