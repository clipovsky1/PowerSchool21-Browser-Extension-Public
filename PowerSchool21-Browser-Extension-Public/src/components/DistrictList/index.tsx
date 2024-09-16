import { District } from "../../district";
import { useEffect, useState } from "react";
import DistrictListItem from "./DistrictListItem";
import { ArrowsUpDownIcon } from "@heroicons/react/16/solid";

interface Props {
  districts: District[];
  selectedDistrict: District | null | undefined;
  onItemClick: (item: District) => void;
}

function List({ selectedDistrict, districts, onItemClick }: Props) {
  useEffect(() => {}, [districts]);
  const [isAlphabetical, setIsAlphabetical] = useState(true);
  if (isAlphabetical) {
    districts.sort((a,b) => a.name.localeCompare(b.name));
  } else {
    districts.sort((a,b) => b.name.localeCompare(a.name));
  }

  return (
    <ul id="item-list" className="max-w-full divide-y divide-gray-200 dark:divide-gray-700 text-wrap text-ellipsis	">
      <div id="list-tools" className="p-2 max-w-full h-8 bg-white/75 backdrop-blur-sm sticky top-0 flex justify-end border-b-1 border-black">
        <div id="sort-tool" className="w-12 flex justify-between">
          <label htmlFor="sort-button" className="select-none">{isAlphabetical ? 'A-Z' : 'Z-A'}</label>
          <button id="sort-button" className="w-4 flex" title="Sort" onClick={() => {setIsAlphabetical(prev => !prev);}}>
            <ArrowsUpDownIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      {districts.map((district, index) => (
        <DistrictListItem
          key={index}
          id={index}
          district={district}
          selected={selectedDistrict?.id === district.id ? true : false}
          onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
}

export default List;
