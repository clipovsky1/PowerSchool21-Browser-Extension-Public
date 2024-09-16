import { useState } from "react";
import { District } from "../../district";
import { v4 as uuidv4 } from "uuid";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface Props {
closeWindow: () => void;
handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CreateNewDistrict: React.FC<Props> = ({closeWindow, handleSubmit}: Props) => {
  return (
    <>
      <div id="page-content" className="">
        <div id="details-page-header" className="border border-slate-100 flex flex-row">
          <div id="toolbar" className="w-full flex justify-end p-2">
            <button onClick={() => closeWindow()}className="hover:bg-slate-100">
              <XMarkIcon className="text-gray-400 w-4 h-4" />
            </button>
          </div>
        </div>

        <div id="create-label" className="mt-2 text-md font-bold uppercase text-center">
            <h1>New District</h1>
        </div>

        <div id="details-page-body" className="p-4">
          <div id="district-information" className="">
            <form onSubmit={handleSubmit}>
              <label htmlFor="create-district-name" className="mt-2 block text-gray-700 text-sm font-bold">District Name</label>
              <input name="create-district-name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none" type="text" placeholder="Some District" />

              <label htmlFor="create-company-id" className="mt-2 block text-gray-700 text-sm font-bold">Company ID</label>
              <input name="create-company-id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none" type="text" placeholder="1171998" />

              <label htmlFor="create-powerschool-url" className="mt-2 block text-gray-700 text-sm font-bold">PowerSchool Server URL</label>
              <input name="create-powerschool-url" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none" type="text" placeholder="ps.somedistrict.org/admin" />

              <div id="checkbox-items" className="py-4 border-b border-slate-100 flex items-center justify-around">
                <div id="billable-checkbox" className="w-24 flex justify-around">
                  <label htmlFor="create-hosted">Hosted</label>
                  <input name="create-hosted" type="checkbox" />
                </div>
                <div id="hosted-checkbox" className="w-24 flex justify-around">
                  <label htmlFor="create-billable">Billable</label>
                  <input name="create-billable" type="checkbox" />
                </div>
              </div>

              <div id="submit-items" className="mt-2 w-full flex items-center justify-around">
              <button type="submit" className="w-24 h-8 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNewDistrict;
