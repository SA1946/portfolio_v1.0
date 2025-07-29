import logo from "../assets/logo.png";
import { Terminal, Play, Power } from "lucide-react";

const Navbar = ({ onRunDemo, onClear }) => {
  return (
    <nav className="bg-gray-800 fixed top-0 inset-x-0 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img className="h-12 w-auto " src={logo} alt="synsaLogo" />
        <Terminal className="sm:block  w-4 h-4 ml-4 hidden" />
        <span className=" sm:block text-gray-300 hidden">
          cd Synsa@portfolio
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onRunDemo}
          className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
        >
          <Play className="w-3 h-3" />
          <span>Demo</span>
        </button>
        <button
          onClick={() => onClear("clear")}
          className="flex items-center space-x-1 px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700 transition-colors"
        >
          <Power className="w-3 h-3" />
          <span>Clear</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
