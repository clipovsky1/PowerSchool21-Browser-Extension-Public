import { useEffect, useState } from "react";
import { District } from "../../district";
import DistrictBillable from "./DistrictBillable";
import DistrictCompanyID from "./DistrictCompanyID";
import DistrictHosted from "./DistrictHosted";
import DistrictName from "./DistrictName";
import DistrictPSURL from "./DistrictPSURL";
import DropDownMenu from "../DropDownMenu";
import ClickToCopyUrl from "./ClickToCopyUrl";
import NewTicketButton from "./NewTicketButton";

interface Props {
  district: District;
  onEdit: () => void;
  onDelete: () => void;
}

const DistrictPage: React.FC<Props> = ({ district, onEdit, onDelete }) => {
  useEffect(() => {}, [district]);

  return (
    <>
      <div id="page-content" className="">
        <div id="details-page-header" className="border border-slate-100 flex flex-row">
          <div id="toolbar" className="w-full flex justify-between p-1">
            <div className="flex justify-start">
              <NewTicketButton url="https://powerschool21.freshdesk.com/a/tickets/new" toServer={district.powerSchoolUrl}/>
            </div>
            <div className="flex justify-end">
              <DropDownMenu onEdit={onEdit} onDelete={onDelete} />
            </div>
          </div>
        </div>

        <div id="district-label" className="p-4 text-md font-bold	uppercase text-center">
            <DistrictName name={district.name} />
        </div>

        <div id="details-page-body" className="p-4">
          <div className="grid grid-cols-2 gap-1">
            <DistrictHosted isHosted={district.isHosted} />
            <DistrictBillable isBillable={district.isBillable} />
          </div>

          <div id="powerschool-url" className="p-4 border rounded border-slate-100 flex justify-center">
            <div className="text-wrap text-center font-bold">
              <p>PowerSchool URL</p>
              <ClickToCopyUrl url={district.powerSchoolUrl}/>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default DistrictPage;
