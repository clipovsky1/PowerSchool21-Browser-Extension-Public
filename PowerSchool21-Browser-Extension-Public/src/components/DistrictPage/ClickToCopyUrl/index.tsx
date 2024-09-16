import React, { useEffect, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
interface Props {
  url: string;
}

const ClickToCopyUrl: React.FC<Props> = ({ url }) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    let timer: number;

    if (clicked) {
      timer = setTimeout(() => {
        setClicked(false);
      }, 250); // 250 ms
    }
    return () => clearTimeout(timer);
  }, [clicked]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setClicked(true);
  };

  return (
    <>
      <div id="button-set" className="flex w-32">
        <button
          className=" w-1/2 p-2 text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-l-lg"
          title={url}
          onClick={() => copyToClipboard(url)}
        >
          {clicked ? "Copied" : "Copy"}
        </button>
        <a
          href={url}
          className="w-1/2 p-2 text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r-lg flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowTopRightOnSquareIcon className="h-full w-1/2" />
        </a>
      </div>
    </>
  );
};

export default ClickToCopyUrl;
