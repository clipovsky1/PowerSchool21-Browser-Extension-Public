import React, { useState } from "react";

interface Props {
  companyID: number;
}

const DistrictCompanyID: React.FC<Props> = ({ companyID }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex items-center relative">
      <p className="text-gray-600">{companyID}</p>
      <span
        className="ml-2 relative cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        ?
        {showTooltip && (
          <span className="absolute z-10 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap left-0 -top-8">
            The company id that is assigned in FreshDesk
          </span>
        )}
      </span>
    </div>
  );
};

export default DistrictCompanyID;
