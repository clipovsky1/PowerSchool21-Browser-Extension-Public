import { useEffect, useRef, useState } from "react";
import { District } from "../../../district";
import { ClockIcon } from "@heroicons/react/24/outline";

interface Props {
  id: number;
  selected: boolean;
  district: District;
  onItemClick: (item: District) => void;
}

function DistrictListItem({
  id,
  selected,
  district,
  onItemClick,
}: Props) {
  const selectedClass = selected ? 'bg-gray-100' : '';

  const handleItemClick = () => {
    onItemClick(district);
  };

  useEffect(() => {
  }, [selected]);

  const listItemRef = useRef<HTMLLIElement>(null);
  if (selected && listItemRef.current) {
    listItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }


  return (
    <li
      className={`group py-4 hover:bg-gray-100 cursor-pointer ${selectedClass}`}
      id={id.toString()}
      onClick={handleItemClick}
      ref={listItemRef}
    >
      <div className="flex items-center justify-between">
        <div className="w-3/4 ml-3 text-xl text-left">
          <p className="max-w-full overflow-hidden overflow-ellipsis">
            {district.name}
          </p>
        </div>
        <div className="w-1/4 flex justify-center">
          {district.isBillable && <ClockIcon className="w-1/2" title="Billable" />}
        </div>
      </div>
    </li>
  );
}

export default DistrictListItem;
