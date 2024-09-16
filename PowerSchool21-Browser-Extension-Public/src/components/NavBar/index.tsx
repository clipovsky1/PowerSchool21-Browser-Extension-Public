import Searchbar from "../SearchBar";
import ToolBar from "../ToolBar";

interface Props {
  onSearch: (query: string) => void;
  onEnter: () => void;
  onCreateNew: () => void;
}

function Navbar({ onSearch, onEnter, onCreateNew }: Props) {


  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="https://www.powerschool21.com" target="_blank" className="text-white font-bold text-lg">PowerSchool21</a>
        </div>
        <div>
          <Searchbar onSearch={onSearch} onEnter={onEnter} />
        </div>
        <ToolBar onCreateNew={onCreateNew} />
      </div>
    </nav>
  );
}

export default Navbar;
