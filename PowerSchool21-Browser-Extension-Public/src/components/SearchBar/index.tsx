import { useEffect, useRef, useState } from "react";

interface Props {
  onSearch: (query: string) => void;
  onEnter: () => void;
}

function Searchbar({ onSearch, onEnter }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    console.log(key);
    console.log(inputRef.current);
    if (inputRef.current && key === 'Enter') {
      console.log("Entered if statment.")
      onEnter();
    }
  }

  return (
    <div id="search-container">
        <input ref={inputRef} className="p-1 focus:outline-none" type="search" placeholder="Search..." onChange={handleInputChange} onKeyDown={handleEnter}/>
    </div>
  );
}

export default Searchbar;
