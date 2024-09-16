import React from "react";

interface Props {
    url: string
    toServer: string
}

const NewTicketButton: React.FC<Props> = ({url, toServer}) => {

    const onClick = (event: React.MouseEvent) => {
        if (event.shiftKey) {
            event.preventDefault();
            chrome.tabs.create({ url: url });
            chrome.tabs.create({ url: toServer });
        } else {
            console.log(toServer)
            chrome.tabs.create({ url: url });
        }
      };

  return (
    <button
      onClick={onClick}
      className="inline-block p-1 text-xs font-semibold text-slate-900 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 focus:outline-none"
      title="Shift + Click to Open with Server"
    >New Ticket</button>
  );
};

export default NewTicketButton;
