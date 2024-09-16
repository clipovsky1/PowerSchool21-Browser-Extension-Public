import { ClockIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  isBillable: boolean;
}

const DistrictBillable: React.FC<Props> = ({ isBillable }) => {
  return (
    <div className="">
      {isBillable ? (
        <ClockIcon className="block h-8 w-full text-green-500" />
      ) : (
        <ClockIcon className="block h-8 w-full text-gray-500" />
      )}
      <p className="block text-md text-center">{isBillable ? "Billable" : "Not Billable"}</p>
    </div>
  );
};

export default DistrictBillable;
