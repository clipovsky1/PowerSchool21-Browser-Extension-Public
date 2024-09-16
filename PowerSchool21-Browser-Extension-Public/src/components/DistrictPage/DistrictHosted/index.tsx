import { ServerIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  isHosted: boolean;
}

const DistrictHosted: React.FC<Props> = ({ isHosted }) => {
  return (
    <div>
      {isHosted ? (
        <ServerIcon className="h-8 w-full text-green-500" />
      ) : (
        <ServerIcon className="h-8 w-full text-gray-500" />
      )}
      <p className="text-md text-center">{isHosted ? "Hosted" : "Not Hosted"}</p>
    </div>
  );
};

export default DistrictHosted;
