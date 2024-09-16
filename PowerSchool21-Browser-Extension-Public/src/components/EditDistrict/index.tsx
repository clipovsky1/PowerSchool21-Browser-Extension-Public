import { useEffect, useState } from "react";
import { District } from "../../district";
import { v4 as uuidv4 } from "uuid";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface Props {
  closeWindow: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, selectedDistrict: District) => void;
  selectedDistrict: District;
}

const EditDistrict: React.FC<Props> = ({
  closeWindow,
  handleSubmit,
  selectedDistrict,
}: Props) => {
    const [formData, setFormData] = useState<District>({
        id: selectedDistrict.id,
        name: selectedDistrict.name,
        companyID: selectedDistrict.companyID,
        powerSchoolUrl: selectedDistrict.powerSchoolUrl,
        isBillable: selectedDistrict.isBillable,
        isHosted: selectedDistrict.isHosted,
      });
    
      useEffect(() => {
        setFormData({
          id: selectedDistrict.id,
          name: selectedDistrict.name,
          companyID: selectedDistrict.companyID,
          powerSchoolUrl: selectedDistrict.powerSchoolUrl,
          isBillable: selectedDistrict.isBillable,
          isHosted: selectedDistrict.isHosted
        });
      }, [selectedDistrict]);

  return (
    <>
      <div id="page-content" className="">
        <div
          id="details-page-header"
          className="border border-slate-100 flex flex-row"
        >
          <div id="toolbar" className="w-full flex justify-end p-2">
            <button
              onClick={() => closeWindow()}
              className="hover:bg-slate-100"
            >
              <XMarkIcon className="text-gray-400 w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          id="create-label"
          className="mt-2 text-md font-bold uppercase text-center"
        >
          <h1>Edit {formData.name}</h1>
        </div>

        <div id="details-page-body" className="p-4">
          <div
            id="district-information"
            className="border rounded border-slate-100"
          >
            <form onSubmit={(e) => handleSubmit(e, selectedDistrict)}>
              <label
                htmlFor="create-district-name"
                className="mt-2 block text-gray-700 text-sm font-bold"
              >
                District Name
              </label>
              <input
                name="create-district-name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <label
                htmlFor="create-company-id"
                className="mt-2 block text-gray-700 text-sm font-bold"
              >
                Company ID
              </label>
              <input
                name="create-company-id"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                type="text"
                value={formData.companyID}
                onChange={(e) => setFormData({ ...formData, companyID: e.target.value || '' })}

              />

              <label
                htmlFor="create-powerschool-url"
                className="mt-2 block text-gray-700 text-sm font-bold"
              >
                PowerSchool Server URL
              </label>
              <input
                name="create-powerschool-url"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                type="text"
                value={formData.powerSchoolUrl}
                onChange={(e) => setFormData({ ...formData, powerSchoolUrl: e.target.value })}

              />

              <div
                id="checkbox-items"
                className="py-4 border-b border-slate-100 flex items-center justify-around"
              >
                <div
                  id="billable-checkbox"
                  className="w-24 flex justify-around"
                >
                  <label htmlFor="create-hosted">Hosted</label>
                  <input name="create-hosted" type="checkbox" checked={formData.isHosted} onChange={(e) => setFormData({ ...formData, isHosted: e.target.checked })}
/>
                </div>
                <div id="hosted-checkbox" className="w-24 flex justify-around">
                  <label htmlFor="create-billable">Billable</label>
                  <input name="create-billable" type="checkbox" checked={formData.isBillable} onChange={(e) => setFormData({ ...formData, isBillable: e.target.checked })}/>
                </div>
              </div>

              <div
                id="submit-items"
                className="mt-2 w-full flex items-center justify-around"
              >
                <button
                  type="submit"
                  className="w-24 h-8 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDistrict;
