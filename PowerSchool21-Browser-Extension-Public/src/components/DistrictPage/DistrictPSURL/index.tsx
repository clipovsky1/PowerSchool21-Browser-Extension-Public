import React from "react";

interface Props {
  URL: string;
}

const DistrictPSURL: React.FC<Props> = ({ URL }) => {
  return (
    <button
      onClick={() => {
        window.open(URL, "_blank");
      }}
      className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
    >PowerSchool</button>
  );
};

export default DistrictPSURL;
